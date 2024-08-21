import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { Button } from "../../components/Button/index";
import { Img } from "../../components/ImgMint/index";
import { Heading } from "../../components/HeadingMint/index";
import { Text } from "../../components/Text/index";
import ConnectWallet from "../../components/wallet/ConnectWallet";
import Loader from "../../components/Loader";
import { getBalance } from "../../utils/helper";

import {
  getLocalStorage,
  nullAddress,
  paymentTokens,
  setLocalStorage,
  vaultContractAddress,
} from "../../utils/helper";

export default function TokenMintSection({ referralAddress }) {
  const [selectedToken, setSelectedToken] = useState(paymentTokens[1]);
  const [inputAmount, setInputAmount] = useState("");
  const [updatedInputAmount, setUpdatedInputAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [OpnAmountInWei, setOpnAmountInWei] = useState(null);
  const [referral, setReferral] = useState(null);
  const [tokenBalance, setIsTokenBalance] = useState(0);
  const chain = useChainId();
  const { switchChain } = useSwitchChain();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (referralAddress) {
      setLocalStorage("refAddress", referralAddress);
      setReferral(referralAddress);
    } else {
      const data = getLocalStorage("refAddress");
      data && setReferral(data);
    }
  }, [referralAddress]);

  const isButtonDisabled = !inputAmount || !selectedToken;

  const [opnAmount, setOpnAmount] = useState(null);
  const handleTokenChange = (event) => {
    const selected = paymentTokens.find(
      (token) => token.id === event.target.value
    );
    setSelectedToken(selected);
  };

  const handleSelect = (token) => {
    handleTokenChange({ target: { value: token.id } });
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { isConnected } = useAccount();
  useEffect(() => {
    console.log(isConnected);
  }, [isConnected]);

  useEffect(() => {
    if (isConnected && chain !== 1) {
      switchChain({ chainId: 1 });
    }
  }, [isConnected, chain, switchChain]);

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    const parsedValue = parseFloat(inputValue);
    const tenPercent = parseFloat(parsedValue) * 0.1;
    const adjustedValue = (parseFloat(parsedValue) + tenPercent).toString();

    setInputAmount(inputValue);
    setUpdatedInputAmount(adjustedValue);
  };

  const fetchOPNReturns = async () => {
    if (!inputAmount) return;
    const contractABI = [
      // Include the ABI definition for calculateTotalOPNReturns
      "function calculateTotalOPNReturns(address paymentToken, uint256 amount) public view returns (uint256)",
    ];

    try {
      // Convert input amount to Wei based on the selected token's decimals
      const amountInWei = ethers.utils.parseUnits(
        inputAmount,
        selectedToken.decimals
      );

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        vaultContractAddress,
        contractABI,
        provider
      );

      // Call the calculateTotalOPNReturns method
      // const opnAmount = await contract.calculateTotalOPNReturns(
      //   selectedToken.address,
      //   amountInWei
      // );

      const opnAmount = await contract.calculateTotalOPNReturns(
        selectedToken.address,
        amountInWei
      );

      // Convert the returned OPN amount to a readable format if necessary
      const formattedOPNAmount = ethers.utils.formatUnits(opnAmount, 18);

      setOpnAmountInWei(opnAmount);
      setOpnAmount(formattedOPNAmount);
    } catch (error) {
      console.error("Error fetching OPN returns:", error);
    }
  };

  useEffect(() => {
    fetchOPNReturns();
  }, [selectedToken, inputAmount]);

  useEffect(() => {
    console.log("calling");
    getBalance(selectedToken?.address, setIsTokenBalance);
  }, [selectedToken?.address]);

  // Function to handle the mint process
  const handleMint = async () => {
    if (!inputAmount) return;

    try {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      console.log("handleMint 1 > ", {
        inputAmount,
        decimals: selectedToken.decimals,
        address: selectedToken.address,
      });

      const increasedAmountInWei = ethers.utils.parseUnits(
        updatedInputAmount,
        selectedToken.decimals
      );

      console.log("handleMint 1 > ", {
        updatedInputAmount,
        decimals: selectedToken.decimals,
      });

      // Create a contract instance for the selected token to approve the transaction
      const tokenContract = new ethers.Contract(
        selectedToken.address,
        [
          "function approve(address spender, uint256 amount) public returns (bool)",
          "function allowance(address owner, address spender) public view returns (uint256)",
        ],
        signer
      );

      // Check existing allowance
      const currentAllowance = await tokenContract.allowance(
        signer.getAddress(),
        vaultContractAddress
      );

      // If the current allowance is not zero, reset it to zero first
      if (!(currentAllowance.isZero() || selectedToken.symbol === "DAI")) {
        const resetApprovalTx = await tokenContract.approve(
          vaultContractAddress,
          0
        );
        await resetApprovalTx.wait();
      }

      // Now approve the new amount
      const approvalTx = await tokenContract.approve(
        vaultContractAddress,
        increasedAmountInWei
      );
      await approvalTx.wait();

      // Call the buyTokens function on your contract
      const vaultContract = new ethers.Contract(
        vaultContractAddress,
        [
          "function buyTokens(uint256 amount, address paymentToken, address _referral) external returns (uint256)",
        ],
        signer
      );

      const referralAddress = referral || nullAddress;
      console.log(referral, "referral");

      const buyTx = await vaultContract.buyTokens(
        OpnAmountInWei,
        selectedToken.address,
        referralAddress
      );
      const dataHash = await buyTx.wait();

      console.log("Tokens purchased successfully!", dataHash);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error during minting:", error);
    }
  };

  return (
    <>
      {/* token mint section */}
      <div className="relative mt-[118px] h-[604px]" id="mintToken">
        <Img
          src="images/img_background_copy.png"
          alt="Background Copy"
          className="absolute bottom-0 right-px top-0 my-auto h-[604px] w-[34%] object-contain opacity-60"
        />
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max items-start justify-center max-[1440px]:px-5 max-[1050px]:relative max-[1050px]:flex-col max-[1050px]:px-5">
          <div className="flex w-[46%] flex-col max-[1050px]:w-full">
            <div className="flex flex-col items-start gap-[18px]">
              <Button
                size="xs"
                className="min-w-[134px] !text-slate-900 rounded-[18px] font-medium uppercase !border !border-slate-900 rounded-full"
              >
                Token Mint
              </Button>
              <Text
                size="visa_headers_h2"
                as="p"
                className="text-3xl md:text-5xl"
              >
                Mint OPN Tokens{" "}
              </Text>
            </div>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-3 w-[90%] leading-[140%] !text-dark-1 max-[1440px]:w-full max-[1050px]:w-full max-[550px]:text-[15px] text-[20px]"
            >
              Our token&#39;s minting journey spans 500 days, ensuring a steady
              and controlled release into the market. This gradual approach
              helps maintain price stability and prevents market manipulation.
            </Text>
            {/* <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-5 w-[90%] leading-[140%] max-[1440px]:w-full max-[1050px]:w-full max-[550px]:text-[15px] text-[20px] max-[550px]:mb-6"
            >
              <span>Act fast! Only&nbsp;</span>
              <span className="font-medium">
                120.75K OPN tokens remain for today&#39;s mint. Don&#39;t miss
                out on this opportunity. Daily cap enforced for fairness.
              </span>
            </Text> */}
          </div>
          <div className="flex flex-1 flex-col gap-[60px] self-center max-[1050px]:self-stretch max-[550px]:gap-[30px]">
            <div className="flex flex-col items-end gap-6">
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  You will pay
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    type="number"
                    value={inputAmount}
                    onChange={handleAmountChange}
                    title={!isConnected && "Connect wallet first"}
                    disabled={!isConnected}
                    className="placeholder:text-slate-900"
                    name="Payment Input"
                    placeholder="$ 100"
                  />
                  <div className="min-w-[140px] md:min-w-[180px] flex gap-4 border border-solid bg-[#fff] px-[10px] py-0 rounded-[30px] items-center">
                    <div ref={dropdownRef} className="relative w-full">
                      <button
                        type="button"
                        className="appearance-none bg-transparent text-gray-700 font-medium px-2 py-2 w-full focus:outline-none flex items-center justify-between"
                        onClick={toggleDropdown}
                      >
                        <span>{selectedToken.symbol}</span>

                        <img
                          src={selectedToken.logoURI}
                          alt={selectedToken.symbol}
                          className="h-[32px] w-[32px] pointer-events-none"
                        />
                      </button>

                      {isOpen && (
                        <ul className="absolute z-10 mt-2 bg-white-0 border border-gray-300 rounded-md shadow-lg w-full  max-h-60 overflow-auto">
                          {paymentTokens.map((token) => (
                            <li
                              key={token.id}
                              className="w-full cursor-pointer hover:bg-gray-100 px-4 py-2 flex items-center justify-between"
                              onClick={() => handleSelect(token)}
                            >
                              <span>{token.symbol}</span>
                              <img
                                src={token.logoURI}
                                alt={token.symbol}
                                className="h-[32px] w-[32px] pointer-events-none"
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </label>
                <h4> Balance:{tokenBalance}</h4>
              </div>
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h4"
                  className="!text-grey"
                >
                  You will get
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    className="placeholder:text-slate-900"
                    type="text"
                    name="Token Input"
                    placeholder="OPN 1250"
                    value={
                      inputAmount === "" || !opnAmount ? "0" : ` ${opnAmount}`
                    }
                  />
                  <div className="flex gap-10 border border-solid bg-[#fff] pr-[40px] pl-[20px] py-[5px] rounded-[30px] items-center">
                    OPN
                    <img
                      className="h-[32px] w-[32px]"
                      src="images/icon_avatar.png"
                      alt="Ellipse 362"
                      loading="lazy"
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col items-end gap-6">
              {isConnected ? (
                <button
                  disabled={isButtonDisabled}
                  onClick={handleMint}
                  class="gap-[34px] font-medium white capitalize w-[90%] max-[1440px]:w-full max-[1050px]:w-full bg-[#2573C0] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium rounded-[26px] px-3 py-3 text-xl relative border border-slate-900"
                  style={{ color: "white" }}
                >
                  {loading ? <Loader /> : "Mint"}
                  <div class="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[5px]">
                    <img
                      class="h-[18px] w-[18px]"
                      src="images/img_arrowleft_blue_800.svg"
                      alt="Arrow Left"
                      loading="lazy"
                    />
                  </div>
                </button>
              ) : (
                <div className="flex justify-center w-[90%] max-[1440px]:w-full max-[1050px]:w-full items-center gap-2.5">
                  <h5 class="text-dark-0 font-outfit font-bold capitalize text-xl">
                    <ConnectWallet />
                  </h5>
                  <button
                    class="w-[36px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium text-sm px-2 py-2 rounded-3xl max-w-64"
                    style={{ backgroundColor: "black", padding: "12px" }}
                  >
                    <img
                      src="images/img_arrowleft_white_0.svg"
                      alt="testImg"
                      loading="lazy"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Button } from "../../components/ButtonGenz/index";
import { Img } from "../../components/ImgGenz/index";
import { Heading } from "../../components/HeadingGenz/index";
import { Input } from "../../components/InputGenz/index";
import { Text } from "../../components/TextGenz/index";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useAccount } from "wagmi";

import ConnectWallet from "../../components/wallet/ConnectWallet";
import Loader from "../../components/Loader";

import {
  paymentTokens,
  vaultContractAddress,
} from "../../utils/helper";


export default function TokenPurchaseSection({ referralAddress }) {


  const [selectedToken, setSelectedToken] = useState(paymentTokens[0]);
  const [inputAmount, setInputAmount] = useState("");
  const [updatedInputAmount, setUpdatedInputAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [OpnAmountInWei, setOpnAmountInWei] = useState(null);
  const [referral, setReferral] = useState('0x0000000000000000000000000000000000000000');

  useEffect(() => {
    referralAddress && setReferral(referralAddress);
  }, [referralAddress])


  const isButtonDisabled = !inputAmount || !selectedToken;

  const [opnAmount, setOpnAmount] = useState(null);
  const handleTokenChange = (event) => {
    const selected = paymentTokens.find(
      (token) => token.id === event.target.value
    );
    setSelectedToken(selected);
  };

  const { isConnected } = useAccount();
  useEffect(() => {
    console.log(isConnected);
  }, [isConnected]);

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    const parsedValue = parseFloat(inputValue);
    const tenPercent = parseFloat(parsedValue) * 0.10;
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
      )

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

  const handleMint = async () => {
    if (!inputAmount) return;
    const contractABI = [
      "function approve(address spender, uint256 amount) public returns (bool)",
      "function buyTokens(uint256 amount, address paymentToken, address _referral) external returns (uint256)",
    ];
    try {
      setLoading(true);
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Convert the input amount to Wei
      const amountInWei = ethers.utils.parseUnits(
        inputAmount,
        selectedToken.decimals
      );

      const increasedAmountInWei = ethers.utils.parseUnits(
        updatedInputAmount,
        selectedToken.decimals
      );

      // Create a contract instance for the selected token to approve the transaction
      const tokenContract = new ethers.Contract(
        selectedToken.address,
        contractABI,
        signer
      );
      console.log(increasedAmountInWei);
      // Approve the contract to spend the tokens
      const approvalTx = await tokenContract.approve(
        vaultContractAddress,
        increasedAmountInWei
      );

      await approvalTx.wait();

      // Call the buyTokens function on your contract
      const contract = new ethers.Contract(
        vaultContractAddress,
        contractABI,
        signer
      );
      const referralAddress = referral
      console.log(referralAddress);
      const buyTx = await contract.buyTokens(
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
      {/* token purchase section */}
      <div className="relative mt-[80px] md:mt-[100px] xl:mt-[180px] self-stretch">
        <div className="container-xs gap-[60px] my-auto flex h-max items-start justify-center max-[1440px]:px-5 max-[1050px]:relative flex-col md:flex-row max-[1050px]:px-5">
          <div className="flex md:w-[46%] flex-col gap-5 w-full">
            <div className="flex flex-col items-start gap-[30px]">
              <Button
                size="sm"
                color="undefined_undefined"
                className="flex rounded-[18px] border border-solid border-dark-0 p-1.5"
              >
                Token Mint
              </Button>
              <Text
                size="visa_desktop_headers_h3"
                as="p"
                className="w-[90%] leading-[105%] !text-dark-0 max-[1440px]:w-full max-[1440px]:text-[48px] max-[1050px]:w-full"
              >
                <>
                  Mint
                  <br />
                  OPN Tokens
                </>
              </Text>
            </div>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="w-[90%] leading-[140%] !text-dark-2 max-[1440px]:w-full max-[1050px]:w-full max-[1050px]:mb-2 max-[550px]:text-sm max-[550px]:mb-2"
            >
              Our token&#39;s minting journey spans 500 days, ensuring a steady
              and controlled release into the market. This gradual approach
              helps maintain price stability and prevents market manipulation.
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-[60px] self-center max-[1050px]:self-stretch max-[550px]:gap-[30px]  bg-[url(images/img_background_copy.png)] bg-right bg-no-repeat bg-right bg-contain">
            <div className="flex flex-col items-end gap-6">
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading as="h2">You will pay</Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[70px] pl-[26px] pr-3 text-[28px]">

                  <input
                    type="number"
                    value={inputAmount}
                    onChange={handleAmountChange}
                    title={!isConnected && "Connect wallet first"}
                    placeholder="Enter amount"
                    disabled={!isConnected}
                    className="bg-transparent text-xl font-semibold outline-none w-full"
                  />

                  <div className="flex gap-4 border border-solid bg-[#fff] pr-[40px] pl-[20px] py-[5px] rounded-[30px] items-center">
                    <select
                      className="appearance-none bg-transparent text-gray-700 font-medium p-4 rounded-full"
                      value={selectedToken.id}
                      onChange={handleTokenChange}
                    >
                      {paymentTokens.map((token) => (
                        <option key={token.id} value={token.id}>
                          {token.symbol}
                        </option>
                      ))}
                    </select>
                    <img
                      src={selectedToken.logoURI}
                      alt={selectedToken.symbol}
                      className="absolute w-6 h-6 top-1/2 right-2 transform -translate-y-1/2 pointer-events-none"
                    />
                  </div>
                  {/* <input type="text" name="Payment Input" placeholder="$ 100" />
                  <div className="flex gap-4 border border-solid bg-white-0 pr-[40px] pl-[20px] py-[5px] rounded-[30px]">
                    <img className="h-[32px] w-[32px]" src="images/img_ellipse_362.png" alt="Ellipse 362" loading="lazy" />
                    USD
                  </div> */}
                </label>
              </div>
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading as="h3">You will get</Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-0-3 shadow-sm text-dark-0 h-[70px] pl-[26px] pr-3 text-[28px]">
                  <input type="text" name="Token Input"
                    value={inputAmount === "" || !opnAmount ? "0" : ` ${opnAmount}`}
                    placeholder="OPN 1250" />
                  <div className="flex gap-4 border border-solid bg-white-0 pr-[40px] pl-[20px] py-[5px] rounded-[30px]">
                    <img className="h-[32px] w-[32px]" src="images/img_ellipse_362_26x32.png" alt="Ellipse 362" loading="lazy" />
                    OPN
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col items-end gap-6">
              {
                isConnected ?
                  <button
                    disabled={isButtonDisabled}
                    onClick={handleMint}
                    class={`gap-[34px] font-medium white capitalize w-[90%] max-[1440px]:w-full max-[1050px]:w-full bg-[#2573C0] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium rounded-[26px] px-3 py-3 text-xl relative border border-slate-900 ${isButtonDisabled ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
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
                  </button> :
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
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

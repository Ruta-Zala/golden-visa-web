import { Button } from "../../components/ButtonGenz";
import { Img } from "../../components/ImgMint";
import { Heading } from "../../components/HeadingMint";
import { Text } from "../../components/Text";
import { Input } from "../../components/InputGenz";
import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import { useOpnPrice } from "../../context/opnPriceContext";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import {
  paymentTokens,
  vaultContractAddress,
  vaultContractABI,
  setLocalStorage,
  getLocalStorage,
  nullAddress,
  web3StakeContractAddress,
  web3StakeContractABI,
} from "../../utils/helper";
import { getBalance } from "../../utils/helper";
import ConnectWallet from "../../components/wallet/ConnectWallet";
import Loader from "../../components/Loader";

export default function PurchaseSection({ referralAddress }) {
  const [selectedToken, setSelectedToken] = useState(paymentTokens[1]);
  const count = 1;
  const [referral, setReferral] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const chain = useChainId();
  const { switchChain } = useSwitchChain();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [tokenBalance, setIsTokenBalance] = useState(0);
  const { price } = useOpnPrice();
  const validateName = (name) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
    if (!validateName(name)) {
      setNameError("Name can only contain letters (A-Z, a-z).");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  useEffect(() => {
    if (referralAddress) {
      setLocalStorage("refAddress", referralAddress);
      setReferral(referralAddress);
    } else {
      const data = getLocalStorage("refAddress");
      data && setReferral(data);
    }
  }, [referralAddress]);

  const isButtonDisabled =
    !name || !email || !count || nameError != "" || emailError != "";

  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && chain !== 1) {
      switchChain({ chainId: 1 });
    }
  }, [isConnected, chain, switchChain]);

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

  const handleReferralChange = (event) => {
    setReferral(event.target.value);
  };

  const handleStakeWeb3 = async () => {
    setLoading(true);

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const walletAddress = await signer.getAddress();

      const totalAmount = ethers.utils.parseUnits(
        (count * 100000).toString(),
        selectedToken.decimals
      );

      const totalAmountInFloat = parseFloat(
        ethers.utils.formatUnits(totalAmount, selectedToken.decimals)
      );

      const tenPercent = totalAmountInFloat * 0.1;

      const tenPercentInUnits = ethers.utils.parseUnits(
        tenPercent.toString(),
        selectedToken.decimals
      );

      const adjustedAmount = totalAmount.add(tenPercentInUnits);

      const tokenContract = new ethers.Contract(
        selectedToken.address,
        [
          "function approve(address spender, uint256 amount) public returns (bool)",
          "function allowance(address owner, address spender) public view returns (uint256)",
        ],
        signer
      );

      const web3StakeContract = new ethers.Contract(
        web3StakeContractAddress,
        web3StakeContractABI,
        signer
      );

      const stakedUserData = await web3StakeContract.getUser(walletAddress);
      console.log(stakedUserData.baseAmount.toNumber(), "userData");

      if (stakedUserData.baseAmount.toNumber() !== 0) {
        throw new Error(
          "User already has a staked amount. Cannot stake again."
        );
      }

      const currentAllowance = await tokenContract.allowance(
        walletAddress,
        vaultContractAddress
      );
      if (!(currentAllowance.isZero() || selectedToken.symbol === "DAI")) {
        const resetApprovalTx = await tokenContract.approve(
          vaultContractAddress,
          0
        );
        await resetApprovalTx.wait();
      }

      const approvalTx = await tokenContract.approve(
        vaultContractAddress,
        adjustedAmount
      );
      await approvalTx.wait();

      const vaultContract = new ethers.Contract(
        vaultContractAddress,
        vaultContractABI,
        signer
      );

      const refAddr = referral || nullAddress;
      const stakeTx = await vaultContract.stakeWeb3(
        selectedToken.address,
        refAddr
      );
      const receipt = await stakeTx.wait();

      if (receipt) {
        const url = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/users`;

        const userData = {
          name: String(name),
          email: String(email),
          walletAddress: String(walletAddress),
          transactionHash: String(receipt.transactionHash),
          stackingType: "Stake Web3",
        };

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error("API Error:", errorData);
          }
        } catch (error) {
          console.error("Error sending data to backend:", error);
        }
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error during staking:", error);
    }
  };
  useEffect(() => {
    console.log("calling");
    getBalance(selectedToken?.address, setIsTokenBalance);
  }, [selectedToken?.address]);

  return (
    <>
      {/* purchase section */}
      <div
        className="mt-[80px] md:mt-[100px] xl:mt-[180px] flex justify-center self-stretch"
        id="participate"
      >
        <div className="container-xs flex gap-[30px] items-start justify-center max-[1440px]:px-5 flex-col md:flex-row max-[1050px]:px-5">
          <div className="flex w-full flex-col">
            <div className="flex flex-col items-start gap-[18px]">
              <Button
                size="xs"
                className="min-w-[170px] rounded-[18px] font-medium uppercase border border-dark-0"
              >
                Participate
              </Button>
              <Text
                size="visa_desktop_headers_h2"
                as="p"
                className="text-[72px]"
              >
                Mint Tokens
              </Text>
            </div>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-1 w-[80%] leading-[140%] !text-dark-2 max-[1440px]:w-full max-[1050px]:w-full"
            >
              Our token&#39;s minting journey spans 500 days, ensuring a steady
              and controlled release into the market. This gradual approach
              helps maintain price stability and prevents market manipulation.
            </Text>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-5 w-[90%] leading-[140%] max-[1440px]:w-full max-[1050px]:w-full max-[550px]:text-[15px] text-[20px] max-[550px]:mb-6"
            >
              <span className="bg-gray-200 px-4 py-2 rounded-[7px]">{`1 OPN = ${price} USDT`}</span>
            </Text>
            {/* <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-5 w-[80%] leading-[140%] max-[1440px]:w-full max-[1050px]:w-full"
            >
              <span className="font-medium">Act fast! Only&nbsp;</span>
              <span className="font-medium">
                120.75K OPN tokens remain for today&#39;s mint. Don&#39;t miss
                out on this opportunity. Daily cap enforced for fairness.
              </span>
            </Text> */}
          </div>
          <div className="relative h-[650px] w-full self-center rounded-[20px] bg-light_base">
            <Img
              src="images/img_icon_star_glossy_glass_style_442x384.png"
              alt="Star Image"
              className="absolute right-0 top-0 m-auto h-[442px] w-auto rounded-[20px] object-contain opacity-50"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-6 px-12 max-[1050px]:px-5 max-[550px]:px-4">
              <div className="flex w-[100%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  YOUR NAME
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    type="text"
                    name="Name Input"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => handleNameChange(e)}
                  />
                </label>
                {nameError && <p style={{ color: "red" }}>{nameError}</p>}
              </div>
              <div className="flex w-[100%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  YOUR EMAIL
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    type="text"
                    name="Email Input"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => handleEmailChange(e)}
                  />
                </label>
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              </div>
              <div className="w-full flex flex-col gap-2">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  Select Payment Token
                </Heading>
                <div className="flex items-center justify-between border border-solid border-blue-900_1e bg-white-0 rounded-full p-4 text-[25px]">
                  <div className="relative flex w-full gap-2 items-center justify-between">
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
                          className="h-[30px] w-[30px] pointer-events-none"
                        />
                      </button>

                      {isOpen && (
                        <ul className="absolute z-10 mt-5 bg-white-0 border border-gray-300 rounded-md shadow-lg w-1/2 md:w-full lg:w-1/2  max-h-60 overflow-auto">
                          {paymentTokens.map((token) => (
                            <li
                              key={token.id}
                              className="cursor-pointer hover:bg-gray-100 px-4 py-2 flex items-center justify-between"
                              onClick={() => handleSelect(token)}
                            >
                              <span>{token.symbol}</span>
                              <img
                                src={token.logoURI}
                                alt={token.symbol}
                                className="h-[30px] w-[30px] mr-2 pointer-events-none"
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <h4> Balance:{Math.floor((tokenBalance / 1e6) * 100) / 100}</h4>
              </div>
              <div className="w-full flex flex-col gap-2">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  Referral Address (Optional)
                </Heading>
                <div className="flex items-center justify-between border border-solid border-blue-900_1e bg-white-0 rounded-full p-4 text-[25px]">
                  <input
                    type="text"
                    value={referral}
                    onChange={handleReferralChange}
                    placeholder="Enter Referral Address"
                  />
                </div>
              </div>

              {/* <div className="flex w-[100%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  OPN AMOUNT TO STAKE
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    className="placeholder:text-slate-900"
                    type="text"
                    name="OPN Input"
                    placeholder="OPN 12.780"
                  />
                  <div className="flex text-lg gap-4 border border-solid bg-[#fff] pr-[40px] pl-[20px] py-[5px] rounded-[30px] items-center">
                    <img
                      className="h-[32px] w-[32px]"
                      src="images/img_ellipse_362_26x32.png"
                      alt="Ellipse 362"
                      loading="lazy"
                    />
                    OPN
                  </div>
                </label>
              </div>
              <div className="flex w-[100%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  CURRENT USD VALUE
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    className="placeholder:text-slate-900"
                    type="text"
                    name="Usd Input"
                    placeholder="$ 150.700"
                  />
                  <div className="flex gap-4 text-lg border border-solid bg-[#fff] pr-[40px] pl-[20px] py-[5px] rounded-[30px] items-center">
                    <img
                      className="h-[32px] w-[32px]"
                      src="images/img_ellipse_362.png"
                      alt="Ellipse 362"
                      loading="lazy"
                    />
                    USD
                  </div>
                </label>
              </div> */}
              {isConnected ? (
                <div className="flex flex-col gap-4">
                  <Button
                    disabled={isButtonDisabled}
                    onClick={handleStakeWeb3}
                    shape="round"
                    class={`font-bold py-3 px-8 rounded-full transition duration-200 ${
                      isButtonDisabled
                        ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                    color="white_0"
                    // className="flex items-center justify-center relative gap-[34px] self-stretch font-medium  bg-[#2573C0]"
                  >
                    <span class="absolute left-1/2 transform -translate-x-1/2">
                      {loading ? <Loader /> : "Participate"}
                    </span>
                    <div class="ml-auto flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                      <img
                        class="h-[12px] w-[12px]"
                        src="images/img_arrowleft_blue_800.svg"
                        alt="Arrow Left"
                        loading="lazy"
                      />
                    </div>
                  </Button>
                </div>
              ) : (
                <div className="flex justify-center w-full max-[1440px]:w-full max-[1050px]:w-full items-center gap-2.5 border-blue-900_1e border border-solid  rounded-[36px] p-4 bg-white-0">
                  <h5 class="text-dark-0 font-outfit font-bold capitalize text-xl">
                    <ConnectWallet />
                  </h5>
                  <button
                    class="w-[36px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium text-sm px-2 py-2 rounded-3xl max-w-64"
                    style={{
                      backgroundColor: "black",
                      padding: "12px",
                    }}
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

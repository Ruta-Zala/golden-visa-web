import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { Button } from "../../components/ButtonGenz/index";
import { Img } from "../../components/ImgGenz/index";
import { Text } from "../../components/TextGenz/index";
import { Heading } from "../../components/HeadingGenz/index";
import { Input } from "../../components/InputGenz/index";
import { DatePicker } from "../../components/DatePicker/index";
import ConnectWallet from "../../components/wallet/ConnectWallet";
import {
  paymentTokens,
  vaultContractAddress,
  vaultContractABI,
  getLocalStorage,
  setLocalStorage,
  nullAddress,
} from "../../utils/helper";
import Loader from "../../components/Loader";

export default function GoldenVisaGenZTalentProgramSection({
  referralAddress,
}) {
  const [selectedToken, setSelectedToken] = useState(paymentTokens[0]);
  const [count, setCount] = useState("");
  const [referral, setReferral] = useState(null);
  const [requiredAmount, setRequiredAmount] = useState(null);
  const [adjustedAmount, setAdjustedAmount] = useState(null);
  const { isConnected } = useAccount();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const isButtonDisabled = !name || !email || !count;

  const handleTokenChange = (event) => {
    const selected = paymentTokens.find(
      (token) => token.id === event.target.value
    );
    setSelectedToken(selected);
    setRequiredAmount(null);
  };

  const handleCountChange = (event) => {
    setCount(event.target.value);
    setRequiredAmount(null);
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

  const handleReferralChange = (event) => {
    setReferral(event.target.value);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (count) {
        fetchRequiredAmount();
      }
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [count, selectedToken]);

  const fetchRequiredAmount = async () => {
    if (!count || count <= 0) return;
    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        vaultContractAddress,
        vaultContractABI,
        provider
      );
      // Calculate the total OPN amount to stake (count * 10,000)
      const totalOPN = ethers.utils.parseUnits((count * 10000).toString(), 18);

      let requiredAmount;
      if (selectedToken.symbol === "DAI") {
        requiredAmount = await contract.calculateTotalDAIRequired(totalOPN);
      } else if (selectedToken.symbol === "USDC") {
        requiredAmount = await contract.calculateTotalUSDCRequired(totalOPN);
      } else if (selectedToken.symbol === "USDT") {
        requiredAmount = await contract.calculateTotalUSDTRequired(totalOPN);
      }

      const calculatedAmount = ethers.utils.formatUnits(
        requiredAmount,
        selectedToken.decimals
      );
      const tenPercent = parseFloat(calculatedAmount) * 0.1;
      const adjustedAmount = (
        parseFloat(calculatedAmount) + tenPercent
      ).toString();
      setLoading(false);
      setRequiredAmount(calculatedAmount);
      setAdjustedAmount(adjustedAmount);
      return {
        requiredAmount: calculatedAmount || null,
        adjustedAmount: adjustedAmount || null,
      };
    } catch (error) {
      setLoading(false);
      console.error("Error fetching required amount:", error);
    }
  };

  const handleStakeGenz = async () => {
    if (!count || count <= 0 || !requiredAmount) return;
    setLoading(true);
    const contractABI = [
      "function approve(address spender, uint256 amount) public returns (bool)",
      "function buyTokens(uint256 amount, address paymentToken, address _referral) external returns (uint256)",
      {
        inputs: [
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_count",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_referral",
            type: "address",
          },
        ],
        name: "stakeGenz",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const walletAddress = await signer.getAddress();

      // Convert the required amount to Wei based on the selected token's decimals
      const amountInWei = ethers.utils.parseUnits(
        adjustedAmount,
        selectedToken.decimals
      );

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
        amountInWei
      );
      await approvalTx.wait();

      const contract = new ethers.Contract(
        vaultContractAddress,
        vaultContractABI,
        signer
      );

      const refAddr = referral || nullAddress;

      console.log(refAddr);
      const stakeTx = await contract.stakeGenz(
        selectedToken.address,
        refAddr,
        count
      );
      const receipt = await stakeTx.wait();

      // post email & name & walletAddress, txHash on the api
      if (receipt) {
        const url = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/users`;

        const userData = {
          name: String(name),
          email: String(email),
          walletAddress: String(walletAddress),
          transactionHash: String(receipt.transactionHash),
          stackingType: String("Stake GenZ"),
        };
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });

          if (response.ok) {
            const data = await response.json();
            console.log("User created successfully:", data);
          } else {
            const errorData = await response.json();
            console.error("Error creating user:", errorData.message);
          }
        } catch (error) {
          setLoading(false);
          console.error("Error:", error);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error during staking:", error);
    }
  };

  return (
    <>
      {/* golden visa gen z talent program section */}
      <div
        className="mt-[80px] md:mt-[100px] xl:mt-[180px] flex flex-col items-center self-stretch"
        id="participate"
      >
        <div className="container-xs flex flex-col gap-[180px] max-[1440px]:gap-[135px] max-[1440px]:px-5 max-[1050px]:gap-[135px] max-[1050px]:px-5 max-[550px]:gap-[90px]">
          <div className="flex items-start flex-col md:flex-row gap-[20px] max-[550px]:gap-[30px]">
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col items-start gap-[30px]">
                <Button
                  size="sm"
                  color="undefined_undefined"
                  className="flex rounded-[18px] border border-solid border-dark-0 p-1.5"
                >
                  Mint token
                </Button>
                <Text
                  size="visa_desktop_headers_h4"
                  as="p"
                  className="w-[80%] leading-[105%] !text-dark-0 max-[1440px]:w-full text-3xl md:text-5xl"
                >
                  Secure Mint Form
                </Text>
              </div>
              <Text
                size="visa_desktop_body_text_20"
                as="p"
                className="w-[80%] leading-[140%] !text-dark-2 max-[1440px]:w-full max-[1050px]:w-full"
              >
                Our token&#39;s minting journey spans 500 days, ensuring a
                steady and controlled release into the market. This gradual
                approach helps maintain price stability and prevents market
                manipulation.
              </Text>
              {/* <Text
                size="visa_desktop_body_text_20"
                as="p"
                className="w-[80%] leading-[140%] !text-dark-0 max-[1440px]:w-full max-[1050px]:w-full max-[1050px]:mb-4"
              >
                <span className="font-medium">Act fast! Only&nbsp;</span>
                <span className="font-medium">
                  120.75K OPN tokens remain for today&#39;s mint. Don&#39;t miss
                  out on this opportunity. Daily cap enforced for fairness.
                </span>
              </Text> */}
            </div>
            <div className="relative h-[630px] xl:h-[756px] w-full self-center rounded-[20px] bg-light_base">
              <Img
                src="images/img_icon_star_glossy_glass_style.png"
                alt="Star Image"
                className="absolute right-0 top-0 m-auto h-[654px] w-[74%] object-contain opacity-50"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-[60px] px-12 max-[1050px]:px-5 max-[550px]:gap-[30px] max-[550px]:px-4 max-[550px]:items-start">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-start gap-2">
                    <Heading as="h2">Your name</Heading>
                    <Input
                      shape="round"
                      name="Name Input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={`John Doe`}
                      className="self-stretch max-[1050px]:text-[20px]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Heading as="h3">You email</Heading>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      shape="round"
                      type="email"
                      name="Email Input"
                      placeholder={`johndoe@gmail.com`}
                      className="self-stretch max-[1050px]:text-[20px]"
                    />
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <Heading as="h2">Select Payment Token</Heading>
                    <div className="flex items-center justify-between border border-solid border-blue-900_1e bg-transparent rounded-full p-[0.75rem]">
                      <div className="relative flex w-full gap-2 items-center justify-between">
                        <select
                          className="appearance-none bg-transparent text-gray-700 font-medium px-2 rounded-full w-full focus:outline-none"
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
                          className="h-[25px] w-[25px] pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <Heading as="h2">Enter Count of 10,000 OPN Units</Heading>
                    <div className="self-stretch max-[1050px]:text-[20px] flex items-center justify-center cursor-text border-blue-900_1e border border-solid  rounded-[36px] h-[50px] px-[26px] text-[16px]">
                      <input
                        type="number"
                        value={count}
                        onChange={handleCountChange}
                        placeholder="Enter count (e.g., 1 for 10,000 OPN)"
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <Heading as="h2"> Referral Address (Optional)</Heading>
                    <div className="self-stretch max-[1050px]:text-[20px] flex items-center justify-center cursor-text border-blue-900_1e border border-solid  rounded-[36px] h-[50px] px-[26px] text-[16px]">
                      <input
                        type="text"
                        value={referral}
                        onChange={handleReferralChange}
                        placeholder="Enter referral address"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <Heading as="h2">
                      {" "}
                      Required {selectedToken.symbol} Amount
                    </Heading>
                    <div className="self-stretch max-[1050px]:text-[20px] flex items-center justify-center cursor-text border-blue-900_1e border border-solid  rounded-[36px] h-[50px] px-[26px] text-[16px]">
                      <span className="text-xl font-semibold">
                        {requiredAmount !== null
                          ? `${requiredAmount} ${selectedToken.symbol}`
                          : "Calculate amount"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    {/* <div className="flex flex-col items-start gap-2">
                      <Heading as="h4">OPN amount to stake</Heading>
                      <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[50px] pl-[26px] pr-2 text-[24px]">
                        <input type="text" name="Token Input" placeholder="OPN 1250" />
                        <div className="flex gap-4 border border-solid bg-white-0 pr-[40px] pl-[20px] py-[5px] rounded-[30px] text-[20px]">
                          <img className="h-[25px] w-[25px]" src="images/img_ellipse_362_26x32.png" alt="Ellipse 362" loading="lazy" />
                          OPN
                        </div>
                      </label>
                    </div> */}
                    {isConnected ? (
                      <div className="flex flex-col gap-4">
                        {/* <Button
                          disabled={isButtonDisabled}
                          onClick={fetchRequiredAmount}
                          variant="gradient"
                          shape="round"
                          color="blue_700_blue_800_02"
                          rightIcon={
                            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[10px]">
                              <Img
                                src="images/img_arrowleft_blue_800_01.svg"
                                alt="Arrow Left"
                                className="h-[18px] w-[18px]"
                              />
                            </div>
                          }
                          className={`gap-[34px] self-stretch font-medium capitalize relative
                          ${isButtonDisabled
                              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                            }
                          `}
                        >
                          Calculate
                        </Button> */}
                        <button
                          onClick={handleStakeGenz}
                          disabled={isButtonDisabled}
                          class={`font-bold py-3 px-8 rounded-full transition duration-200 ${
                            isButtonDisabled
                              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }`}
                        >
                          {loading ? <Loader /> : "Stake Genz"}
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center w-full max-[1440px]:w-full max-[1050px]:w-full items-center gap-2.5 border-blue-900_1e border border-solid  rounded-[36px] p-1">
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
                    {/* <div className="flex flex-col gap-4">
                      <Button
                        variant="gradient"
                        shape="round"
                        color="blue_700_blue_800_02"
                        rightIcon={
                          <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[10px]">
                            <Img
                              src="images/img_arrowleft_blue_800_01.svg"
                              alt="Arrow Left"
                              className="h-[18px] w-[18px]"
                            />
                          </div>
                        }
                        className="gap-[34px] self-stretch font-medium capitalize relative"
                      >
                        Participate
                      </Button> */}
                    {/* <Button
                        shape="round"
                        color="undefined_undefined"
                        rightIcon={
                          <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-accent-dark_blue absolute right-[10px]">
                            <Img
                              src="images/img_arrowleft_white_0.svg"
                              alt="Arrow Left"
                              className="h-[18px] w-[18px]"
                            />
                          </div>
                        }
                        className="gap-[34px] self-stretch font-medium capitalize border border-solid border-slate-950 relative"
                      >
                        Buy Boost
                      </Button> */}
                    {/* </div> */}
                    {/* <div className="flex flex-col items-start gap-2 mt-10">
                      <Heading as="h5">Current usd Value</Heading>
                      <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[50px] pl-[26px] pr-2 text-[24px]">
                        <input type="text" name="Payment Input" placeholder="$ 100" />
                        <div className="flex gap-4 border border-solid bg-white-0 pr-[40px] pl-[20px] py-[5px] rounded-[30px] text-[20px]">
                          <img className="h-[25px] w-[25px]" src="images/img_ellipse_362.png" alt="Ellipse 362" loading="lazy" />
                          USD
                        </div>
                      </label>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex w-full flex-col gap-[58px] rounded-[20px] bg-dark-0 p-10 max-[550px]:gap-[29px] max-[550px]:p-4">
              <div className="flex flex-col items-start gap-3.5">
                <Text
                  size="visa_desktop_headers_h3"
                  as="p"
                  className="!text-white-0 max-[1050px]:text-[28px] max-[550px]:text-[22px]"
                >
                  Boost Mint 
                </Text>
                <Text
                  size="visa_desktop_body_text_20"
                  as="p"
                  className="w-full leading-[140%] !text-white-1 max-[550px]:text-sm"
                >
                  ou commit a certain amount of IOPn tokens to a staking
                  contract for a specified duration.
                </Text>
              </div>
              <div className="mb-1.5 flex flex-col gap-6">
                <div className="flex flex-col items-start gap-2">
                  <Heading as="h6" className="!text-white-2">
                    Boost Amount
                  </Heading>
                  <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[50px] pl-[26px] pr-2 text-[24px]">
                    <input type="text" name="Token Input" placeholder="OPN 12.780" value={'OPN 12.780'} />
                    <div class="flex gap-4 border border-solid bg-white-0 pr-[40px] pl-[20px] py-[5px] rounded-[30px] text-[20px] bg-slate-100" >
                      <img class="h-[25px] w-[25px]" src="images/img_ellipse_362_26x32.png" alt="Ellipse 362" loading="lazy" />
                      OPN
                    </div>
                  </label>
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="gradient"
                    shape="round"
                    color="blue_700_blue_800_02"
                    rightIcon={
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[10px]">
                        <Img
                          src="images/img_arrowleft_blue_800_01.svg"
                          alt="Arrow Left"
                          className="h-[18px] w-[18px]"
                        />
                      </div>
                    }
                    className="gap-[34px] self-stretch font-medium capitalize relative"
                  >
                    Buy boost
                  </Button>
                  <Text
                    as="p"
                    className="text-center leading-[130%] !text-white-2 max-[550px]:text-xs"
                  >
                    *Copy this link and share it witch other people to nvite
                    your network to embark on this exciting journey with you and
                    watch your token balance grow.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-12 rounded-[20px] bg-light_base p-12 max-[1050px]:p-5 max-[550px]:p-4">
              <div>
                <div className="flex flex-col items-start gap-[26px]">
                  <Button
                    size="sm"
                    color="undefined_undefined"
                    className="flex rounded-[18px] border border-solid border-dark-0 p-1.5"
                  >
                    Mint token
                  </Button>
                  <Text
                    size="visa_desktop_headers_h3"
                    as="p"
                    className="!text-dark-0 max-[1440px]:text-[48px]"
                  >
                    Staking Your Tokens
                  </Text>
                </div>
                <Text
                  size="visa_desktop_body_text_20"
                  as="p"
                  className="leading-[140%] !text-dark-2 max-[550px]:text-[15px]"
                >
                  <span>
                    Staking is a process where you lock up your OPN tokens for a
                    specific period to support the&nbsp;
                  </span>
                  <span>OPN network.&nbsp;</span>
                </Text>
              </div>
              <div className="flex h-[220px] md:h-auto items-start justify-center rounded-[20px] bg-[url(/public/images/boost-1k.png)] bg-cover bg-no-repeat bg-[75%] md:bg-center p-[18px]">
                <div className="mb-2 flex flex-1 flex-col items-start gap-1 self-end md:self-center ">
                  <Heading
                    size="visa_desktop_headers_h4"
                    as="p"
                    className="!text-white-0 max-[1050px]:text-[26px] max-[550px]:text-[24px]"
                  >
                    Boost with 1k
                  </Heading>
                  <Text
                    size="visa_desktop_body_text_18"
                    as="p"
                    className="w-[62%] leading-[140%] !text-white-3 max-[1440px]:w-full max-[1050px]:w-full max-[1050px]:text-lg"
                  >
                    Get additional entry by paying 1000 OPN from the staked
                    balance
                  </Text>
                </div>
                <Button
                  size="lg"
                  variant="fill"
                  shape="circle"
                  className="mt-1 w-[52px] !rounded-[26px] border border-solid bg-slate-50"
                >
                  <Img src="images/img_arrow_left_accent_black.svg" />
                </Button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

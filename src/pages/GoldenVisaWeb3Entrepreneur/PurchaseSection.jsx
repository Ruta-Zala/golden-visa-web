import { Button } from "../../components/ButtonGenz";
import { Img } from "../../components/ImgMint";
import { Heading } from "../../components/HeadingMint";
import { Text } from "../../components/Text";
import { Input } from "../../components/InputGenz";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import {
  paymentTokens,
  vaultContractAddress,
  vaultContractABI,
} from "../../utils/helper";
import ConnectWallet from "../../components/wallet/ConnectWallet";
import Loader from "../../components/Loader";


export default function PurchaseSection({ referralAddress }) {

  const [selectedToken, setSelectedToken] = useState(paymentTokens[0]);
  const [count, setCount] = useState(""); 
  const [referral, setReferral] = useState('0x0000000000000000000000000000000000000000');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    referralAddress && setReferral(referralAddress);
  }, [referralAddress])

  const isButtonDisabled = !name || !email || !count;
  const { isConnected } = useAccount();

  const handleTokenChange = (event) => {
    const selected = paymentTokens.find(
      (token) => token.id === event.target.value
    );
    setSelectedToken(selected);
  };

  const handleCountChange = (event) => {
    setCount(event.target.value);
  };

  const handleReferralChange = (event) => {
    setReferral(event.target.value);
  };

  const handleStakeWeb3 = async () => {
    if (!count || count <= 0) return;
    setLoading(true);
    const contractABI = [
      "function approve(address spender, uint256 amount) public returns (bool)",
      "function buyTokens(uint256 amount, address paymentToken, address _referral) external returns (uint256)",
    ];
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const walletAddress = await signer.getAddress();

      // Calculate the total amount of the selected token needed (count * $100,000)
      const totalAmount = ethers.utils.parseUnits(
        (count * 100000).toString(),
        selectedToken.decimals
      );

      // Convert totalAmount to a float for percentage calculation
      // Note: Direct conversion from BigNumber to float is not recommended due to precision issues
      const totalAmountInFloat = parseFloat(ethers.utils.formatUnits(totalAmount, selectedToken.decimals));

      // Calculate 10% of the totalAmountInFloat
      const tenPercent = totalAmountInFloat * 0.10;

      // Convert tenPercent back to BigNumber
      const tenPercentInUnits = ethers.utils.parseUnits(tenPercent.toString(), selectedToken.decimals);

      // Add 10% to the totalAmount
      const adjustedAmount = totalAmount.add(tenPercentInUnits);

      // Create a contract instance for the selected token to approve the transaction
      const tokenContract = new ethers.Contract(
        selectedToken.address,
        contractABI,
        signer
      );

      // Approve the vault contract to spend the selected token amount
      const approvalTx = await tokenContract.approve(
        vaultContractAddress,
        adjustedAmount
      );
      await approvalTx.wait();

      // Call the stakeWeb3 function on your contract
      const contract = new ethers.Contract(
        vaultContractAddress,
        vaultContractABI,
        signer
      );
      const refAddr = "0x7aACd024Ba969Fed84A11ffEAD4c6A5F2367aA20";
      const stakeTx = await contract.stakeWeb3(
        selectedToken.address,
        refAddr
      );
      const receipt = await stakeTx.wait();

      // post email & name & walletAddress, txHash on the api
      if (receipt) {

        const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/users`

        const userData = {
          name: String(name),  // Convert to string to avoid any potential object issues
          email: String(email),
          walletAddress: String(walletAddress),
          transactionHash: String(receipt.transactionHash),
          stackingType: String("Stake Web3")
        };

        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData) // Convert the userData to a JSON string
          });

          if (response.ok) {
            const data = await response.json();
          } else {
            const errorData = await response.json();
          }

        } catch (error) {
          setLoading(false);
          console.error('Error:', error);
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
      {/* purchase section */}
      <div className="mt-[80px] md:mt-[100px] xl:mt-[180px] flex justify-center self-stretch" id="participate">
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
                    className="placeholder:text-slate-900"
                    type="text"
                    name="Name Input"
                    placeholder="John Deo"
                    value={name} onChange={(e) => setName(e.target.value)}
                  />
                </label>
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
                    className="placeholder:text-slate-900"
                    type="text"
                    name="Email Input"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@gmail.com"
                  />
                </label>
              </div>

              <div className="w-full mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Select Payment Token
                </label>
                <div className="flex items-center justify-between bg-gray-100 rounded-full p-4">
                  <div className="relative inline-block w-full">
                    <select
                      className="appearance-none bg-transparent text-gray-700 font-medium p-4 rounded-full w-full"
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
                </div>
              </div>

              <div className="w-full mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Enter Count of $100,000 Units
                </label>
                <input
                  type="number"
                  value={count}
                  onChange={handleCountChange}
                  placeholder="Enter count (e.g., 1 for $100,000)"
                  className="bg-transparent text-xl font-semibold outline-none w-full p-4 bg-gray-100 rounded-full"
                  min="1"
                />
              </div>

              <div className="w-full mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Referral Address (Optional)
                </label>
                <input
                  type="text"
                  value={referral}
                  onChange={handleReferralChange}
                  placeholder="Enter referral address"
                  className="bg-transparent text-xl font-semibold outline-none w-full p-4 bg-gray-100 rounded-full"
                />
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
              {
                isConnected ?
                  <>
                    <button
                      disabled={isButtonDisabled}
                      onClick={handleStakeWeb3}
                      class={`font-bold py-3 px-8 rounded-full transition duration-200 ${isButtonDisabled
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                    >
                      {loading ? <Loader /> : "Stake Web3"}
                    </button>
                    {/* <button
                      disabled={isButtonDisabled}
                      onClick={handleStakeWeb3}
                      shape="round"
                      className={`flex items-center justify-center relative gap-[34px] self-stretch font-medium  bg-[#2573C0]`}
                      color="white_0"
                    >
                      <span class="absolute left-1/2 transform -translate-x-1/2">
                        {loading ? <Loader /> : "Stake Web3"}
                      </span>
                      <div class="ml-auto flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                        <img
                          class="h-[12px] w-[12px]"
                          src="images/img_arrowleft_blue_800.svg"
                          alt="Arrow Left"
                          loading="lazy"
                        />
                      </div>
                    </button> */}
                  </>
                  : <>
                    <p className="text-red-600 font-semibold">
                      <ConnectWallet />
                    </p>
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

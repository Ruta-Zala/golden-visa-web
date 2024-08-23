import React, { Suspense, useEffect, useState } from "react";
import Referral1 from "../../../assets/profile/referrals/referral1.svg";
import Referral2 from "../../../assets/profile/referrals/referral2.svg";
import Referral3 from "../../../assets/profile/referrals/referral3.svg";
import MetaMask from "../../../assets/profile/referrals/MetaMask.svg";
import CoinbaseWallet from "../../../assets/profile/referrals/CoinbaseWallet.svg";
import WalletConnect from "../../../assets/profile/referrals/WalletConnect.svg";
import CopyIcon from "../../../assets/profile/referrals/copy.svg";
import Formatic from "../../../assets/profile/referrals/Formatic.svg";
import Twitter from "../../../assets/profile/referrals/twitter.svg";
import Instagram from "../../../assets/profile/referrals/instagram.svg";
import Whatsapp from "../../../assets/profile/referrals/whatsapp.svg";
import Linkedin from "../../../assets/profile/referrals/linkedin.svg";
import Facebook from "../../../assets/profile/referrals/facebook.svg";
import { Text } from "../../../components/Text";
import ReferralCard from "./ReferralCard";
import "./referral.css";
import { handleScrollToSection } from "../../../utils/helper";
import ConnectWallet from "../../../components/wallet/ConnectWallet";
import { useLocation } from "react-router-dom";
import { useAccount } from "wagmi";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import ReferralHistory from "./ReferralHistory";

const referralRewardsList = [
  {
    rewardPercentage: "7.5%",
    rewardDescription: "Mint & referral reward tier",
    img: Referral1,
    imgClassName: "w-[80px] h-[80px]",
  },
  {
    rewardPercentage: "10%",
    rewardDescription: "Web3 talent program reward tier",
    img: Referral2,
    imgClassName: "w-[80px] h-[80px] scale-[1.3]",
  },
  {
    rewardPercentage: "124",
    rewardDescription: "Web3 Entrepreneur referrals count",
    img: Referral3,
    imgClassName: "w-[80px] h-[80px]",
  },
];
const tabs = [
  { name: "OPN Token and Minting", href: "referralCard-0" },
  { name: "Web3 Talent Program Referrals", href: "referralCard-1" },
  { name: "Web3 Entrepreneur Referrals", href: "referralCard-2" },
  { name: "Generate Link", href: "generateLink" },
  { name: "Referrals History", href: "referralHistory" },
];

const referralList = [
  {
    rewardPercentage: "5%",
    rewardDescription: (
      <>
        for referrals buying between <br /> $500 and $99,999
      </>
    ),
  },
  {
    rewardPercentage: "7%",
    rewardDescription: (
      <>
        for referrals buying between <br /> $100,000 and $249,999
      </>
    ),
  },
  {
    rewardPercentage: "10%",
    rewardDescription: (
      <>
        for referrals buying <br /> over $250,000
      </>
    ),
  },
];

const referralList2 = [
  {
    rewardPercentage: "10%",
    rewardDescription: (
      <>
        reward for 1 to 199 entries <br /> referred
      </>
    ),
  },
  {
    rewardPercentage: "15%",
    rewardDescription: (
      <>
        reward for 1,000 entries <br /> onwards
      </>
    ),
  },
  {
    rewardPercentage: "20%",
    rewardDescription: (
      <>
        for referrals buying <br /> over $250,000
      </>
    ),
  },
];

const referralList3 = [
  {
    rewardPercentage: "10%",
    rewardDescription: (
      <>reward for all referrals, irrespective of the number of entries</>
    ),
  },
];

const walletOptions = [
  {
    label: "Metamask",
    isPopular: true,
    icon: MetaMask,
    color: "bg-[#F6851B]",
    chipColor: "bg-orange-300",
  },
  {
    label: "WalletConnect",
    icon: WalletConnect,
    color: "bg-[#3B99FC]",
  },
  {
    label: "Coinbase wallet",
    icon: CoinbaseWallet,
    iconClasses: 'scale-[0.8]',
    color: "bg-[#0051FF]",
  },
  {
    label: "Formatic",
    icon: Formatic,
    iconClasses: 'scale-[0.8]',
    color: "bg-[#6852FF]",
  },
];


const socialMediaOptions = [
  {
    label: "Tweet",
    icon: Twitter,
    color: "text-[#08122A]",
  },
  {
    label: "Post",
    icon: Instagram,
    color: "text-[#C938AC]",
  },
  {
    label: "Send",
    icon: Whatsapp,
    color: "text-[#00C222]",
  },
  {
    label: "Share",
    icon: Linkedin,
    color: "text-[#0A66C2]",
    textClasses: 'mt-1'
  },

  {
    label: "Share",
    icon: Facebook,
    color: "text-[#087AEA]",
  },
];

function Referrals() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const location = useLocation();
  const { isConnected } = useAccount();

  const [referalUrl, setReferalUrl] = useState("");

  const handleGenerateReferal = async () => {
    const currentQuery = location.search;
    const params = new URLSearchParams(currentQuery);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
    params.set("ref", walletAddress);

    const newQueryString = params.toString();
    const newUrl = `${import.meta.env.VITE_REACT_APP_FRONTNED_BASE_URL}${
      location.pathname
    }?${newQueryString}${location.hash}`;

    setReferalUrl(newUrl);
  };

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(referalUrl)
      .then(() => {
        console.log("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy the link: ", err);
      });
  };
  return (
    <>
      <div className="relative w-full bg-[url(./assets/profile/referrals/referral-bg.jpeg)] rounded-[20px] bg-cover bg-no-repeat">
        <div className="relative w-full p-[24px] z-10">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <Suspense fallback={<div>Loading feed...</div>}>
              {referralRewardsList.map((d, index) => (
                <div
                  index={`reward_info_${index}`}
                  className={`flex max-[550px]:flex-row justify-start items-start gap-7 p-3 bg-white-0 flex-1 rounded-[16px] max-[550px]:items-center`}
                >
                  <img
                    className={`${d?.imgClassName || ""} self-stretch`}
                    src={d.img}
                    alt="Arrow Left"
                    loading="lazy"
                  />
                  <div className="flex flex-col gap-1">
                    <Text
                      size="visa_desktop_headers_h3"
                      as="p"
                      className="font-normal text-3xl md:text-4xl"
                    >
                      {d.rewardPercentage}
                    </Text>
                    <Text
                      size="visa_desktop_body_text_18"
                      as="p"
                      className="w-[86%] leading-[140%] !text-slate-400 text-[15px] md:text-[18px] uppercase"
                    >
                      {d.rewardDescription}
                    </Text>
                  </div>
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* Tab Navigation */}
        <div className="flex space-x-4 border-b mt-[50px] overflow-x-auto">
          {tabs.map((tab, i) => (
            <a
              key={`subtab_${i}`}
              className={`py-2 px-4 flex-1 text-center md:text-[13px] xl:text-[18px] font-medium cursor-pointer ${
                activeTabIndex === i
                  ? "border-b-2 border-blue-500 text-gray-900"
                  : "text-gray-500"
              }`}
              onClick={(event) => {
                setActiveTabIndex(i);
                handleScrollToSection(event, tab.href);
              }}
            >
              {tab.name}
            </a>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-[50px] flex flex-col gap-[80px]">
          <ReferralCard
            title="Mint and Referral Rewards"
            summary={
              <>
                By sharing your unique referral link, you can earn OPN tokens
                for every friend who mints their first
                <br />
                OPN token. The more friends you refer, the more OPN you can
                accumulate.
              </>
            }
            referralList={referralList}
            currentReward={7.5}
            currentRewardCount={`${120000} OPN reward earned`}
            className="referralBg1"
            bgImage={Referral1}
            id={0}
            imgClassName="-bottom-[400px]"
          />
          <ReferralCard
            title="Refer Web3 Talent Program Participants"
            summary={
              <>
                Want to help your friends kickstart their careers and earn some
                extra rewards yourself?
                <br />
                It's easy with our referral program!
              </>
            }
            referralList={referralList2}
            currentReward={10}
            currentRewardCount={`Referral count: ${72}`}
            className="referralBg1"
            bgImage={Referral2}
            imgClassName="-bottom-[280px] h-[750px] -right-[26px]"
            id={1}
          />
          <ReferralCard
            title="Web3 Entrepreneur Referrals"
            summary={
              <>
                By sharing your unique referral link, you can earn OPN tokens
                for every friend who mints their first <br /> OPN token. The
                more friends you refer, the more OPN you can accumulate.
              </>
            }
            referralList={referralList3}
            currentReward={7.5}
            currentRewardCount={`${750} OPN reward earned`}
            className="referralBg3"
            bgImage={Referral3}
            imgClassName="-bottom-[280px]  h-[700px] -right-[26px]"
            id={2}
          />
          <div className="w-full">
            <h6 className="text-2xl font-semibold text-gray-800 mb-4">
              Wallet Integration
            </h6>
            <p className="text-gray-600 text-[18px] mb-9">
              Seamlessly integrate IOPn with various Web3 wallets to generate
              and manage referral links.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {walletOptions?.map((wallet) => {
                return (
                  <button
                    className={`flex items-center justify-center text-white px-4 py-4 rounded-full ${
                      wallet.color || ""
                    }`}
                  >
                    <img
                      src={wallet.icon}
                      alt={wallet.label}
                      className={`w-[30px] h-[30px] mr-2 ${wallet.iconClasses || ''}`}
                    />
                    <Text
                      size="visa_body_text_18"
                      className="text-white-0 lg:!text-[18px]"
                    >
                      {wallet.label}
                    </Text>
                    {wallet?.isPopular && (
                      <Text
                        className={`${
                          wallet?.chipColor || ""
                        } text-xs text-white-0 ml-2 px-2 py-1 rounded-full`}
                      >
                        Popular
                      </Text>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="flex w-full flex-col gap-[60px] rounded-[20px] bg-slate-100 p-10 shadow-md max-[550px]:gap-[30px] max-[550px]:p-4"
            id="generateLink"
          >
            <div className="flex flex-col items-start gap-2.5">
              <Text
                size="visa_desktop_headers_h3"
                as="p"
                className="w-full text-4xl"
              >
                Generate Referral Link
              </Text>
              <Text
                size="iopn_desktop_body_text_20"
                as="p"
                className="!text-slate-500 w-full max-[550px]:text-sm !text-[18px] !lg:text-[18px]"
              >
                Share your unique referral link and earn IOPn tokens for every
                friend who joins through your link.
              </Text>
            </div>
            <div className="flex flex-col gap-4">
              <Input
                color="white_0"
                size="xs"
                shape="round"
                name="Editable URL"
                placeholder={`https://iopn.io/gkiyfujytdhtsrsytdr`}
                value={referalUrl}
                suffix={
                  <Button
                    onClick={handleCopyLink}
                    color="dark_0"
                    variant="fill"
                    shape="round"
                    rightIcon={
                      <img
                        src={CopyIcon}
                        alt="Arrow Left"
                        className="h-[18px] w-[18px]"
                        loading={"lazy"}
                      />
                    }
                    className="flex !bg-white-0 border-l-2 !rounded-r-full border-solid border-slate-200 w-[85px] h-full gap-5"
                  ></Button>
                }
                className="!rounded-[34px] max-[550px]:text-[18px] max-[550px]:h-[50px] !pr-1"
              />

              <div className="flex flex-col md:flex-row gap-3 items-center">
                {isConnected ? (
                  <>
                    <Button
                      onClick={handleGenerateReferal}
                      shape="round"
                      rightIcon={
                        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[5px] mr-1">
                          <img
                            src="images/img_arrowleft_blue_800.svg"
                            alt="Arrow Left"
                            className="h-[18px] w-[18px]"
                            loading="lazy"
                          />
                        </div>
                      }
                      className="gap-[34px] py-4 rounded-[40px] bg-gradient3 font-small capitalize max-[550px]:h-[50px] relative w-full md:w-[40%] lg:w-[25%]"
                    >
                      Generate referral link
                    </Button>
                  </>
                ) : (
                  <div className="flex justify-center  w-full md:w-[40%] lg:w-[25%] bg-gradient3 items-center gap-2.5 border-blue-900_1e border border-solid  rounded-[36px] p-1 md:p-3 bg-white-0">
                    <h5 className="text-white-0 font-outfit font-bold capitalize text-xl flex-1 text-center">
                      <ConnectWallet />
                    </h5>
                    <button
                      className="w-[36px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium text-sm px-2 py-2 rounded-3xl max-w-64"
                      style={{
                        backgroundColor: "white",
                        padding: "12px",
                      }}
                    >
                      <img
                        src="images/img_arrowleft_blue_800.svg"
                        alt="testImg"
                        loading="lazy"
                      />
                    </button>
                  </div>
                )}
                <Text
                  size="visa_desktop_body_text_16"
                  as="p"
                  className="leading-[130%] !text-slate-400"
                >
                  Don’t wait! Mint your OPN Tokens, join the IOPn Web3 Ecosystem
                  <br className="hidden md:block" />
                  today, and take the first step towards a brighter future.
                </Text>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h6 className="text-2xl font-semibold text-gray-800 mb-4">
              Share referral link with a single click:
            </h6>
            <p className="text-gray-600 text-[18px] mb-9">
              Share your link on your connected social media with a single
              click.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
              {socialMediaOptions?.map((media) => {
                return (
                  <button
                    className="flex items-center justify-center text-white px-4 py-4 rounded-full bg-slate-200"
                  >
                    <img
                      src={media.icon}
                      alt={media.label}
                      className="w-[25px] h-[25px] mr-2"
                    />
                    <Text
                      size="visa_body_text_18"
                      className={`lg:!text-[18px] ${media.color} ${media.textClasses || ''}`}
                    >
                      {media.label}
                    </Text>
                  </button>
                );
              })}
            </div>
          </div>

          <ReferralHistory/>
        </div>
      </div>
    </>
  );
}

export default Referrals;

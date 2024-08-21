import React, { Suspense, useState } from "react";
import Referral1 from "../../../assets/profile/referrals/referral1.svg";
import Referral2 from "../../../assets/profile/referrals/referral2.svg";
import Referral3 from "../../../assets/profile/referrals/referral3.svg";
import { Text } from "../../../components/Text";
import ReferralCard from "./ReferralCard";
import "./referral.css";
import { handleScrollToSection } from "../../../utils/helper";

const referralRewardsList = [
  {
    rewardPercentage: "7.5%",
    rewardDescription: "Mint & referral reward tier",
    img: Referral1,
    imgClassName: "w-[80px] h-[80px]",
  },
  {
    rewardPercentage: "10%",
    rewardDescription: "GenZ talent program reward tier",
    img: Referral2,
    imgClassName: "w-[80px] h-[80px]",
  },
  {
    rewardPercentage: "124",
    rewardDescription: "Web3 Entrepreneur referrals count",
    img: Referral3,
    imgClassName: "w-[80px] h-[80px]",
  },
];
const tabs = [
  { name: "OPN Token and Minting" },
  { name: "GenZ Talent Program Referrals" },
  { name: "Web3 Entrepreneur Referrals" },
  { name: "Generate Link" },
  { name: "Referrals History" },
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
        reward for 1 to 199 entries  <br /> referred
      </>
    ),
  },
  {
    rewardPercentage: "15%",
    rewardDescription: (
      <>
       reward for 1,000 entries <br/> onwards
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
      <>
        reward for all referrals, irrespective of the number of entries
      </>
    ),
  },
];

function Referrals() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <div className="relative w-full bg-[url(./assets/profile/referrals/referral-bg.jpeg)] rounded-[20px] bg-cover bg-no-repeat">
        <div className="relative w-full p-[24px] z-10">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {referralRewardsList.map((d, index) => (
                <div
                  index={`reward_info_${index}`}
                  className={`flex max-[550px]:flex-row justify-start items-start gap-7 p-3 bg-white-0 flex-1 rounded-[16px] max-[550px]:items-center`}
                >
                  <img
                    class={`${d?.imgClassName || ""} self-stretch`}
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
        <div className="flex space-x-4 border-b mt-[50px]">
          {tabs.map((tab, i) => (
            <a
              className={`py-2 px-4 flex-1 text-center text-[18px] font-medium cursor-pointer ${
                activeTabIndex === i
                  ? "border-b-2 border-blue-500 text-gray-900"
                  : "text-gray-500"
              }`}
              onClick={(event) => {
                setActiveTabIndex(i);
                handleScrollToSection(event, `referralCard-${i}`);
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
            title="Refer GenZ Talent Program Participants"
            summary={
              <>
                Want to help your friends kickstart their careers and earn some extra rewards yourself?
                <br />
                It's easy with our referral program!
              </>
            }
            referralList={referralList2}
            currentReward={10}
            currentRewardCount={`Referral count: ${72}`}
            className="referralBg1"
            bgImage={Referral2}
            imgClassName="-bottom-[280px]"
            id={1}
          />
           <ReferralCard
            title="Web3 Entrepreneur Referrals"
            summary={
              <>
                By sharing your unique referral link, you can earn OPN tokens for every friend who mints their first <br /> OPN token. The more friends you refer, the more OPN you can accumulate.
                
              </>
            }
            referralList={referralList3}
            currentReward={7.5}
            currentRewardCount={`${750} OPN reward earned`}
            className="referralBg3"
            bgImage={Referral3}
            imgClassName="-bottom-[280px]"
            id={2}
          />
        </div>
      </div>
    </>
  );
}

export default Referrals;

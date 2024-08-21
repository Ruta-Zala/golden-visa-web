import React, { Suspense } from "react";
import Referral1 from "../../../assets/profile/referrals/referral1.svg";
import Referral2 from "../../../assets/profile/referrals/referral2.svg";
import Referral3 from "../../../assets/profile/referrals/referral3.svg";
import ReferralBg from "../../../assets/profile/referrals/referral-bg.jpeg";
import { Img } from "../../../components/ImgGenz";
import { Text } from "../../../components/Text";

const referralRewardsList = [
  {
    rewardPercentage: "7.5%",
    rewardDescription: "Mint & referral reward tier",
    img: Referral1,
  },
  {
    rewardPercentage: "10%",
    rewardDescription: "GenZ talent program reward tier",
    img: Referral2,
  },
  {
    rewardPercentage: "124",
    rewardDescription: "Web3 Entrepreneur referrals count",
    img: Referral3,
  },
];

function Referrals() {
  return (
    <>
      <div className="relative w-full bg-[url(./assets/profile/referrals/referral-bg.jpeg)] rounded-[20px] bg-cover bg-no-repeat">
        <div className="relative w-full p-[24px] z-10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
            <Suspense fallback={<div>Loading feed...</div>}>
              {referralRewardsList.map((d, index) => (
                <div
                  index={`reward_info_${index}`}
                  className={`flex max-[550px]:flex-row justify-start items-start gap-7 p-3 bg-white-0 flex-1 rounded-[16px] max-[550px]:items-center`}
                >
                  <img
                    class="h-[80px] w-[80px]"
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
    </>
  );
}

export default Referrals;

import React, { Suspense } from "react";
import RewardInfo from "../../../components/RewardInfo";

function ReferralCard({
  title,
  summary,
  referralList,
  currentReward,
  currentRewardCount,
  bgImage,
  className,
  imgClassName,
  id,
}) {
  return (
    <div
      className={`py-12 px-8 rounded-lg shadow-lg ${className || ''} w-full relative overflow-hidden`}
      id={`referralCard-${id}`}
    >
      <div className="z-10 relative">
        {/* Title and Summary */}
        <div className="mb-8">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">{title}</h3>
          <p className="text-gray-600 text-[16px] ">{summary}</p>
        </div>

        {/* Referral Tiers */}
        <div className={`grid grid-cols-1 ${ referralList?.length === 1 ? 'xl:grid-cols-1' :'md:grid-cols-1 xl:grid-cols-3'} gap-4 mb-9`}>
          <Suspense fallback={<div>Loading feed...</div>}>
            {referralList.map((d, index) => (
              <RewardInfo {...d} key={"referralList" + index} className="!justify-start !items-start" />
            ))}
          </Suspense>
        </div>

        {/* Current Tier Reward */}
        <p className="text-gray-600 uppercase text-white-0 font-medium text-[16px]">Current Tier Reward: </p>
        <div className="flex items-end mt-3 gap-3">
          <p className="text-7xl font-semibold text-white-0">
            {currentReward}%
          </p>
          <p className="text-lg uppercase text-gray-700 text-white-0 text-opacity-80">
            {currentRewardCount}
          </p>
        </div>
      </div>
      <img
        class={`hidden xl:block absolute -bottom-[400px] right-0 h-[600px] ${imgClassName || ''}`}
        src={bgImage}
        alt="crad img"
        loading="lazy"
      />
    </div>
  );
}

export default ReferralCard;

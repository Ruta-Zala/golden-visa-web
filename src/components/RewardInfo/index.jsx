import { Text } from "../Text/index";
import React from "react";

export default function RewardInfo({
  rewardPercentage = "5%",
  rewardDescription = (
    <>
      reward for referrals buying between
      <br />
      $500 and $99,999
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex max-[550px]:flex-row justify-center items-center gap-7 p-3 bg-white-0 flex-1 rounded-[16px] max-[550px]:items-center`}
    >
      <Text size="visa_desktop_headers_h3" as="p" className="font-normal text-3xl md:text-4xl">
        {rewardPercentage}
      </Text>
      <Text
        size="visa_desktop_body_text_18"
        as="p"
        className="w-[86%] leading-[140%] !text-dark-2 text-[15px] md:text-[18px]"
      >
        {rewardDescription}
      </Text>
    </div>
  );
}

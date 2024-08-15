import { Heading } from "../../components/HeadingMint";
import { Text } from "../../components/Text";
import UserProfile from "../../components/UserProfileGenz";
import React, { Suspense } from "react";

const benefitsList = [
  {
    userImage: "images/img_passport_streamline_core.svg",
    visaDurationLabel: "Visa Duration",
    visaDurationText: "Flexible options: 10 years UAE Golden VISA",
  },
  {
    userImage: "images/img_building_2_streamline_core copy.svg",
    visaDurationLabel: "Residency Status",
    visaDurationText: "Stable living: Join an inno-vative Web3 Community",
  },
  {
    userImage: "images/img_gold_streamline_core.svg",
    visaDurationLabel: "Investment Opportunities",
    visaDurationText: "Financial growth: Life-Changing Oppurtunity",
  },
];

export default function Goldenvisaweb3entrepreneursection() {
  return (
    <>
      {/* golden visa web3 entrepreneur section */}
      <div className="mt-10 flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[120px] max-[1440px]:gap-[90px] max-[1440px]:px-5 max-[1050px]:gap-[90px] max-[1050px]:px-5 max-[550px]:gap-[60px]">
          <div className="mx-[126px] flex flex-col items-center gap-[30px] max-[1050px]:mx-0">
            <div className="flex rounded-[18px] border border-solid border-dark-0 p-1.5">
              <Heading size="visa_desktop_headers_subheader" as="h1">
                Why the UAE Golden Visa?
              </Heading>
            </div>
            <Text
              size="visa_desktop_headers_h2"
              as="p"
              className="self-stretch text-center leading-[105%] text-3xl md:text-5xl"
            >
              Key Benefits Of The Web3
              <br /> Entrepreneur Program
            </Text>
          </div>
          <div className="flex gap-4 max-[1050px]:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {benefitsList.map((d, index) => (
                <UserProfile
                  {...d}
                  key={"benefitsList1" + index}
                  className={`mb-12 max-[1050px]:mb-0 min-[1050px]:max-h-[367px] ${
                    index == 1 ? "min-[1050px]:mt-12" : ""
                  }`}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

import { Img } from "../../components/ImgGenz/index";
import { Text } from "../../components/TextGenz/index";
import { Heading } from "../../components/HeadingGenz/index";
import UserProfile from "../../components/UserProfileGenz/index";
import React, { Suspense } from "react";

const visaOptionsList = [
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

export default function GoldenVisaMetricsSection() {
  return (
    <>
      {/* golden visa metrics section */}
      <div className="relative h-[552px] max-[1050px]:h-[110vh] max-[550px]:h-[90vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex flex-1 flex-col items-center  bg-gradient2 max-[1440px]:py-8 max-[1050px]:py-5 max-[550px]:py-4">
          <div className="container-xs my-10 flex flex-col gap-[40px] max-[1440px]:gap-[98px] max-[1440px]:px-5 max-[1050px]:gap-[73px] max-[1050px]:px-5 max-[550px]:gap-[49px]">
            <div className="mx-[126px] flex flex-col items-center gap-6 px-[30px] max-[1050px]:mx-0 max-[550px]:px-4">
              <div className="flex rounded-[18px] border border-solid border-dark-0 p-1.5">
                <Heading
                  size="visa_desktop_headers_subheader"
                  as="h1"
                  className="!text-dark-0"
                >
                  Why the UAE Golden Visa?
                </Heading>
              </div>
              <Text
                size="visa_desktop_headers_h3"
                as="p"
                className="!text-dark-0 max-[1440px]:text-[48px] max-[1050px]:text-center max-[550px]:text-center max-[550px]:text-[38px]"
              >
                Key Benefits Of The UAE Golden Visa
              </Text>
            </div>
            <div className="flex py-16 gap-4 max-[1050px]:flex-col bg-[url(/public/images/3D.png)] bg-contain bg-no-repeat bg-center">
              <Suspense fallback={<div>Loading feed...</div>}>
                {visaOptionsList.map((d, index) => (
                  <UserProfile
                    {...d}
                    key={"benefitsList" + index}
                    className="max-[1050px]:mb-0 opacity-90"
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
        <Img
          src="images/img_3d.png"
          alt="3d Image"
          className="absolute bottom-0 left-0 right-0 m-auto h-[724px] w-[58%] object-contain z-[-1] max-[550px]:hidden"
        />
      </div>
    </>
  );
}

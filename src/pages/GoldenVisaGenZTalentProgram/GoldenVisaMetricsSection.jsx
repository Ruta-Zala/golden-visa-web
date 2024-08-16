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
      <div className="relative h-fit">
        <div className="m-auto h-fit flex flex-1 flex-col items-center max-[1440px]:py-8 max-[1050px]:py-5 max-[550px]:py-4" style={{
          background: 'linear-gradient(0deg, hsla(0, 0%, 100%, 1) 0%, hsla(210, 40%, 96%, 1) 100%)'
        }}>
          <div className="container-xs my-10 flex flex-col gap-[40px] max-[1440px]:gap-[98px] max-[1050px]:gap-[73px] max-[550px]:gap-[49px]">
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
                className="self-stretch text-center leading-[105%] xl:!text-[72px] md:!text-[55px] sm:!text-[40px] !text-[40px]"
              >
                Key Benefits Of The UAE Golden Visa
              </Text>
            </div>
            <div className="bg-[url(/public/images/3D.png)] bg-contain bg-no-repeat bg-center bg-cover xl:bg-contain py-12 lg:py-0">
              <div className="flex py-0 lg:py-16 gap-4 flex-col md:flex-row">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {visaOptionsList.map((d, index) => (
                    <UserProfile
                      {...d}
                      key={"benefitsList" + index}
                      className={`${(index === 1 ? 'mt-[30px]': 'mb-[30px]')} max-[1050px]:mb-0 max-[1050px]:mt-0 opacity-90`}
                    />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

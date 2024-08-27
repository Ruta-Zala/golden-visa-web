import { Heading } from "../../components/HeadingMint";
import { Text } from "../../components/Text";
import UserProfile from "../../components/UserProfileGenz";
import React, { Suspense } from "react";

const benefitsList = [
  {
    userImage: "/images/img_visa.svg",
    visaDurationLabel: "Visa Duration",
    visaDurationText: "Flexible options: 10 years UAE Golden VISA",
  },
  {
    userImage: "/images/img_residency.svg",
    visaDurationLabel: "Residency Status",
    visaDurationText: "Stable living: Join an innovative Web3 Community",
  },
  {
    userImage: "/images/img_investment.svg",
    visaDurationLabel: "Investment Opportunities",
    visaDurationText: "Financial growth: Life-Changing Oppurtunity",
  },
];

export default function Goldenvisaweb3entrepreneursection() {
  return (
    <>
      {/* golden visa web3 entrepreneur section */}
      <div className="relative h-fit" id="benefits">
        <div className="m-auto h-fit flex flex-1 flex-col items-center max-[1440px]:py-8 max-[1050px]:py-5 max-[550px]:py-4" style={{
          background: 'linear-gradient(0deg, hsla(0, 0%, 100%, 1) 0%, hsla(210, 40%, 96%, 1) 100%)'
        }}>
          <div className="container-xs mt-10 flex flex-col gap-[40px] max-[1440px]:gap-[98px] max-[1050px]:gap-[73px] max-[550px]:gap-[49px]">
            <div className="mx-[126px] flex flex-col items-center gap-6 px-[30px] max-[1050px]:mx-0 max-[550px]:px-4">
              <div className="flex rounded-[18px] border border-solid border-dark-0 p-1.5">
                <Heading
                  size="visa_desktop_headers_subheader"
                  as="h1"
                  className="!text-dark-0"
                >
                  Why the UAE Gloden Visa?
                </Heading>
              </div>
              <Text
              size="visa_headers_h2"
                as="p"
                className="self-stretch text-center leading-[105%] xl:!text-[72px] md:!text-[55px] sm:!text-[40px] !text-[40px]"
              >
                 Key Benefits Of The Web3
                 <br /> Entrepreneur Program
              </Text>
            </div>
            <div className="bg-[url(/public/images/img_icon_star_glossy_glass_style%20copy.png)] bg-contain bg-no-repeat bg-center bg-cover xl:bg-contain pt-[11rem] pb-[7rem]">
              <div className="flex py-0 lg:py-16 gap-4 flex-col md:flex-row mx-4">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {benefitsList.map((d, index) => (
                    <UserProfile
                      {...d}
                      key={"benefitsList1" + index}
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

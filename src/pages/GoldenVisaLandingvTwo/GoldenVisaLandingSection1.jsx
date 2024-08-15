import { Img } from "../../components/Img";
import { Heading } from "../../components/Heading";
import IndustryInnovationProfile from "../../components/IndustryInnovationProfile";
import { Suspense } from "react";

const benefitsGrid = [
  {
    industryImage: "images/img_industry_innova.svg",
    careerGrowthText: "Life Changing",
    accessTopTierText:
      "10-Year automatically renewable Golden Visa with right to live in any of the seven emirates in the UAE",
  },
  {
    industryImage: "images/img_health_care_2.svg",
    careerGrowthText: "Family Inclusion",
    accessTopTierText:
      "Bring your immediate family members and obtain work authorization for your spouse and children",
  },
  {
    industryImage: "images/img_clock.svg",
    careerGrowthText: "Entrepreneurial Opportunities",
    accessTopTierText:
      "Establish your business in the UAE with 3-Year Free Business License.",
  },
  {
    industryImage: "images/img_earth_airplane.svg",
    careerGrowthText: "Global Mobility",
    accessTopTierText: (
      <>Enjoy easier travel within the region and explore new cultures.</>
    ),
  },
  {
    industryImage: "images/img_signal_full_streamline_core.svg",
    careerGrowthText: "Competitive Salaries",
    accessTopTierText: (
      <>
        Earn lucrative salaries in
        <br />
        top companies
      </>
    ),
  },
  {
    industryImage: "images/bank2.svg",
    careerGrowthText: "Financial Freedom",
    accessTopTierText: "Access to UAE Banking IBAN",
  },
];

export default function GoldenVisaLandingSection1() {
  return (
    <>
      {/* golden visa landing section */}
      <div>
        <div className="flex flex-col items-center bg-gradient2 w-full">
          <div className="max-w-screen-2xl mx-auto w-full px-4">
            <div className="flex flex-col gap-5 py-20">
              <div className="flex flex-col items-center gap-6">
                <div className="flex rounded-2xl border border-solid border-dark-0 p-1.5">
                  <Heading as="h1">Why the UAE Golden Visa?</Heading>
                </div>
                <h1 className="text-3xl lg:text-5xl text-center">
                  Explore The Transformative
                  <br />
                  Benefits That Come With
                  <br />
                  The UAE Golden Visa
                </h1>
                <p className="text-2xl text-dark-0 text-center z-[1] pb-20">
                  Imagine a world of endless possibilities! With a UAE Golden
                  Visa, you gain unparalleled opportunities to propel your
                  career, build a prosperous future, and enjoy a vibrant
                  lifestyle. Here’s what awaits you
                </p>
              </div>
              <div className="relative w-full">
                <div className="relative w-full z-[1]">
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {benefitsGrid.map((d, index) => (
                        <IndustryInnovationProfile
                          {...d}
                          key={"industryGrid" + index}
                        />
                      ))}
                    </Suspense>
                  </div>
                </div>
                <Img
                  src="images/img_background_copy.png"
                  alt="Background Image"
                  className="absolute inset-0 mx-auto my-auto h-[850px] w-full md:w-3/4 object-contain opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

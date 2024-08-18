import { Helmet } from "react-helmet";
import { Button } from "../../components/ButtonGenz/index";
import { Img } from "../../components/ImgGenz/index";
import { Text } from "../../components/TextGenz/index";
import { Input } from "../../components/InputGenz/index";
// import Footer from "../../components/FooterGenz/index";
import Header from "../../components/Header/index";
import FAQSection from "./FAQSection";
import GoldenVisaGenZTalentProgramSection from "./GoldenVisaGenZTalentProgramSection";
import GoldenVisaMetricsSection from "./GoldenVisaMetricsSection";
import MetricsSection from "./MetricsSection";
import StepByStepProcessSection from "./StepByStepProcessSection";
import TokenPurchaseSection from "./TokenPurchaseSection";
import React, { Suspense } from "react";
import HeaderGenz from "../../components/HeaderGenz";
import { handleScrollToSection } from "../../utils/helper";
import Footer from "../../components/Footer/FooterEl";
import RewardInfo from "../../components/RewardInfo";

const referralRewardsList = [
  {
    rewardPercentage: "10%",
    rewardDescription: <>For 1 to 199 entries referred.</>,
  },
  {
    rewardPercentage: "15%",
    rewardDescription: <>For 200 to 999 entries referred.</>,
  },
  {
    rewardPercentage: "20%",
    rewardDescription: <>For 1,000 entries onwards.</>,
  },
];

export default function GoldenVisaGenZTalentProgramPage() {
  return (
    <>
      <Helmet>
        <title>
          UAE Golden Visa - Unlock Opportunities with GenZ Talent Program
        </title>
        <meta
          name="description"
          content="Discover the UAE Golden Visa benefits, including a 10-year residency, investment growth, and a vibrant Web3 community. Join the GenZ Talent Program and enter the golden draw for a chance to secure your future with OPN tokens."
        />
        <meta
          name="description"
          content="Unlock endless opportunities with a UAE Golden Visa"
        />
        <meta name="keywords" content="IOPn, RAKDAO, GenZ Talent Program" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-0">
        <div className="self-stretch">
          <div className="flex h-[870px] items-start justify-center bg-[url(/public/images/img_hero_genz.png)] bg-cover bg-no-repeat py-4 max-[1440px]:h-auto max-[1050px]:h-auto max-[550px]:bg-[length:250%_100%] max-[550px]:bg-center max-[1050px]:bg-center">
            <div className="container-xs mb-[306px] flex justify-center px-14 max-[1440px]:px-5 max-[1050px]:px-5">
              <div className="flex w-[90%] flex-col gap-[238px] max-[1440px]:w-full max-[1440px]:gap-[178px] max-[1050px]:w-full max-[1050px]:gap-[178px] max-[550px]:gap-[119px] max-[550px]:items-center">
                <HeaderGenz />
                <div className="mx-[152px] flex flex-col items-center gap-12 max-[1050px]:mx-0">
                  <div className="flex flex-col items-center gap-[30px] self-stretch">
                    <Button
                      color="white_0"
                      size="sm"
                      className="min-w-[220px] rounded-[25px] font-medium uppercase text-sm"
                    >
                      GenZ Talent Program
                    </Button>
                    <Text
                      size="visa_desktop_headers_h1"
                      as="p"
                      className="text-shadow-ts1 text-center !text-white-0 text-3xl md:text-6xl"
                    >
                      <>
                        Welcome to the UAE
                        <br />
                        GoldenVisa Portal
                      </>
                    </Text>
                    <button
                      class="min-w-[268px] gap-4 font-medium capitalize flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[26px] h-[52px] pl-8 pr-2 text-[18px] bg-white-0 text-black"
                      onClick={(event) =>
                        handleScrollToSection(event, "participate")
                      }
                    >
                      Enter the Draw now
                      <div class="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-dark-0">
                        <img
                          class="h-[18px] w-[18px]"
                          src="images/img_arrowleft_white_0.svg"
                          alt="Arrow Left"
                          loading="lazy"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* golden visa metrics section */}
          <GoldenVisaMetricsSection />
        </div>

        {/* step by step process section */}
        <StepByStepProcessSection />

        {/* golden visa gen z talent program section */}
        <GoldenVisaGenZTalentProgramSection />

        {/* token purchase section */}
        {/* <TokenPurchaseSection /> */}
        <div id="refferralProgram" className="container-xs mt-[80px] md:mt-[100px] xl:mt-[180px] max-[1440px]:px-5 max-[1050px]:px-5">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="relative h-[430px] md:h-auto w-full rounded-[20px] bg-light_base">
              <div className="mt-12 my-auto ml-12 mr-auto flex flex-1 flex-col items-start gap-6 max-[1440px]:ml-0 max-[1050px]:left-0 max-[1050px]:ml-4">
                <Button
                  size="xs"
                  className="min-w-[134px] !text-slate-900 rounded-[18px] font-medium uppercase !border !border-slate-900 rounded-full !text-[16px]"
                >
                  OPN token
                </Button>
                <Text
                  size="visa_desktop_headers_h3"
                  as="p"
                  className="!text-dark-0 max-[1440px]:text-[48px]"
                >
                  Referral Program
                </Text>
                <div className="flex flex-col gap-4 w-[80%] z-10">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {referralRewardsList.map((d, index) => (
                      <RewardInfo {...d} key={"featuresList" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
              <Img
                src="images/img_chain_link_2x_1.png"
                alt="Chainlink Image"
                className="absolute hidden md:flex bottom-0 left-0 m-auto h-auto w-[40%] md:w-[66%] lg-[46%] object-contain opacity-70"
              />
              <Img
                src="images/img_chain_link_2x_1.png"
                alt="Chainlink Image"
                className="absolute top-0 flex md:hidden right-0 m-0 rotate-[180deg] h-auto w-[50%] object-contain opacity-70"
              />
            </div>
            <div className="flex w-full flex-col gap-[60px] rounded-[20px] bg-dark-0 p-10 shadow-md max-[550px]:gap-[30px] max-[550px]:p-4">
              <div className="flex flex-col items-start gap-2.5">
                <Text
                  size="visa_desktop_headers_h3"
                  as="p"
                  className="!text-white-0 max-[1050px]:text-[28px] max-[550px]:text-[22px] "
                >
                  Generate Referral Link
                </Text>
                <Text
                  size="iopn_desktop_body_text_20"
                  as="p"
                  className="w-[86%] leading-[140%] !text-white-3 max-[1440px]:w-full max-[1050px]:w-full max-[550px]:text-sm"
                >
                  Copy this link and share it with your network to invite others
                  to join you on this exciting journey and earn rewards along
                  the way.
                </Text>
              </div>
              <div className="mb-[70px] flex flex-col gap-4">
                <Input
                  color="white_0"
                  size="xs"
                  shape="round"
                  name="Editable URL"
                  placeholder={`https://iopn.io/gkiyfujytdhtsrsytdr`}
                  value="https://iopn.io/gkiyfujytdhtsrsytdr"
                  suffix={
                    <Button
                      color="dark_0"
                      variant="fill"
                      shape="round"
                      rightIcon={
                        <div className="copy-link-button hidden md:flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                          <Img
                            src="images/img_arrowleft.svg"
                            alt="Arrow Left"
                            className="h-[18px] w-[18px]"
                          />
                        </div>
                      }
                      className="hidden md:flex rounded-[18px] border border-solid border-dark-0 p-1.5 gap-5"
                    >
                      Copy Link
                    </Button>
                  }
                  className="!rounded-[34px] !rounded-[34px] !text-white-1 shadow-xl max-[550px]:text-[14px] bg-slate-600 flex items-center justify-center cursor-text border-blue-900_1e border border-solid  rounded-[36px] !text-[20px] !h-auto !p-[8px]"
                />

                <div className="flex flex-col gap-3">
                  <Button
                    color="dark_0"
                    variant="fill"
                    shape="round"
                    rightIcon={
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-slate-900 absolute right-[5px] mr-1">
                        <Img
                          src="images/img_arrowleft_white_0.svg"
                          alt="Arrow Left"
                          className="h-[18px] w-[18px]"
                        />
                      </div>
                    }
                    className="gap-[34px] py-4 self-stretch rounded-[40px] font-small capitalize max-[550px]:h-[50px] bg-white-0 !text-slate-900 relative flex md:hidden"
                  >
                    Copy Link
                  </Button>
                  <Button
                    color="white_0"
                    shape="round"
                    rightIcon={
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[5px] mr-1">
                        <Img
                          src="images/img_arrowleft.svg"
                          alt="Arrow Left"
                          className="h-[18px] w-[18px]"
                        />
                      </div>
                    }
                    className="gap-[34px] py-4 rounded-[40px] self-stretch font-small capitalize max-[550px]:h-[50px] relative"
                  >
                    Generate referral link
                  </Button>
                  <Text
                    size="visa_desktop_body_text_16"
                    as="p"
                    className="text-center leading-[130%] !text-white-2"
                  >
                    Don’t wait! Mint your OPN Tokens, join the IOPn Web3
                    Ecosystem today, and take the first step towards a brighter
                    future.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* metrics section */}
        <MetricsSection />

        {/* f a q section */}
        <FAQSection />
        <div className="mb-1 mt-[80px] md:mt-[100px] xl:mt-[180px] flex flex-col items-center self-stretch">
          <div className="container-xs flex flex-col gap-[50px] max-[1440px]:px-5 max-[1050px]:px-5">
            <div className="flex flex-col md:flex-row gap-4">
              <Img
                src="images/img_rectangle_11_582x742.png"
                alt="Promo Image"
                className="h-[340px] sm:h-[450px] md:h-[582px] w-full rounded-[20px] object-cover md:w-[50%]"
              />
              <div className="flex flex-1 flex-col items-start justify-center gap-20 rounded-[20px] border border-solid border-gray-300 bg-white-0 py-16 pl-16 pr-14 shadow-md max-[1440px]:gap-20 max-[1440px]:py-8 max-[1440px]:pl-8 max-[1050px]:gap-[60px] max-[1050px]:self-stretch max-[1050px]:p-5 max-[550px]:gap-10 max-[550px]:p-4">
                <div className="flex flex-col gap-5 self-stretch">
                  <div className="flex flex-col items-start gap-[30px]">
                    <Button
                      size="sm"
                      color="undefined_undefined"
                      className="flex rounded-[18px] border border-solid border-dark-0 p-1.5"
                    >
                      Get started
                    </Button>
                    <Text
                      size="visa_desktop_headers_h3"
                      as="p"
                      className="w-full leading-[105%] !text-dark-0 lg:!text-[48px] !text-[35px]"
                    >
                      <>
                        Ready to Mint In
                        <br />
                        Your Future?
                      </>
                    </Text>
                  </div>
                  <Text
                    size="iopn_desktop_body_text_20"
                    as="p"
                    className="leading-[140%] !text-dark-2 max-[550px]:text-[16px]"
                  >
                    Don’t wait! Join the GenZ Talent Program today and take the
                    first step towards a brighter future. Purchase your OPN
                    Coins now and enter the golden draw for your chance to win a
                    UAE Golden Visa.
                  </Text>
                </div>
                <button class="self-stretch capitalize w-full md:w-fit bg-gradient3 white flex flex-row items-center text-[#fff] cursor-pointer whitespace-nowrap rounded-[26px] px-3 py-2 text-md justify-between md:justify-start gap-0 md:gap-[34px]">
                  <div className="flex-1 text-center">Mint OPN Tokens Now</div>
                  <div class="flex h-[28px] w-[28px] items-center justify-center rounded-[50%] bg-white-0">
                    <img
                      class="h-[10px] w-[10px]"
                      src="images/img_arrowleft_blue_800.svg"
                      alt="Arrow Left"
                      loading="lazy"
                    />
                  </div>
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

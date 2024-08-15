import { Helmet } from "react-helmet";
import { Button } from "../../components/ButtonGenz/index";
import { Img } from "../../components/ImgGenz/index";
import { Text } from "../../components/TextGenz/index";
import { Input } from "../../components/InputGenz/index";
import Footer from "../../components/FooterGenz/index";
import Header from "../../components/Header/index";
import FAQSection from "./FAQSection";
import GoldenVisaGenZTalentProgramSection from "./GoldenVisaGenZTalentProgramSection";
import GoldenVisaMetricsSection from "./GoldenVisaMetricsSection";
import MetricsSection from "./MetricsSection";
import StepByStepProcessSection from "./StepByStepProcessSection";
import TokenPurchaseSection from "./TokenPurchaseSection";
import React from "react";

export default function GoldenVisaGenZTalentProgramPage() {
  return (
    <>
      <Helmet>
        <title>
          UAE Golden Visa - Unlock Opportunities with GenZ Talent Program
        </title>
        <meta
          name="description"
          content="Discover the UAE Golden Visa benefits, including a 10-year residency, investment growth, and a vibrant Web3 community. Join the GenZ Talent Program and enter the monthly draw for a chance to secure your future with OPN tokens."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-0">
        <div className="self-stretch">
          <div className="flex h-[870px] items-start justify-center bg-[url(/public/images/img_hero_genz.png)] bg-cover bg-no-repeat py-4 max-[1440px]:h-auto max-[1050px]:h-auto max-[550px]:bg-[length:250%_100%] max-[550px]:bg-center max-[1050px]:bg-center">
            <div className="container-xs mb-[306px] flex justify-center px-14 max-[1440px]:px-5 max-[1050px]:px-5">
              <div className="flex w-[90%] flex-col gap-[238px] max-[1440px]:w-full max-[1440px]:gap-[178px] max-[1050px]:w-full max-[1050px]:gap-[178px] max-[550px]:gap-[119px] max-[550px]:items-center">
                <Header />
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
                    <button class="min-w-[268px] gap-4 font-medium capitalize flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[26px] h-[52px] pl-8 pr-2 text-[18px] bg-white-0 text-black">
                      Enter the Draw now
                      <div class="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-dark-0">
                        <img class="h-[18px] w-[18px]" src="images/img_arrowleft_white_0.svg" alt="Arrow Left" loading="lazy" />
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
        <TokenPurchaseSection />
        <div className="container-xs mt-[118px] max-[1440px]:px-5 max-[1050px]:px-5">
          <div className="flex gap-4 max-[1050px]:flex-col">
            <div className="relative h-[470px] w-full rounded-[20px] bg-light_base">
              <div className="mt-12 my-auto ml-12 mr-auto flex flex-1 flex-col items-start gap-6 max-[1440px]:ml-0 max-[1050px]:left-0 max-[1050px]:ml-4">
                <Button
                  size="sm"
                  color="undefined_undefined"
                  className="flex rounded-[18px] border border-solid border-dark-0 p-1.5"
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
              </div>
              <Img
                src="images/img_chain_link_2x_1.png"
                alt="Chainlink Image"
                className="absolute bottom-[-4px] left-0 m-auto h-[266px] w-[46%] object-contain opacity-70"
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
                  Share your unique referral link and earn IOPn tokens for every
                  friend who joins through your link.
                </Text>
              </div>
              <div className="mb-1.5 flex flex-col gap-4 ">
                <label class="gap-4 !rounded-[34px] !text-white-1 shadow-xl max-[550px]:text-[14px] bg-slate-600 flex items-center justify-center cursor-text border-blue-900_1e border border-solid  rounded-[36px] h-[68px] pl-[26px] pr-[12px] text-[20px]">
                  <input type="text" name="Edit URL" placeholder="https://iopn.io/gkiyfujytdhtsrsytdr" value="https://iopn.io/gkiyfujytdhtsrsytdr" />
                  <div class="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-dark-0">
                    <img class="h-[28px] w-[18px]" src="images/img_arrowleft_white_0.svg" alt="Arrow Left" loading="lazy" />
                  </div>
                </label>
                <div className="flex flex-col gap-3">
                  <Button
                    shape="round"
                    color="undefined_undefined"
                    rightIcon={
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[10px]">
                        <Img
                          src="images/img_arrowleft.svg"
                          alt="Arrow Left"
                          className="h-[18px] w-[18px]"
                        />
                      </div>
                    }
                    className="gap-[34px] self-stretch font-medium capitalize text-white-0 border border-solid border-slate-100 relative"
                  >
                    Generate referral link
                  </Button>
                  <Text
                    as="p"
                    className="text-center leading-[130%] !text-white-4 max-[550px]:text-xs"
                  >
                    *Copy this link and share it witch other people to nvite
                    your network to embark on this exciting journey with you and
                    watch your token balance grow.
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
        <div className="mb-1 mt-[180px] flex flex-col items-center self-stretch">
          <div className="container-xs flex flex-col gap-[50px] max-[1440px]:px-5 max-[1050px]:px-5">
            <div className="flex gap-4 max-[1050px]:flex-col">
              <Img
                src="images/img_rectangle_11_582x742.png"
                alt="Promo Image"
                className="h-[582px] w-[50%] rounded-[20px] object-contain max-[1050px]:w-full"
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
                      className="w-full leading-[105%] !text-dark-0 max-[1440px]:text-[48px] max-[550px]:text-[40px]"
                    >
                      <>
                        Ready to Invest In
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
                    Coins now and enter the monthly draw for your chance to win
                    a UAE Golden Visa.
                  </Text>
                </div>
                <Button
                  variant="gradient"
                  shape="round"
                  color="blue_700_blue_800_02"
                  rightIcon={
                    <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                      <Img
                        src="images/img_arrowleft_blue_800_01.svg"
                        alt="Arrow Left"
                        className="h-[18px] w-[18px]"
                      />
                    </div>
                  }
                  className="min-w-[268px] gap-4 font-medium capitalize max-[550px]:text-lg max-[550px]:self-stretch"
                >
                  Mint OPN Tokens Now
                </Button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

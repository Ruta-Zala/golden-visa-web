import { Helmet } from "react-helmet";
import { Img } from "../../components/ImgMint";
import { Text } from "../../components/Text";
import { Heading } from "../../components/HeadingMint";
import { Button } from "../../components/ButtonGenz";
import Header from "../../components/HeaderVisa";
import FAQSection from "./FAQSection";
import Goldenvisaweb3entrepreneursection from "./Goldenvisaweb3entrepreneursection";
import HowItWorksSection from "./HowItWorksSection";
import PurchaseSection from "./PurchaseSection";
import ReferralProgramSection from "./ReferralProgramSection";
import React, { useEffect, useState } from "react";
import HeaderGenz from "../../components/HeaderGenz";
import Footer from "../../components/Footer/FooterEl";
import { handleScrollToSection } from "../../utils/helper";
import { useLocation } from 'react-router-dom';

export default function GoldenVisaWeb3EntrepreneurPage() {

  const location = useLocation();
  const [referalId, setReferalId] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const ref = queryParams.get('ref');
    setReferalId(ref)
  }, [location])
  return (
    <>
      <Helmet>
        <title>
          Web3 Entrepreneur Program - Unlock Your Future with OPN Tokens
        </title>
        <meta
          name="description"
          content="Join the Web3 Entrepreneur Program and explore the benefits of the UAE Golden Visa. Mint OPN Tokens for investment opportunities and a chance to win a 10-year visa."
        />
        <meta
          name="description"
          content="Unlock endless opportunities with a UAE Golden Visa"
        />
        <meta name="keywords" content="IOPn, RAKDAO, Web3 Entrepreneur Program" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-0">
        <div className="self-stretch">
          <div className="flex h-[1000px] items-start justify-center bg-[url(/public/images/img_hero_web.png)] bg-cover bg-no-repeat py-4 max-[1440px]:h-auto max-[1050px]:h-auto max-[1050px]:bg-center">
            <div className="container-xs mb-[248px] flex justify-center px-14 max-[1440px]:px-5 max-[1050px]:px-5">
              <div className="flex w-[90%] flex-col gap-[220px] max-[1440px]:w-full max-[1440px]:gap-[165px] max-[1050px]:w-full max-[1050px]:gap-[165px] max-[550px]:gap-[110px]">
                <HeaderGenz hideTabs={['Golden draw']} />
                <div className="mx-52 flex flex-col items-center gap-12 max-[1050px]:mx-0">
                  <div className="flex flex-col items-center gap-[30px] self-stretch">
                    <Button
                      color="white_0"
                      size="xs"
                      className="min-w-[282px] rounded-[18px] font-medium uppercase"
                    >
                      Web3 Entrepreneur Program
                    </Button>
                    <Text
                      size="visa_desktop_headers_h2"
                      as="p"
                      className="text-shadow-ts1 !text-white-0 text-center text-5xl md:text-7xl"
                    >
                      <>
                        Unlock Your Future
                        <br />
                        With OPN Tokens!
                      </>
                    </Text>
                  </div>
                  <Text
                    size="visa_desktop_body_text_20"
                    as="p"
                    className="text-shadow-ts !text-white-0 text-center"
                  >
                    Explore the benefits of our Web3 Entrepreneur Program
                  </Text>
                  <button class="min-w-[268px] gap-4 font-medium capitalize text-black flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[26px] h-[52px] pl-8 pr-2 text-[18px] bg-white-0 text-black" onClick={(event) => handleScrollToSection(event, "participate")}>
                    Participate Now
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
          <Goldenvisaweb3entrepreneursection />
        </div>
        {/* how it works section */}
        <div className="flex w-full flex-col items-center bg-white-0">
          <HowItWorksSection />
          {/* purchase section */}
          <PurchaseSection referralAddress={referalId} />
        </div>
        <div className="container-xs mt-[66px] max-[1440px]:px-5 max-[1050px]:px-5 relative">
          <div className="absolute sm:left-1/2 left-0 sm:-translate-x-[30%] top-0 blur-[15px] h-[500px] sm:w-[500px] w-full">
            <img
              src="/images/img_group_4.svg"
              className="h-full sm:w-full w-[90%]"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center xl:gap-[26px] gap-2 lg:pb-0 pb-20">
            <div className="flex rounded-[18px] border border-solid border-dark-0 p-1.5 max-[1050px]:m-auto">
              <Heading size="visa_desktop_headers_subheader" as="h2">
                How Does It Work?
              </Heading>
            </div>
            <Text
              size="visa_headers_h2"
              as="p"
              className="xl:!text-[72px] md:!text-[55px] !text-[40px]"
            >
              Onboarding Steps
            </Text>
          </div>
          <div className="relative 2xl:h-[420px] xl:h-[250px] h-[200px] lg:my-[200px] my-[100px] 2xl:max-w-[1450px] xl:max-w-[1150px] lg:max-w-[900px] max-w-[700px] w-full mx-auto md:block hidden">
            <Img
              src="images/img_lines.png"
              alt="Lines Image"
              className="absolute bottom-0 left-0 top-0 w-[calc(100%-100px)]"
            />
            <div className="absolute 2xl:left-[65px] 2xl:top-[-90px] xl:top-[-97px] lg:top-[-100px] top-[-91px] xl:left-[3px] left-[-19px] m-auto z-50">
              <div className="relative flex flex-col items-end">
                <div className="absolute -bottom-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_245_3600)">
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#4DACFF"
                        fill-opacity="0.1"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="11.5"
                        stroke="#2573C0"
                        stroke-opacity="0.15"
                      />
                      <circle cx="12" cy="12" r="4" fill="#2573C0" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_245_3600"
                        x="-5"
                        y="-5"
                        width="34"
                        height="34"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="2.5"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_245_3600"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_245_3600"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <Heading
                  size="visa_desktop_headers_subheader"
                  as="h5"
                  className="!text-accent-blue"
                >
                  [ 01 ]
                </Heading>
                <Heading
                  size="visa_desktop_headers_h4"
                  as="h6"
                  className="mt-2.5 lg:!text-[30px] !text-[20px]"
                >
                  Step 1
                </Heading>
                <Text
                  size="visa_desktop_body_text_18"
                  as="p"
                  className="!text-dark-2 mt-2">
                  Register, mint and stake OPN Tokens
                </Text>
              </div>
            </div>
            <div className="absolute 2xl:top-[213px] xl:top-[170px] lg:top-[138px] top-[110px] right-[-22px] z-50">
              <div className="relative flex flex-col items-start">
                <div className="absolute -top-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_245_3600)">
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#4DACFF"
                        fill-opacity="0.1"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="11.5"
                        stroke="#2573C0"
                        stroke-opacity="0.15"
                      />
                      <circle cx="12" cy="12" r="4" fill="#2573C0" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_245_3600"
                        x="-5"
                        y="-5"
                        width="34"
                        height="34"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="2.5"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_245_3600"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_245_3600"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <Heading
                  size="visa_desktop_headers_subheader"
                  as="h3"
                  className="!text-accent-blue"
                >
                  [ 02 ]
                </Heading>
                <Heading
                  size="visa_desktop_headers_h4"
                  as="h4"
                  className="mt-2.5 lg:!text-[30px] !text-[20px]"
                >
                  Step 2
                </Heading>
                <Text
                  size="visa_desktop_body_text_18"
                  as="p"
                  className="!text-dark-2 mt-2">
                  Upload required documentation
                </Text>
              </div>
            </div>
            <div className="absolute 2xl:top-[350px] xl:top-[277px] lg:top-[217px] top-[168px] 2xl:left-[135px] xl:left-[84px] lg:left-[34px] text-0 m-auto z-50">
              <div className="flex flex-col items-end relative">
                <div className="absolute w-[6px] h-[6px] rounded-full bg-dark-0 -top-6 right-3"></div>
                <Heading
                  size="visa_desktop_headers_subheader"
                  as="p"
                  className="!text-grey"
                >
                  [ 03 ]
                </Heading>
                <Heading
                  size="visa_desktop_headers_h4"
                  as="p"
                  className="mt-2.5 lg:!text-[30px] !text-[20px]"
                >
                  Step 3
                </Heading>
                <Text
                  size="visa_desktop_body_text_18"
                  as="p"
                  className="!text-dark-2 mt-2">
                  Initiate and complete the visa process
                </Text>
              </div>
            </div>
            <Img
              src="images/img_img_674x488.png"
              alt="Illustrative Image"
              className="absolute 2xl:top-[-100px] xl:top-[-50px] top-[-30px] left-1/2 -translate-x-1/2 z-50 2xl:max-w-[400px] xl:max-w-[250px] lg:max-w-[200px] max-w-[170px]"
            />
          </div>
          <div className="relative block md:hidden h-[350px] mb-16">
            <div className="absolute top-0 left-0">
              <img src="/images/steps_onboarding.png" alt="" />
            </div>
            <div className="ml-10">
              <div className="relative flex flex-col items-start h-[150px]">
                <Heading
                  size="visa_desktop_headers_subheader"
                  as="h5"
                  className="!text-accent-blue"
                >
                  [ 01 ]
                </Heading>
                <Heading
                  size="visa_desktop_headers_h4"
                  as="h6"
                  className="mt-2.5 lg:!text-[30px] !text-[20px]"
                >
                  Step 1
                </Heading>
                <Text
                  size="visa_desktop_body_text_18"
                  as="p"
                  className="!text-dark-2 mt-2">
                  Register, mint and stake OPN Tokens
                </Text>
              </div>
              <div className="relative flex flex-col items-start h-[153px]">
                <Heading
                  size="visa_desktop_headers_subheader"
                  as="h3"
                  className="!text-accent-blue"
                >
                  [ 02 ]
                </Heading>
                <Heading
                  size="visa_desktop_headers_h4"
                  as="h4"
                  className="mt-2.5 lg:!text-[30px] !text-[20px]"
                >
                  Step 2
                </Heading>
                <Text
                  size="visa_desktop_body_text_18"
                  as="p"
                  className="!text-dark-2 mt-2">
                  Upload required documentation
                </Text>
              </div>
              <div className="flex flex-col items-start relative">
                <Heading
                  size="visa_desktop_headers_subheader"
                  as="p"
                  className="!text-grey"
                >
                  [ 03 ]
                </Heading>
                <Heading
                  size="visa_desktop_headers_h4"
                  as="p"
                  className="mt-2.5 lg:!text-[30px] !text-[20px]"
                >
                  Step 3
                </Heading>
                <Text
                  size="visa_desktop_body_text_18"
                  as="p"
                  className="!text-dark-2 mt-2">
                  Initiate and complete the visa process
                </Text>
              </div>
            </div>
          </div>
          <Img
            src="images/img_img_674x488.png"
            alt="Illustrative Image"
            className="w-full max-h-[300px] object-cover rounded-xl md:hidden"
          />
        </div>
        {/* f a q section */}
        <FAQSection />
        <div className="md:mt-[180px] mt-[80px] flex flex-col items-center gap-[50px] self-stretch">
          {/* referral program section */}
          <ReferralProgramSection />
          <div className="container-xs mb-[50px] max-[1440px]:px-5 max-[1050px]:px-5">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

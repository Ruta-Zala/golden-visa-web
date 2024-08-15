import { Helmet } from "react-helmet";
import { Img } from "../../components/ImgMint";
import { Text } from "../../components/Text";
import { Heading } from "../../components/HeadingMint";
import { Button } from "../../components/ButtonGenz";
import Footer from "../../components/FooterGenz";
import Header from "../../components/HeaderVisa";
import FAQSection from "./FAQSection";
import Goldenvisaweb3entrepreneursection from "./Goldenvisaweb3entrepreneursection";
import HowItWorksSection from "./HowItWorksSection";
import PurchaseSection from "./PurchaseSection";
import ReferralProgramSection from "./ReferralProgramSection";
import React from "react";
export default function GoldenVisaWeb3EntrepreneurPage() {
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
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-0">
        <div className="self-stretch">
          <div className="flex h-[1000px] items-start justify-center bg-[url(/public/images/img_hero_web.png)] bg-cover bg-no-repeat py-4 max-[1440px]:h-auto max-[1050px]:h-auto max-[1050px]:bg-center">
            <div className="container-xs mb-[248px] flex justify-center px-14 max-[1440px]:px-5 max-[1050px]:px-5">
              <div className="flex w-[90%] flex-col gap-[220px] max-[1440px]:w-full max-[1440px]:gap-[165px] max-[1050px]:w-full max-[1050px]:gap-[165px] max-[550px]:gap-[110px]">
                <Header />
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
                  <button class="min-w-[268px] gap-4 font-medium capitalize text-black flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[26px] h-[52px] pl-8 pr-2 text-[18px] bg-white-0 text-black">
                    Mint OPN Tokens Now
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
          <div className="relative h-[1046px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto mt-0 h-max flex-1 py-[100px] max-[1440px]:py-8 max-[1050px]:py-5 max-[550px]:py-4">
              {/* golden visa web3 entrepreneur section */}
              <Goldenvisaweb3entrepreneursection />
            </div>
            <Img
              src="images/img_icon_star_glossy_glass_style copy.png"
              alt="Star Icon"
              className="absolute bottom-[-10px] left-0 right-0 m-auto h-[820px] w-[60%] object-contain"
            />
          </div>
        </div>
        {/* how it works section */}
        <HowItWorksSection />
        {/* purchase section */}
        <PurchaseSection />
        {/* <div className="container-xs mt-[66px] max-[1440px]:px-5 max-[1050px]:px-5">
          <div className="relative h-[1008px]">
            <div className="absolute right-[18%] top-0 m-auto h-[790px] w-[64%] bg-[url(/public/images/img_group_4.svg)] bg-cover bg-no-repeat px-3 py-28 max-[1440px]:h-auto max-[1440px]:py-8 max-[1050px]:h-auto max-[1050px]:w-full max-[1050px]:right-0 max-[1050px]:py-5 max-[550px]:py-4">
              <div className="mb-[402px] flex flex-col items-start gap-[26px] max-[1050px]:justify-center">
                <div className="ml-48 flex rounded-[18px] border border-solid border-dark-0 p-1.5 max-[1050px]:m-auto">
                  <Heading size="visa_desktop_headers_subheader" as="h2">
                    How Does It Work?
                  </Heading>
                </div>
                <Text
                  size="visa_desktop_headers_h2"
                  as="p"
                  className="max-[1440px]:text-[48px] max-[1050px]:self-center max-[1050px]:ml-10"
                >
                  Onboarding Steps
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[18%] left-0 right-0 m-auto h-[318px] flex-1">
              <Img
                src="images/img_lines.png"
                alt="Lines Image"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[310px] flex-1 object-cover max-[1050px]:hidden"
              />
              <Img
                src="images/img_dots.svg"
                alt="Dots Image"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[308px] w-[72%] object-contain max-[1050px]:hidden"
              />
              <div className="absolute w-[1px] bg-indigo-500 h-[74%] top-[-95%] left-3 max-[1440px]:hidden max-[1050px]:block"></div>
              <div className="absolute top-[-95%] flex flex-col gap-[82px] max-[1440px]:hidden max-[1050px]:flex">
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
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              <div className="absolute bottom-[-0.50px] right-[27px] m-auto flex flex-col items-start max-[1050px]:top-[-60%] max-[1050px]:right-[71%] max-[550px]:right-[48vw]">
                <Heading
                  size="visa_desktop_headers_subheader"
                  as="h3"
                  className="!text-accent-blue"
                >
                  [ 02 ]
                </Heading>
                <Heading
                  as="h4"
                  className="mt-2.5 max-[1050px]:text-[26px] max-[550px]:text-[24px]"
                >
                  Step 2
                </Heading>
                <Text
                  size="visa_desktop_body_text_18"
                  as="p"
                  className="!text-dark-2"
                >
                  Verify your identity
                </Text>
              </div>
            </div>
            <div className="absolute left-0 top-[20%] m-auto flex flex-col items-end max-[1050px]:top-[20%] max-[1050px]:left-[12%] max-[1050px]:items-start">
              <Heading
                size="visa_desktop_headers_subheader"
                as="h5"
                className="!text-accent-blue"
              >
                [ 01 ]
              </Heading>
              <Heading
                as="h6"
                className="mt-2.5 max-[1050px]:text-[26px] max-[550px]:text-[24px]"
              >
                Step 1
              </Heading>
              <Text
                size="visa_desktop_body_text_18"
                as="p"
                className="!text-dark-2"
              >
                Complete your profile setup
              </Text>
            </div>
            <div className="absolute bottom-[5%] left-0 m-auto flex flex-col items-end max-[1050px]:items-start max-[1050px]:left-[12%] max-[1050px]:top-[42%]">
              <Heading
                size="visa_desktop_headers_subheader"
                as="p"
                className="!text-grey"
              >
                [ 03 ]
              </Heading>
              <Heading
                as="p"
                className="mt-2.5 max-[1050px]:text-[26px] max-[550px]:text-[24px]"
              >
                Step 3
              </Heading>
              <Text
                size="visa_desktop_body_text_18"
                as="p"
                className="!text-dark-2"
              >
                Mint your tokens
              </Text>
            </div>
            <Img
              src="images/img_img_674x488.png"
              alt="Illustrative Image"
              className="absolute bottom-[-0.26px] left-0 right-0 m-auto h-[674px] w-[32%] rounded-[24px] object-contain max-[1050px]:object-cover max-[1050px]:mb-[-140px] max-[1050px]:h-[576px] max-[1050px]:w-[90%] max-[550px]:object-contain max-[550px]:h-[674px] max-[550px]:mb-[-240px]"
            />
          </div>
        </div> */}
        {/* f a q section */}
        <FAQSection />
        <div className="mt-[180px] flex flex-col items-center gap-[50px] self-stretch">
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

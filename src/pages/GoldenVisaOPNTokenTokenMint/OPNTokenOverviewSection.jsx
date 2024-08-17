import { Text } from "../../components/Text/index";
import { Heading } from "../../components/HeadingMint/index";
import { Button } from "../../components/Button/index";
import ChainProfile from "../../components/ChainProfile";
import InvestmentProfile from "../../components/InvestmentProfile";
import PublicSaleRow from "../../components/PublicSaleRow";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const featureList = [
  {
    investmentImage: "images/investment.svg",
    investmentText: "Investment Potential",
  },
  {
    investmentImage: "images/crown.svg",
    investmentText: (
      <>
        Exclusive
        <br />
        Access
      </>
    ),
  },
  {
    investmentImage: "images/planet.svg",
    investmentText: (
      <>
        Global
        <br />
        Recognition
      </>
    ),
  },
];
const statList = [
  { userName: "Name", userIOPn: "IOPn" },
  { userName: "Symbol", userIOPn: "OPN" },
  { userName: "Decimal", userIOPn: "18" },
];
const chartLegendList = [
  { publicSaleText: "Public Sale", percentageText: "70%", color: '#0056B8' },
  { publicSaleText: "Team", percentageText: "15%", color: "#46CEE9" },
  { publicSaleText: "Ecosystem", percentageText: "10%", color: "#65C1AD" },
  { publicSaleText: "Liquidity", percentageText: "5%", color: "#B69BED" },
];

export default function OPNTokenOverviewSection() {
  return (
    <>
      {/* o p n token overview section */}
      <div className="mt-[100px] flex flex-col items-center" id="benefits">
        <div className="container-xs flex flex-col gap-20 max-[1440px]:gap-20 max-[1440px]:px-5 max-[1050px]:gap-[60px] max-[1050px]:px-5 max-[550px]:gap-10">
          <div className="mx-[126px] flex flex-col items-center gap-[30px] max-[1050px]:mx-0">
            <button
              size="sm"
              className="min-w-[180px] rounded-[18px] text-sm font-medium uppercase text-black px-2 py-2 border border-black"
            >
              About OPN Token
            </button>
            <Text
              size="visa_desktop_headers_h2"
              as="p"
              className="self-stretch text-center leading-[105%] text-3xl md:text-5xl"
            >
              Learn about the OPN Token and its<br/> role in the IOPn ecosystem
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 max-[1050px]:flex-col">
              <div className="flex w-full flex-col gap-[60px] rounded-[20px] bg-light_base p-10 max-[550px]:gap-[30px] max-[550px]:p-4">
                <div className="flex flex-col items-start gap-3.5">
                  <Text
                    size="visa_desktop_headers_h3"
                    as="p"
                    className="text-2xl md:text-3xl lg:text-4xl"
                  >
                    What is the OPN Token?
                  </Text>
                  <Text
                    size="visa_desktop_body_text_20"
                    as="p"
                    className="w-full text-[16px] lg:text-[20px] leading-[140%] !text-dark-1 max-[550px]:text-[14px]"
                  >
                   By minting IOPn tokens, you not only become part of an exciting Web3 ecosystem but also get the chance to win a coveted UAE Golden Visa. This prestigious visa offers unparalleled residency benefits, including tax advantages, business ownership opportunities, and access to world-class healthcare and education.
                  </Text>
                </div>
                <div>
                  <div className="flex gap-[100px] max-[1050px]:flex-row max-[550px]:flex-row max-[550px]:gap-[25px]">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {statList.map((d, index) => (
                        <UserProfile {...d} key={"statsList" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-12 rounded-[20px] border border-solid border-gray-200 bg-white-0 p-10 shadow-lg max-[550px]:p-4">
                <div className="flex flex-col items-start gap-3.5">
                  <Text
                    size="visa_desktop_headers_h3"
                    as="p"
                    className="text-2xl md:text-3xl lg:text-4xl"
                  >
                    Benefits of OPN Token
                  </Text>
                  <Text
                    size="visa_desktop_body_text_20"
                    as="p"
                    className="w-full text-[16px] lg:text-[20px] leading-[140%] !text-dark-1 max-[550px]:text-[14px]"
                  >
                    Are you ready to experience the opulence and excitement of
                    the UAE? The IOPn token is your golden ticket to this
                    extraordinary destination.
                  </Text>
                </div>
                <div className="mb-1.5 flex gap-4 max-[1050px]:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {featureList.map((d, index) => (
                      <InvestmentProfile {...d} key={"featuresList" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
            <div className="flex gap-4 max-[1050px]:flex-col">
              <div className="flex w-[32%] flex-col gap-[140px] rounded-[20px] bg-gradient5 p-12 max-[1440px]:gap-[105px] max-[1050px]:w-full max-[1050px]:gap-[105px] max-[1050px]:p-5 max-[550px]:gap-[70px] max-[550px]:p-4">
                <Text
                  size="visa_desktop_headers_h3"
                  as="p"
                  className="leading-[110%] !text-white-0 text-3xl md:text-4xl"
                >
                  OPN Token Technical Specifications
                </Text>
                <div className="flex flex-col gap-4">
                  <ChainProfile />
                  <ChainProfile
                    chainImage="images/money.svg"
                    chainLabel="Total Supply"
                    chainName="50 Billion"
                  />
                </div>
              </div>
              <div className="h-[616px] flex-1 bg-[url(/public/images/img_chart_legend.svg)] bg-cover bg-no-repeat max-[1440px]:h-auto max-[1050px]:h-auto max-[1050px]:self-stretch">
                <div className="mt-12 flex items-start justify-between gap-5 max-[1050px]:flex-col">
                  <div className="ml-[62px] mt-3.5 flex h-[488px] w-[52%] flex-col items-center justify-center bg-[url(/public/images/img_chart_mint.png)] bg-contain bg-no-repeat px-14 py-52 max-[1440px]:bg-[length:100%_100%] max-[1440px]:py-8 max-[1050px]:ml-0 max-[1050px]:h-[800px] max-[1050px]:bg-[length:100%_100%] max-[1050px]:w-full max-[1050px]:p-5 max-[550px]:p-4 max-[550px]:h-[390px]">
                    <div className="flex flex-col items-center mr-[30px]">
                      <Heading
                        size="visa_desktop_headers_h4"
                        as="h1"
                        className="max-[1050px]:text-[26px] max-[550px]:text-[24px]"
                      >
                        70%
                      </Heading>
                      <Text
                        size="visa_desktop_body_text_16"
                        as="p"
                        className="relative mt-[-2px] !text-dark-2"
                      >
                        Public Sale
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[38%] flex-col gap-[84px] self-center max-[1440px]:gap-[84px] max-[1050px]:w-full max-[1050px]:gap-[63px] max-[550px]:gap-[42px]">
                    <div className="flex flex-col items-start gap-[18px] max-[1050px]:ml-4 max-[550px]:ml-4">
                      <Text
                        size="visa_desktop_headers_h3"
                        as="p"
                        className="w-[76%] leading-[110%] max-[1440px]:w-full max-[1050px]:w-full text-3xl md:text-5xl"
                      >
                        Token Allocation
                      </Text>
                      <Text
                        size="visa_desktop_body_text_20"
                        as="p"
                        className="w-[86%] leading-[140%] !text-dark-1 max-[1440px]:w-full max-[1050px]:w-full text-xl"
                      >
                        Revolutionary token designed to offer a unique
                        opportunity to win a coveted UAE Golden Visa.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 ml-4">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {chartLegendList.map((d, index) => (
                          <PublicSaleRow {...d} key={"legendList" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

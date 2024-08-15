import { Button } from "../../components/ButtonGenz";
import { Img } from "../../components/ImgMint";
import { Heading } from "../../components/HeadingMint";
import { Text } from "../../components/Text";
import React from "react";

export default function HowItWorksSection() {
  return (
    <>
      {/* how it works section */}
      <div className="mt-[148px] flex justify-center self-stretch">
        <div className="container-xs flex justify-center gap-4 max-[1440px]:px-5 max-[1050px]:flex-col max-[1050px]:px-5">
          <Img
            src="images/img_img copy.png"
            alt="Main Image"
            className="h-[692px] w-[50%] rounded-[20px] object-contain max-[1050px]:w-full"
          />
          <div className="flex flex-1 flex-col items-center gap-5 rounded-[20px] border border-solid border-gray-300 bg-white-0 p-7 shadow-sm max-[1050px]:self-stretch max-[550px]:p-4">
            <div
              className="mt-5 flex flex-col items-start gap-[18px]"
              style={{ marginLeft: "-180px", position: "relative" }}
            >
              <Button
                size="xs"
                className="min-w-[212px] rounded-[18px] border border-dark-0 border-solid font-medium uppercase"
              >
                Step-by-step process
              </Button>
              <Text
                size="visa_desktop_headers_h1"
                as="p"
                className="text-[70px]"
              >
                How It Works
              </Text>
            </div>
            <div className="flex w-[94%] items-start justify-center gap-5 max-[1440px]:w-full max-[1050px]:w-full max-[1050px]:flex-row">
              <div className="relative mt-1 h-[414px] w-[8%] self-center max-[1050px]:w-[20%]">
                <div className="absolute bottom-0 left-0 right-0 m-auto flex flex-1 items-start justify-center px-[26px] max-[550px]:px-4">
                  <div className="h-[386px] w-[2px] self-center bg-gray-300" />
                  <div className="relative ml-[-2px] h-[218px] w-[2px] bg-gradient4" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center">
                  <Button
                    color="white_0"
                    size="md"
                    variant="fill"
                    shape="circle"
                    className="indigo_100_dark_0_border w-[56px] !rounded-[28px] border-[1.5px] border-solid"
                  >
                    <Img
                      src="images/img_coins_stack_streamline_core.svg"
                      className="max-w-none"
                    />
                  </Button>
                  <Button
                    color="light_base"
                    size="md"
                    variant="fill"
                    shape="circle"
                    className="mt-[166px] w-[56px] !rounded-[28px]"
                  >
                    <Img src="images/img_frame_84.svg" className="max-w-none" />
                  </Button>
                  <Button
                    color="light_base"
                    size="md"
                    variant="fill"
                    shape="circle"
                    className="mt-[60px] w-[56px] !rounded-[28px]"
                  >
                    <Img
                      src="images/img_calendar_star.svg"
                      className="max-w-none"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start max-[1050px]:self-stretch">
                <div className="mt-9 flex flex-col items-start gap-1 self-stretch">
                  <Heading
                    as="h2"
                    size="visa_desktop_headers_h4"
                    className="max-[1050px]:text-[26px] max-[550px]:text-[24px]"
                  >
                    1. Mint and Stake OPN Tokens
                  </Heading>
                  <Text
                    size="visa_desktop_body_text_20"
                    as="p"
                    className="!text-dark-1"
                  >
                    Start by minting and staking OPO tokens.
                  </Text>
                </div>
                <Button
                  color="accent_dark_blue"
                  shape="round"
                  rightIcon={
                    <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-accent-dark_blue">
                      <Img
                        src="images/img_arrowleft_white_0.svg"
                        alt="Arrow Left"
                        className="h-[18px] w-[18px]"
                      />
                    </div>
                  }
                  className="mt-8 min-w-[192px] gap-4 font-medium capitalize"
                >
                  View details
                </Button>
                <Heading
                  as="h3"
                  size="visa_desktop_headers_h4"
                  className="mt-[66px] !text-grey max-[1050px]:text-[26px] max-[550px]:text-[24px]"
                >
                  2. Upload Documents
                </Heading>
                <Heading
                  as="h4"
                  size="visa_desktop_headers_h4"
                  className="mt-16 !text-grey max-[1050px]:text-[26px] max-[550px]:text-[24px]"
                >
                  3. Visa Process
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

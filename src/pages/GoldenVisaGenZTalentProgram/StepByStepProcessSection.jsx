import { Heading } from "../../components/HeadingGenz/index";
import { Button } from "../../components/ButtonGenz/index";
import { Img } from "../../components/ImgGenz/index";
import { Text } from "../../components/TextGenz/index";
import React from "react";

export default function StepByStepProcessSection() {
  return (
    <>
      {/* step by step process section */}
      <div
        className="mt-[70px] flex justify-center self-stretch"
        id="howItWroks"
      >
        <div className="mt-[10px] container-xs flex justify-center gap-4 max-[1440px]:px-5 flex-col md:flex-row max-[1050px]:px-5">
          <Img
            src="images/img_rectangle_11 copy 2.png"
            alt="Main Image"
            className="h-[340px] sm:h-[450px] md:h-[auto] rounded-[20px] object-cover w-full md:w-[50%]"
          />
          <div className="flex flex-1 flex-col gap-11 rounded-[20px] border-0 md:border md:border-solid md:border-gray-300 bg-[#f9fcff] md:bg-white-0 lg:p-[46px] p-[20px] shadow-md max-[1050px]:self-stretch">
            <div className="flex flex-col items-start gap-[18px]">
              <Button
                size="sm"
                color="undefined_undefined"
                className="flex rounded-[18px] border border-solid border-dark-0 p-1.5"
              >
                Step-by-step process
              </Button>
              <Text
                size="visa_desktop_headers_h3"
                as="p"
                className="!text-dark-0 max-[1440px]:text-[48px]"
              >
                How it works
              </Text>
            </div>
            <div>
              <div className="flex items-start gap-5 relative h-[400px]">
                <div className="absolute top-0 left-0 h-full w-[50px]">
                  <img
                    src="/images/works-sec-stepper.png"
                    className="h-full w-full"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start ml-16">
                  <div className="flex flex-col items-start gap-4 self-stretch lg:h-[250px] h-[255px]">
                    <div className="flex flex-col items-start gap-0.5 self-stretch">
                      <Heading
                        size="visa_desktop_headers_h4"
                        as="h2"
                        className="!text-dark-0 lg:!text-[30px] !text-[26px]"
                      >
                        1. Mint OPN Tokens
                      </Heading>
                      <Text
                        size="visa_desktop_body_text_20"
                        as="p"
                        className="w-full leading-[140%] !text-dark-1 line-clamp-5"
                      >
                        These tokens are your key to participating in the IOPn
                        Web3 Ecosystem.
                      </Text>
                    </div>
                    <a href="/#/OPNTokenMint">
                      <Button
                        shape="round"
                        color="undefined_undefined"
                        rightIcon={
                          <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-accent-dark_blue">
                            <Img
                              src="images/img_arrowleft_white_0.svg"
                              alt="Arrow Left"
                              className="h-[18px] w-[18px]"
                            />
                          </div>
                        }
                        className="flex rounded-[18px] border border-solid border-dark-0 p-1.5 gap-5"
                      >
                        View details
                      </Button>
                    </a>
                  </div>
                  <Heading
                    size="visa_desktop_headers_h4"
                    as="h3"
                    className="lg:!text-[30px] !text-[26px] md:h-[90px] h-[105px] !text-[#94A3B8] font-medium"
                  >
                    2. Stake OPN tokens
                  </Heading>
                  <Heading
                    size="visa_desktop_headers_h4"
                    as="h4"
                    className="lg:!text-[30px] !text-[26px] md:mt-[15px] mt-0 !text-[#94A3B8] font-medium"
                  >
                    3. Golden Draw
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

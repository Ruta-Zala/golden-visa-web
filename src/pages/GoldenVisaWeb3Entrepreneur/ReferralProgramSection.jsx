import { Button } from "../../components/ButtonGenz";
import { Img } from "../../components/ImgMint";
import { Text } from "../../components/Text";
import { Input } from "../../components/InputGenz";
import React from "react";

export default function ReferralProgramSection() {
  return (
    <>
      {/* referral program section */}
      <div className="relative h-[1068px] content-center self-stretch max-[1440px]:h-auto max-[1050px]:h-auto">
        <div className="container-xs flex flex-col gap-4 max-[1440px]:px-5 max-[1050px]:px-5">
          <div className="flex gap-4 max-[1050px]:flex-col">
            <div className="w-full rounded-[20px] bg-light_base">
              <div className="relative mt-12 h-[422px]">
                <div className="absolute right-0 top-0 my-auto ml-12 mr-auto flex flex-1 flex-col items-start gap-6 max-[1440px]:ml-0 max-[1050px]:ml-0">
                  <Button
                    size="xs"
                    className="min-w-[122px] rounded-[18px] font-medium uppercase"
                  >
                    OPN token
                  </Button>
                  <Text
                    size="visa_desktop_headers_h2"
                    as="p"
                    className="max-[1440px]:text-[48px]"
                  >
                    Referral Program
                  </Text>
                </div>
                <Img
                  src="images/img_chain_link_2x_1.png"
                  alt="Chainlink Image"
                  className="absolute bottom-px left-0 m-auto h-[266px] w-[46%] object-contain opacity-70"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-[60px] rounded-[20px] bg-dark-0 p-10 shadow-sm max-[550px]:gap-[30px] max-[550px]:p-4">
              <div className="flex flex-col items-start gap-2.5">
                <Text
                  size="visa_desktop_headers_h3"
                  as="p"
                  className="!text-white-0 max-[1050px]:text-[28px] max-[550px]:text-[22px]"
                >
                  Generate Referral Link
                </Text>
                <Text
                  size="iopn_desktop_body_text_20"
                  as="p"
                  className="w-[86%] leading-[140%] !text-white-1 max-[1440px]:w-full max-[1050px]:w-full"
                >
                  Share your unique referral link and earn IOPn tokens for every
                  friend who joins through your link.
                </Text>
              </div>
              <div className="mb-1.5 flex flex-col gap-4">
                <Input
                  color="white_A700_33"
                  size="xs"
                  shape="round"
                  name="Edit URL"
                  placeholder={`https://iopn.io/gkiyfujytdhtsrsytdr`}
                  suffix={
                    <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-dark-0">
                      <Img
                        src="images/img_arrowleft_white_0.svg"
                        alt="Arrow Left"
                        className="h-[26px] w-[18px]"
                      />
                    </div>
                  }
                  className="gap-4 !rounded-[34px]"
                />
                <div className="flex flex-col gap-3">
                  <Button
                    color="white_0"
                    shape="round"
                    rightIcon={
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                        <Img
                          src="images/img_arrowleft.svg"
                          alt="Arrow Left"
                          className="h-[18px] w-[18px]"
                        />
                      </div>
                    }
                    className="gap-[34px] self-stretch font-medium capitalize"
                  >
                    Generate referral link
                  </Button>
                  <Text
                    size="visa_desktop_body_text_16"
                    as="p"
                    className="text-center leading-[130%] !text-white-3"
                  >
                    *Copy this link and share it witch other people to nvite
                    your network to embark on this exciting journey with you and
                    watch your token balance grow.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 max-[1050px]:flex-col">
            <Img
              src="images/img_rectangle_11 copy 3.png"
              alt="Rectangle Image"
              className="h-[582px] w-[50%] rounded-[20px] object-contain max-[1050px]:w-full"
            />
            <div className="flex flex-1 flex-col items-start justify-center gap-20 rounded-[20px] border border-solid border-gray-300 bg-white-0 py-16 pl-16 pr-14 shadow-sm max-[1440px]:gap-20 max-[1440px]:py-8 max-[1440px]:pl-8 max-[1050px]:gap-[60px] max-[1050px]:self-stretch max-[1050px]:p-5 max-[550px]:gap-10 max-[550px]:p-4">
              <div className="flex flex-col gap-5 self-stretch">
                <div className="flex flex-col items-start gap-[30px]">
                  <Button
                    size="xs"
                    className="min-w-[134px] rounded-[18px] font-medium uppercase"
                  >
                    Get started
                  </Button>
                  <Text
                    size="visa_desktop_headers_h2"
                    as="p"
                    className="w-full leading-[105%] max-[1440px]:text-[48px]"
                  >
                    <>
                      Ready to Invest in
                      <br />
                      Your Future?
                    </>
                  </Text>
                </div>
                <Text
                  size="iopn_desktop_body_text_20"
                  as="p"
                  className="leading-[140%] !text-dark-2"
                >
                  Don’t wait! Join the GenZ Talent Program today and take the
                  first step towards a brighter future. Purchase your OPN Coins
                  now and enter the monthly draw for your chance to win a UAE
                  Golden Visa.
                </Text>
              </div>
              <Button
                variant="gradient"
                shape="round"
                color="blue_700_blue_800_01"
                rightIcon={
                  <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                    <Img
                      src="images/img_arrowleft_accent_blue.svg"
                      alt="Arrow Left"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                }
                className="min-w-[268px] gap-4 font-medium capitalize bg-gradient5 text-white-0"
              >
                Mint OPN Tokens Now
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute left-0 right-0 top-[42%] m-auto h-[64px] w-[64px] rounded-br-[32px] rounded-tl-[32px] bg-gradient3" />
      </div>
    </>
  );
}

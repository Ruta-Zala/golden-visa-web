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
        <div className="container-xs flex flex-col lg:gap-4 gap-14 max-[1440px]:px-5 max-[1050px]:px-5">
          <div className="gap-4 grid lg:grid-cols-2">
            <div className="w-full rounded-[20px] bg-light_base overflow-hidden">
              <div className="relative mt-12 lg:h-[422px] h-[250px]">
                <div className="absolute left-0 top-0 my-auto ml-12 mr-auto flex flex-1 flex-col items-start gap-6 z-50">
                  <Button
                    size="xs"
                    className="min-w-[122px] rounded-[18px] font-medium uppercase border border-dark-0"
                  >
                    OPN token
                  </Button>
                  <Text
                    size="visa_headers_h2"
                    as="p"
                    className="lg:!text-[48px] !text-[35px]"
                  >
                    Referral Program
                  </Text>
                </div>
                <Img
                  src="images/img_chain_link_2x_1.png"
                  alt="Chainlink Image"
                  className="absolute lg:bottom-0 bottom-[unset] lg:left-0 left-[unset] lg:right-[unset] right-0 lg:top-[unset] top-[-50px] m-auto w-[46%] opacity-70 lg:rotate-[unset] rotate-180"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-[60px] rounded-[20px] bg-dark-0 p-10 shadow-sm max-[550px]:gap-[30px] max-[550px]:p-4">
              <div className="flex flex-col items-start gap-2.5">
                <Text
                  size="visa_headers_h3"
                  as="p"
                  className="!text-white-0 lg:!text-[48px] !text-[35px]"
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
                  color="white_0"
                  size="xs"
                  shape="round"
                  name="Editable URL"
                  placeholder="https://iopn.io/gkiyfujytdhtsrsytdr"
                  value="https://iopn.io/gkiyfujytdhtsrsytdr"
                  suffix={
                    <Button
                      color="white_0"
                      variant="fill"
                      shape="round"
                      rightIcon={
                        <div className="copy-link-button hidden md:flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-dark-0">
                          <Img
                            src="images/img_arrowleft_white_0.svg"
                            alt="Arrow Left"
                            className="h-[18px] w-[18px]"
                          />
                        </div>
                      }
                      className="hidden md:flex rounded-[18px] p-1.5 gap-5 font-semibold !text-dark-0 !font-weight-[600]"
                    >
                      Copy Link
                    </Button>
                  }
                  className="!rounded-[34px] max-[550px]:text-[18px] max-[550px]:h-[50px] !pr-1 bg-white-4"
                />

                <div className="flex flex-col gap-3">
                  <Button
                    color="white_0"
                    variant="fill"
                    shape="round"
                    rightIcon={
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-dark-0 absolute right-[5px] mr-2">
                        <Img
                          src="images/img_arrowleft_white_0.svg"
                          alt="Arrow Left"
                          className="h-[18px] w-[18px]"
                        />
                      </div>
                    }
                    className="gap-[34px] py-4 rounded-[40px] !text-dark-0 font-semibold capitalize relative flex md:hidden"
                  >
                    Copy Link
                  </Button>

                  <Button
                    color="white_0"
                    shape="round"
                    rightIcon={
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[5px] mr-2">
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
                    *Copy this link and share it witch other people to invite
                    your network to embark on this exciting journey with you and
                    watch your token balance grow.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-4 grid lg:grid-cols-2">
            <Img
              src="images/img_rectangle_11 copy 3.png"
              alt="Rectangle Image"
              className="h-full rounded-[20px] w-full"
            />
            <div className="flex flex-1 flex-col items-start justify-center gap-20 rounded-[20px] border border-solid border-gray-300 bg-white-0 py-16 pl-16 pr-14 shadow-sm max-[1440px]:gap-20 max-[1440px]:py-8 max-[1440px]:pl-8 max-[1050px]:gap-[60px] max-[1050px]:self-stretch max-[1050px]:p-5 max-[550px]:gap-10 max-[550px]:p-4">
              <div className="flex flex-col gap-5 self-stretch">
                <div className="flex flex-col items-start gap-[30px]">
                  <Button
                    size="xs"
                    className="min-w-[134px] rounded-[18px] font-medium uppercase border border-dark-0"
                  >
                    Get started
                  </Button>
                  <Text
                    size="visa_headers_h2"
                    as="p"
                    className="w-full leading-[105%] lg:!text-[48px] !text-[35px]"
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
        <div className="absolute left-0 right-0 top-[42%] m-auto h-[64px] w-[64px] rounded-br-[32px] hidden rounded-tl-[32px] bg-gradient3" />
      </div>
    </>
  );
}

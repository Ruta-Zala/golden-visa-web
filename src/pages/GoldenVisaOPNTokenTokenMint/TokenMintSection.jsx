import { Button } from "../../components/Button/index";
import { Img } from "../../components/ImgMint/index";
import { Heading } from "../../components/HeadingMint/index";
import { Input } from "../../components/Input/index";
import { Text } from "../../components/Text/index";
import React from "react";

export default function TokenMintSection() {
  return (
    <>
      {/* token mint section */}
      <div className="relative mt-[118px] h-[604px]">
        <Img
          src="images/img_background_copy.png"
          alt="Background Copy"
          className="absolute bottom-0 right-px top-0 my-auto h-[604px] w-[34%] object-contain opacity-60"
        />
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max items-start justify-center max-[1440px]:px-5 max-[1050px]:relative max-[1050px]:flex-col max-[1050px]:px-5">
          <div className="flex w-[46%] flex-col max-[1050px]:w-full">
            <div className="flex flex-col items-start gap-[18px]">
              <Button
                size="xs"
                className="min-w-[134px] !text-slate-900 rounded-[18px] font-medium uppercase !border !border-slate-900 rounded-full"
              >
                Token Mint
              </Button>
              <Text
                size="visa_headers_h2"
                as="p"
                className="text-3xl md:text-5xl"
              >
                Mint OPN Tokens{" "}
              </Text>
            </div>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-3 w-[90%] leading-[140%] !text-dark-1 max-[1440px]:w-full max-[1050px]:w-full max-[550px]:text-[15px] text-[20px]"
            >
              Our token&#39;s minting journey spans 500 days, ensuring a steady
              and controlled release into the market. This gradual approach
              helps maintain price stability and prevents market manipulation.
            </Text>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-5 w-[90%] leading-[140%] max-[1440px]:w-full max-[1050px]:w-full max-[550px]:text-[15px] text-[20px] max-[550px]:mb-6"
            >
              <span>Act fast! Only&nbsp;</span>
              <span className="font-medium">
                120.75K OPN tokens remain for today&#39;s mint. Don&#39;t miss
                out on this opportunity. Daily cap enforced for fairness.
              </span>
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-[60px] self-center max-[1050px]:self-stretch max-[550px]:gap-[30px]">
            <div className="flex flex-col items-end gap-6">
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  You will pay
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    className="placeholder:text-slate-900"
                    type="text"
                    name="Payment Input"
                    placeholder="$ 100"
                  />
                  <div className="flex gap-4 border border-solid bg-[#fff] pr-[40px] pl-[20px] py-[5px] rounded-[30px] items-center">
                    <img
                      className="h-[32px] w-[32px]"
                      src="images/img_ellipse_362.png"
                      alt="Ellipse 362"
                      loading="lazy"
                    />
                    USD
                  </div>
                </label>
              </div>
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h4"
                  className="!text-grey"
                >
                  You will get
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    className="placeholder:text-slate-900"
                    type="text"
                    name="Token Input"
                    placeholder="OPN 1250"
                  />
                  <div className="flex gap-4 border border-solid bg-[#fff] pr-[40px] pl-[20px] py-[5px] rounded-[30px] items-center">
                    <img
                      className="h-[32px] w-[32px]"
                      src="images/img_ellipse_362_26x32.png"
                      alt="Ellipse 362"
                      loading="lazy"
                    />
                    OPN
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col items-end gap-6">
              <button
                class="gap-[34px] font-medium white capitalize w-[90%] max-[1440px]:w-full max-[1050px]:w-full bg-[#2573C0] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium rounded-[26px] px-3 py-3 text-xl relative border border-slate-900"
                style={{ color: "white" }}
              >
                Mint
                <div class="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[5px]">
                  <img
                    class="h-[18px] w-[18px]"
                    src="images/img_arrowleft_blue_800.svg"
                    alt="Arrow Left"
                    loading="lazy"
                  />
                </div>
              </button>
              <div className="flex justify-center w-[90%] max-[1440px]:w-full max-[1050px]:w-full items-center gap-2.5">
                <h5 class="text-dark-0 font-outfit font-bold capitalize text-xl">
                  Connect wallet
                </h5>
                <button
                  class="w-[36px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium text-sm px-2 py-2 rounded-3xl max-w-64"
                  style={{ backgroundColor: "black", padding: "12px" }}
                >
                  <img
                    src="images/img_arrowleft_white_0.svg"
                    alt="testImg"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Button } from "../../components/ButtonGenz";
import { Img } from "../../components/ImgMint";
import { Heading } from "../../components/HeadingMint";
import { Text } from "../../components/Text";
import { Input } from "../../components/InputGenz";
import React from "react";

export default function PurchaseSection() {
  return (
    <>
      {/* purchase section */}
      <div className="mt-[80px] md:mt-[100px] xl:mt-[180px] flex justify-center self-stretch" id="participate">
        <div className="container-xs flex gap-[30px] items-start justify-center max-[1440px]:px-5 flex-col md:flex-row max-[1050px]:px-5">
          <div className="flex w-full flex-col">
            <div className="flex flex-col items-start gap-[18px]">
              <Button
                size="xs"
                className="min-w-[170px] rounded-[18px] font-medium uppercase border border-dark-0"
              >
                Participate
              </Button>
              <Text
                size="visa_desktop_headers_h2"
                as="p"
                className="text-[72px]"
              >
                Mint Tokens
              </Text>
            </div>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-1 w-[80%] leading-[140%] !text-dark-2 max-[1440px]:w-full max-[1050px]:w-full"
            >
              Our token&#39;s minting journey spans 500 days, ensuring a steady
              and controlled release into the market. This gradual approach
              helps maintain price stability and prevents market manipulation.
            </Text>
            {/* <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-5 w-[80%] leading-[140%] max-[1440px]:w-full max-[1050px]:w-full"
            >
              <span className="font-medium">Act fast! Only&nbsp;</span>
              <span className="font-medium">
                120.75K OPN tokens remain for today&#39;s mint. Don&#39;t miss
                out on this opportunity. Daily cap enforced for fairness.
              </span>
            </Text> */}
          </div>
          <div className="relative h-[650px] w-full self-center rounded-[20px] bg-light_base">
            <Img
              src="images/img_icon_star_glossy_glass_style_442x384.png"
              alt="Star Image"
              className="absolute right-0 top-0 m-auto h-[442px] w-auto rounded-[20px] object-contain opacity-50"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-6 px-12 max-[1050px]:px-5 max-[550px]:px-4">
              <div className="flex w-[100%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  YOUR NAME
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    className="placeholder:text-slate-900"
                    type="text"
                    name="Name Input"
                    placeholder="John Deo"
                  />
                </label>
              </div>
              <div className="flex w-[100%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  YOUR EMAIL
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    className="placeholder:text-slate-900"
                    type="text"
                    name="Email Input"
                    placeholder="johndoe@gmail.com"
                  />
                </label>
              </div>
              <div className="flex w-[100%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  OPN AMOUNT TO STAKE
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    className="placeholder:text-slate-900"
                    type="text"
                    name="OPN Input"
                    placeholder="OPN 12.780"
                  />
                  <div className="flex text-lg gap-4 border border-solid bg-[#fff] pr-[40px] pl-[20px] py-[5px] rounded-[30px] items-center">
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
              <div className="flex w-[100%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  CURRENT USD VALUE
                </Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 text-dark-0 h-[70px] pl-[26px] pr-6 text-[28px]">
                  <input
                    className="placeholder:text-slate-900"
                    type="text"
                    name="Usd Input"
                    placeholder="$ 150.700"
                  />
                  <div className="flex gap-4 text-lg border border-solid bg-[#fff] pr-[40px] pl-[20px] py-[5px] rounded-[30px] items-center">
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
              <div className="flex flex-col gap-4">
                <Button
                  shape="round"
                  className="flex items-center justify-center relative gap-[34px] self-stretch font-medium  bg-[#2573C0]"
                  color="white_0"
                >
                  <span class="absolute left-1/2 transform -translate-x-1/2">
                    Participate
                  </span>
                  <div class="ml-auto flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                    <img
                      class="h-[12px] w-[12px]"
                      src="images/img_arrowleft_blue_800.svg"
                      alt="Arrow Left"
                      loading="lazy"
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

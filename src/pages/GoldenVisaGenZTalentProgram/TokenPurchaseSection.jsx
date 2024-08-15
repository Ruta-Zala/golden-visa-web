import { Button } from "../../components/ButtonGenz/index";
import { Img } from "../../components/ImgGenz/index";
import { Heading } from "../../components/HeadingGenz/index";
import { Input } from "../../components/InputGenz/index";
import { Text } from "../../components/TextGenz/index";
import React from "react";

export default function TokenPurchaseSection() {
  return (
    <>
      {/* token purchase section */}
      <div className="relative mt-[118px] h-[604px] self-stretch">
        <Img
          src="images/img_background_copy.png"
          alt="Background Image"
          className="absolute bottom-0 right-px top-0 my-auto h-[604px] w-[34%] object-contain opacity-60"
        />
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max items-start justify-center max-[1440px]:px-5 max-[1050px]:relative max-[1050px]:flex-col max-[1050px]:px-5">
          <div className="flex w-[46%] flex-col gap-5 max-[1050px]:w-full">
            <div className="flex flex-col items-start gap-[30px]">
              <Button
                size="sm"
                color="undefined_undefined"
                className="flex rounded-[18px] border border-solid border-dark-0 p-1.5"
              >
                Token purchase
              </Button>
              <Text
                size="visa_desktop_headers_h3"
                as="p"
                className="w-[90%] leading-[105%] !text-dark-0 max-[1440px]:w-full max-[1440px]:text-[48px] max-[1050px]:w-full"
              >
                <>
                  Purchase
                  <br />
                  OPN Tokens
                </>
              </Text>
            </div>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="w-[90%] leading-[140%] !text-dark-2 max-[1440px]:w-full max-[1050px]:w-full max-[1050px]:mb-2 max-[550px]:text-sm max-[550px]:mb-2"
            >
              Our token&#39;s minting journey spans 500 days, ensuring a steady
              and controlled release into the market. This gradual approach
              helps maintain price stability and prevents market manipulation.
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-[60px] self-center max-[1050px]:self-stretch max-[550px]:gap-[30px]">
            <div className="flex flex-col items-end gap-6">
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading as="h2">You will pay</Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[70px] pl-[26px] pr-3 text-[28px]">
                  <input type="text" name="Payment Input" placeholder="$ 100" />
                  <div className="flex gap-4 border border-solid bg-white pr-[40px] pl-[20px] py-[5px] rounded-[30px]">
                    <img className="h-[32px] w-[32px]" src="images/img_ellipse_362.png" alt="Ellipse 362" loading="lazy" />
                    USD
                  </div>
                </label>
              </div>
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading as="h3">You will get</Heading>
                <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[70px] pl-[26px] pr-3 text-[28px]">
                  <input type="text" name="Token Input" placeholder="OPN 1250" />
                  <div className="flex gap-4 border border-solid bg-white pr-[40px] pl-[20px] py-[5px] rounded-[30px]">
                    <img className="h-[32px] w-[32px]" src="images/img_ellipse_362_26x32.png" alt="Ellipse 362" loading="lazy" />
                    OPN
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-end gap-6 w-full">
                <button class="gap-[34px] py-3 font-medium white capitalize w-[90%] bg-[#2573C0] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium rounded-[26px] px-3 py-2 text-xl relative" style={{color: "white"}}>
                  Mint
                  <div class="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[10px]">
                    <img class="h-[18px] w-[18px]" src="images/img_arrowleft_blue_800.svg" alt="Arrow Left" loading="lazy" />
                  </div>
                </button>
                <div className="flex justify-center w-[90%] items-center gap-2.5">
                  <h5 class="text-dark-0 font-outfit font-bold capitalize text-xl">Connect wallet</h5>
                  <button class="w-[36px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium text-sm px-2 py-2 rounded-3xl max-w-64" style={{backgroundColor: "black", padding: "12px"}}>
                    <img src="images/img_arrowleft_white_0.svg" alt="testImg" loading="lazy" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Img } from "../ImgMint/index";
import { Text } from "../Text/index";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex bg-dark-0 rounded-[28px]`}
    >
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-9 self-stretch">
          <div className="mx-auto mt-9 flex w-full max-w-[1428px] items-center justify-between gap-5 self-stretch max-[1440px]:px-5 max-[1050px]:flex-col max-[1050px]:px-5">
            <Img
              src="images/img_footer_logo.png"
              alt="Footer Logo"
              className="h-[52px] w-[248px] object-contain"
            />
            <div className="flex w-[34%] justify-between gap-5 max-[1050px]:w-full max-[550px]:flex-col max-[550px]:items-center">
              <div className="flex flex-wrap gap-3">
                <Text as="p" className="text-white-0 opacity-50">
                  Email:
                </Text>
                <Text as="p" className="!text-white-0">
                  reach@megavrse.xyz
                </Text>
              </div>
              <div className="flex w-[32%] items-center justify-center gap-3 max-[550px]:items-center max-[550px]:w-1/2">
                <Text as="p" className="text-white-0 opacity-50">
                  Social:
                </Text>
                <div className="flex flex-1 items-center justify-center gap-5">
                  <Img
                    src="images/img_info.svg"
                    alt="Info Icon"
                    className="h-[18px] w-[18px]"
                  />
                  <Img
                    src="images/img_link.svg"
                    alt="Link Icon"
                    className="h-[20px]"
                  />
                  <Img
                    src="images/img_airplane.svg"
                    alt="Airplane Icon"
                    className="h-[16px] w-[16px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full self-stretch bg-white-a700_26" />
        </div>
        <Text
          size="iopn_desktop_body_text_16"
          as="p"
          className="mb-6 !text-white-3"
        >
          ©2024 IOPn. All right reserved
        </Text>
      </div>
    </footer>
  );
}

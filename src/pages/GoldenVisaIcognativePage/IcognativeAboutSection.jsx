import { Img } from '../../components/ImgMint/index';
import { Text } from '../../components/Text/index';
import React from 'react';

export default function IcognativeAboutSection() {
  return (
    <>
      <div className="mb-1 mt-[118px] flex flex-col items-center" id="iCognative">
        <div className="container-xs flex flex-col gap-[50px] max-[1440px]:px-5 max-[1050px]:px-5">
          <div className="mx-auto flex flex-1 flex-col gap-4 relative">
            <div className="flex gap-4 max-[1050px]:flex-col">
              <Img
                src="/images/img_Icognative_About.png"
                alt="Cta Image"
                className="h-[300px] md:h-[500px] w-[50%] rounded-[12px] max-[1050px]:w-full"
              />
              <div className="flex flex-1 flex-col items-start justify-start gap-20 rounded-[12px] border border-solid border-gray-300 bg-white-0 py-16 pl-16 pr-14 shadow-xs max-[1440px]:gap-20 max-[1440px]:py-12 max-[1440px]:pl-8 max-[1050px]:gap-[60px] max-[1050px]:self-stretch max-[1050px]:p-5 max-[550px]:gap-10 max-[550px]:p-4">
                <div className="flex flex-col gap-5 self-stretch">
                  <div className="flex flex-col items-start gap-[30px]">
                    <Text
                      size="visa_desktop_headers_h2"
                      as="p"
                      className="w-full leading-[105%] text-3xl md:text-5xl">
                      About iCognative
                    </Text>
                  </div>
                  <Text
                    size="iopn_desktop_body_text_20"
                    as="p"
                    className="leading-[140%] !text-dark-1 max-[550px]:text-[14px]">
                    iCognative serves as the Cognitive pillar of the IOPn Web3
                    Ecosystem, focusing on leveraging artificial intelligence
                    and machine learning technologies to enhance decision-making
                    processes and data analysis within the network.
                  </Text>
                </div>
                <button class="self-stretch capitalize w-full md:w-fit  white flex flex-row items-center text-[#000] cursor-pointer whitespace-nowrap rounded-[26px] px-3 py-2 text-md justify-between md:justify-start gap-0 md:gap-[34px]">
                  <div className="flex-1 text-center">Learn more</div>
                  <div class="flex h-[28px] w-[28px] items-center justify-center rounded-[50%] bg-black-0">
                    <img
                      class="h-[10px] w-[10px]"
                      src="/images/img_arrowleft_white_0.svg"
                      alt="Arrow Left"
                      loading="lazy"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

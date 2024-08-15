import { Img } from "../ImgMint/index";
import { Heading } from "../Heading/index";
import React from "react";

export default function InvestmentProfile({
  investmentImage = "images/img_investment_sele.svg",
  investmentText = "Investment Potential",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] max-[1050px]:w-full gap-8 p-6 max-[550px]:p-4 bg-light_base rounded-[16px] max-[1050px]:flex-row max-[550px]:flex-row`}
    >
      <Img
        src={investmentImage}
        alt="Investment Image"
        className="h-[32px] w-[32px]"
      />
      <Heading
        size="visa_desktop_headers_h6"
        as="p"
        className="w-full leading-[130%]"
      >
        {investmentText}
      </Heading>
    </div>
  );
}

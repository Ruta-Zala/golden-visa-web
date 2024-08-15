import { Heading } from "../HeadingMint/index";
import { Img } from "../ImgMint/index";
import React from "react";

export default function ChainProfile({
  chainImage = "images/img_ethereum_circle.svg",
  chainLabel = "Chain ",
  chainName = "Ethereum",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center gap-6 p-6 max-[550px]:p-4 border-gray-300 border border-solid bg-white-0 flex-1 rounded-[16px]`}
    >
      <Img src={chainImage} alt="Chain Image" className="h-[48px] w-[48px]" />
      <div className="flex flex-1 flex-col items-start gap-2">
        <Heading as="p" className="!text-grey">
          {chainLabel}
        </Heading>
        <Heading size="visa_desktop_headers_h5" as="p">
          {chainName}
        </Heading>
      </div>
    </div>
  );
}

import { Heading } from "../HeadingGenz/index";
import { Img } from "../ImgGenz/index";
import React from "react";

export default function UserProfile({
  userImage = "images/img_passport_streamline_core.svg",
  visaDurationLabel = "Visa Duration",
  visaDurationText = "Flexible options: 10 years UAE Golden VISA",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] max-[1050px]:w-full gap-20 px-12 py-[46px] max-[1440px]:gap-20 max-[1050px]:gap-[60px] max-[1050px]:p-5 max-[550px]:gap-10 max-[550px]:p-4 border-blue-900_1e border border-solid bg-gradient shadow-xs rounded-[20px]`}
      style={{background: "white"}}
    >
      <Img
        src={userImage}
        alt="Passport Image"
        className="h-[100px] w-[100px] max-[1050px]:h-[80px]"
      />
      <div className="flex flex-col items-start gap-4 self-stretch">
        <Heading as="p" className="!text-dark-1">
          {visaDurationLabel}
        </Heading>
        <Heading
          size="visa_desktop_headers_h5"
          as="p"
          className="w-full leading-[120%] !text-dark-0"
        >
          {visaDurationText}
        </Heading>
      </div>
    </div>
  );
}

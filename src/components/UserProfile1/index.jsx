import { Heading } from "../HeadingGenz/index";
import { Img } from "../ImgGenz/index";
import React from "react";

export default function UserProfile1({
  userImage = "images/img_upload.svg",
  entryText = "Entry",
  opnCounterText = "50,000 OPN",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center w-[32%] max-[1050px]:w-full gap-6 p-6 max-[550px]:p-4 border-gray-300 border border-solid bg-white-0 rounded-[16px]`}
    >
      <Img src={userImage} alt="Image Upload" className="h-[48px] w-[48px]" />
      <div className="flex flex-1 flex-col items-start gap-2">
        <Heading size="visa_desktop_headers_subheader" as="p">
          {entryText}
        </Heading>
        <Heading
          size="visa_desktop_headers_h5"
          as="p"
          className="!text-dark-0 max-[550px]:text-lg"
        >
          {opnCounterText}
        </Heading>
      </div>
    </div>
  );
}

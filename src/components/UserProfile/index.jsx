import { Heading } from "../HeadingMint/index";
import React from "react";

export default function UserProfile({
  userName = "Name",
  userIOPn = "IOPn",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-[32%] max-[550px]:w-full`}
    >
      <div className="flex w-full flex-col items-start">
        <div className="flex self-stretch border-l-2 border-solid border-gray-300 px-5">
          <Heading as="p" className="mb-[46px] !text-grey">
            {userName}
          </Heading>
        </div>
        <Heading
          size="visa_desktop_headers_h4"
          as="p"
          className="relative ml-5 mt-[-42px] max-[550px]:text-[24px]"
        >
          {userIOPn}
        </Heading>
      </div>
    </div>
  );
}

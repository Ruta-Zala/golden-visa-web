import React from "react";
import Avatar from "../../assets/Avatar.png";
import copySvg from "../../assets/copy.svg";
import { Img } from "../../components/Img";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col gap-y-4 h-[875px] w-[329px] p-8">
        <div>
          <Img src={Avatar} alt="Logo Container" className="object-contain" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#070B0F] text-2xl font-medium">John Doe</h1>
          <p className="text-[#94A3B8] text-base font-extralight">
            Joined August 2024
          </p>
        </div>
        <div>
          <hr />
          <p className="text-[#94A3B8] text-base font-light">Bio</p>
          <p className="text-base font-extralight">
            Crypto enthusiast. OPN to the moon! :rocket: Passionate about blockchain &
            its potential. Investing in OPN for a future.
          </p>
          <hr />
          <p className="text-[#94A3B8] text-base font-light">Email</p>
          <p className="text-base font-extralight">johndoe@gmail.com</p>
          <p className="text-[#94A3B8] text-base font-light">Phone</p>
          <p className="text-base font-extralight">(123) 456-78-90</p>
          <hr />
          <p className="text-[#94A3B8] text-base font-light">Wallet address</p>
          <div>
            <p className="text-base font-extralight truncate w-64">
              0x1234567890ABCDEF1234567890ABCDEF1234567890
            </p>
            <img src={copySvg} />
          </div>
          <div className="mt-6 flex space-x-3 justify-center">
          {/* Add social media icons here */}
        </div>
        <div className="mt-6 text-center">
          <button className="text-red-500">Log Out</button>
        </div>
        </div>
      </div>
    </>
  );
}
import React from 'react';
import { Img } from '../../components/Img';
import Avatar from '../../assets/Avatar.png';

export default function ProfileSummary() {
  return (
    <div className="flex flex-col items-start gap-4 mt-4">
      <div className="flex">
        <Img
          src={Avatar}
          alt="Logo Container"
          className="object-contain h-[80px] w-[80px] md:h-[100px] md:w-[100px] mr-4"
        />
        <div className="text-left">
          <h1 className="text-[#070B0F] text-2xl font-medium">John Doe</h1>
          <p className="text-[#94A3B8] text-base font-extralight">
            Joined August 2024
          </p>
        </div>
      </div>
      <p className="text-base font-extralight">
        Crypto enthusiast. OPN to the moon! 🚀 Passionate about blockchain & its
        potential. Investing in OPN for a future.
      </p>
    </div>
  );
}

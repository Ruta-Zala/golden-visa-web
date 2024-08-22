import React from 'react';
import copySvg from '../../assets/copy.svg';
import TwitterLogo from '../../assets/profile/twitter-logo.svg';
import FacebookLogo from '../../assets/profile/facebook-logo.svg';
import InstagramLogo from '../../assets/profile/instagram-logo.svg';
import LinkedinLogo from '../../assets/profile/linkedin-logo.svg';
import WhatsappLogo from '../../assets/profile/whatsapp-logo.svg';
import { Img } from '../../components/Img';

const socialMediaLogos = [
  { src: TwitterLogo, alt: 'Twitter Logo' },
  { src: FacebookLogo, alt: 'Facebook Logo' },
  { src: InstagramLogo, alt: 'Instagram Logo' },
  { src: LinkedinLogo, alt: 'LinkedIn Logo' },
  { src: WhatsappLogo, alt: 'WhatsApp Logo' },
];

export default function ProfileDetails() {
  return (
    <>
      <div className="flex flex-col gap-y-4 h-full w-full ">
        <div>
          <p className="text-[#94A3B8] text-base font-light">Email</p>
          <p className="text-base font-extralight">johndoe@gmail.com</p>
          <p className="text-[#94A3B8] text-base font-light mt-4">Phone</p>
          <p className="text-base font-extralight">(123) 456-78-90</p>
          <hr className="my-4" />
          <p className="text-[#94A3B8] text-base font-light">Wallet address</p>
          <div className="flex flex-row gap-2">
            <p className="text-base font-extralight truncate w-64">
              0x1234567890ABCDEF1234567890ABCDEF1234567890
            </p>
            <img src={copySvg} />
          </div>
          <hr className="my-5" />
          <div className="flex flex-row gap-4">
            {socialMediaLogos.map((logo, index) => (
              <Img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="object-contain h-10 w-10"
              />
            ))}
          </div>
          <hr className="my-5" />
          <button className="text-[#E11D48] font-medium">Log Out</button>
        </div>
      </div>
    </>
  );
}

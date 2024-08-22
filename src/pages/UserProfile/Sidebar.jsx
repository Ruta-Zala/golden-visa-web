import React from 'react';
import Avatar from '../../assets/Avatar.png';
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

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col gap-y-4 h-[875px] w-[329px] ">
        <div className="flex sm:flex-col sm:gap-0 gap-2 flex-row">
          <div>
            <Img
              src={Avatar}
              alt="Logo Container"
              className="object-contain h-[80px] w-[80px] sm:h-[80px] sm:w-[80px] md:h-[150px] md:w-[100px] lg:h-[100px] xl:w-[200px] xl:h-[200px] "
            />
          </div>
          <div className="flex flex-col sm:font-normal mt-4">
            <h1 className="text-[#070B0F] text-2xl font-medium">John Doe</h1>
            <p className="text-[#94A3B8] text-base font-extralight sm:font-normal">
              Joined August 2024
            </p>
          </div>
        </div>

        <div>
          <hr className="my-4" />
          <p className="text-[#94A3B8] font-light text-lg">Bio</p>
          <p className="text-base font-extralight">
            Crypto enthusiast. OPN to the moon! 🚀 Passionate about blockchain &
            its potential. Investing in OPN for a future.
          </p>
          <hr className="my-4" />
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

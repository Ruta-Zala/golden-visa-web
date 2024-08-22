import earth from "../../assets/earth.svg";
import telegram from "../../assets/icons8-telegram-96.svg";
import insta from "../../assets/icons8-instagram-26.svg";
import x from "../../assets/icons8-twitterx-32.svg";
import linkedin from "../../assets/linkedin.png";
import medium from "../../assets/icon-medium.svg";
import logo from "../../assets/header-logo.png";
import { handleScrollToTop } from "../../utils/helper";
const Footer = ({className = ""}) => {
  return (
    <div className={`flex flex-col items-center p-0 gap-4 mt-28 mb-5 w-full max-w-screen-2xl mx-auto px-4 ${className}`}>
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 w-full ">
        <div className="w-full md:w-2/4">
          <img
            src={earth}
            alt="Earth"
            className="w-full object-cover h-[340px] md:h-[470px] rounded-xl"
          />
        </div>
        <div className="w-full md:w-2/4">
          <div className="flex flex-col items-start p-[24px] md:p-12 w-full bg-[#E2E8F0] rounded-2xl">
            <div className="tagline">
              <p className="inline-block px-3 py-2 bg-[#070b0f] text-white-0 rounded-2xl text-sm mb-2.5 font-extralight">
                Get in touch with us
              </p>
            </div>
            <div className="flex flex-col items-start p-0 gap-4 w-full">
              <h1 className="w-full text-4xl font-medium text-[#08122A] ">
                Let&apos;s Connect On-Chain
              </h1>
              <p className="w-full max-w-2xl text-lg opacity-50 text-[#08122A]">
                Building the future of Web3 together. We&apos;d love to hear
                from developers, creators, and anyone passionate about a more
                open internet. Feel free to reach out with any questions,
                feedback, or collaboration ideas.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-5 md:grid-cols-5 items-center gap-4 w-full mt-6">
            <a
              href="https://www.linkedin.com/company/iopn"
              target="_blank"
              className="linkedin social-item"
            >
              <img src={linkedin} alt="Discord" className="w-32 h-32" />
            </a>
            <a
              href="https://x.com/IOPn_io"
              target="_blank"
              className="X social-item"
            >
              <img src={x} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/internet_of_people_"
              target="_blank"
              className="insta social-item"
            >
              <img src={insta} alt="Instagram" />
            </a>
            <a className="telegram social-item">
              <img src={telegram} alt="Telegram" />
            </a>
            <a className="medium social-item">
              <img src={medium} alt="Medium" />
            </a>
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center p-0 bg-[#e2e8f0] rounded-2xl w-full">
        <div className="flex flex-col md:flex-row justify-between p-9 w-full border-b border-[#08122A26]">
          <div className="flex flex-1 flex-col items-start p-0">
            <div className="logoimg mb-6">
              <img src={logo} alt="" />
            </div>
            <p className="max-w-2xl w-full text-base font-normal opacity-50 text-[#08122a]">
              Embrace the future of Web3 with IOPn. Whether you&apos;re looking
              to innovate, participate to life changing opportunities, or simply
              explore, our ecosystem is where your digital aspirations become
              reality.
            </p>
          </div>
          <div className="flex flex-2 flex-col lg:flex-row justify-end items-center gap-4 h-fit mt-2">
            <a href="/#/goldenvisa" onClick={handleScrollToTop}>
              <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6] ">
                UAE Golden Visa
              </span>
            </a>
            <a href="/#/OPNChain">
              <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6]">
                OPNChain
              </span>
            </a>
            <a href="/#/opntoken" onClick={handleScrollToTop}>
              <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6]">
                OPN Token
              </span>
            </a>
            {/* <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6]">
              GenZ Talent Program
            </span> */}
            {/* <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6]">
              OPNVerse
            </span> */}
            {/* <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6]">
              iCognative
            </span> */}
            <span>
              <button className="font-medium flex flex-row justify-center items-center gap-4 border border-[#08122a] rounded-3xl transition-all ease-linear duration-100 px-1 ps-5 py-1 group hover:bg-[#003366] hover:text-white-0">
                Join Now{" "}
                <div className="flex flex-row justify-center items-center rotate-[-45deg] text-white-0 bg-[#08122a] rounded-[50%] p-0 w-8 h-8 group-hover:bg-white-0 group-hover:text-[#08122a]">
                  →
                </div>
              </button>
            </span>
          </div>
        </div>
        <p className="text-sm py-5 opacity-50 text-[#08122a]">
          ©2024 IOPn. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;

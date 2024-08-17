import { IoClose, IoMenu } from "react-icons/io5";
import { Button } from "../Button/index";
import { Img } from "../ImgMint/index";
import { Text } from "../Text/index";
import React, { useState } from "react";
import { handleScrollToSection } from "../../utils/helper";

export default function Header({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center gap-5 p-2 bg-light_base rounded-[34px] bg-white-0`}
    >
      <Img
        src="/src/assets/header-logo.jpeg"
        alt="Logo Container"
        className="h-[32px] w-[18%] object-contain"
      />
      <button className="flex lg:hidden" onClick={toggleMenu}>
        <IoMenu className="text-3xl text-gray-500 " />
      </button>
      <ul className="flex justify-center gap-10 max-[1050px]:hidden max-[550px]:hidden pr-8">
        <li>
          <a href="/">
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">Home</span>
          </a>
        </li>
        <li>
          <a onClick={(event) => handleScrollToSection(event, "benefits")}>
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">Benefits</span>
          </a>
        </li>
        <li onClick={(event) => handleScrollToSection(event, "howItWroks")}>
          <a>            
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">How it works</span>
          </a>
        </li>
        <li onClick={(event) => handleScrollToSection(event, "refferralProgram")}>
          <a>
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">Perks</span>
          </a>
        </li>
        <li onClick={(event) => handleScrollToSection(event, "mintToken")}>
          <a>
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">Mint Token</span>
          </a>
        </li>
      </ul>
      {/* <Button
        variant="fill"
        shape="round"
        rightIcon={
          <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
            <Img
              src="images/img_arrowleft.svg"
              alt="Arrow Left"
              className="h-[18px] w-[18px]"
            />
          </div>
        }
        className="min-w-[156px] gap-4 font-medium capitalize max-[1050px]:hidden max-[550px]:hidden"
      >
        Contact
      </Button> */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex w-64 shadow-xl flex-col bg-white-0 p-3 transform transition-transform duration-300">
          <div className="flex justify-between items-center bg-white-0">
            {/* <Img
              src="images/img_header_logo.png"
              alt="Header Logo"
              className="h-12 w-48 object-contain"
            /> */}
            <Img
              src="/src/assets/header-logo.jpeg"
              alt="Logo Container"
              className="h-[32px] w-[18%] object-contain"
            />
            <button onClick={toggleMenu}>
              <IoClose className="text-3xl text-gray-500" />
            </button>
          </div>
          <ul className="flex flex-col items-start gap-4 mt-4">
            <li>
              <a href="/">
                <Text as="p" className="!text-accent-black">
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a onClick={(event) => handleScrollToSection(event, "benefits")}>
                <Text as="p" className="!text-accent-black">
                  Benefits
                </Text>
              </a>
            </li>
            <li>
              <a>
                <Text as="p" className="!text-accent-black">
                  How it works
                </Text>
              </a>
            </li>
            <li>
              <a>
                <Text as="p" className="!text-accent-black">
                  Perks
                </Text>
              </a>
            </li>
            <li>
              <a >
                <Text as="p" className="!text-accent-black">
                  Mint Token
                </Text>
              </a>
            </li>
            {/* <Button
              color="dark_0"
              variant="fill"
              shape="round"
              rightIcon={
                <div className="flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#ffffff]">
                  <Img
                    src="images/img_arrowleft.svg"
                    alt="Arrow Left"
                    className="h-[18px] w-[18px]"
                  />
                </div>
              }
              className="min-w-[156px] gap-4 capitalize mt-4"
            >
              Contact
            </Button> */}
          </ul>
        </div>
      )}
    </header>
  );
}

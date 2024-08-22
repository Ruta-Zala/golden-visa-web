import { IoClose } from "react-icons/io5";
import Menu from "../../assets/img_arrow_down.svg";
import React, { useState } from "react";
import { handleScrollToSection } from "../../utils/helper";
import headerLogo from "../../assets/header-logo.jpeg";
import { Img } from "../../components/Img";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

export default function Headerprofile({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header
        {...props}
        className={`${props.className} flex justify-between items-center gap-5 p-2 mt-4 mx-8 bg-light_base rounded-[34px] w-[calc[100vw-125px)] bg-[
#F1F5F9]`}
      >
        <a href="/">
          <Img
            src={headerLogo}
            alt="Logo Container"
            className="h-12 w-48 object-contain"
          />
        </a>
        <button className="flex lg:hidden " onClick={toggleMenu}>
          <img src={Menu} alt="" className="h-[8px] rounded sm:w-full mr-4" />
        </button>
        <ul className="flex justify-center gap-10 max-[768px]:hidden max-[550px]:hidden pr-8">
          <li>
            <a onClick={(event) => handleScrollToSection(event, "benefits")}>
              <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">
                Benefits
              </span>
            </a>
          </li>
          <li onClick={(event) => handleScrollToSection(event, "howItWroks")}>
            <a>
              <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">
                How it works
              </span>
            </a>
          </li>
          <li
            onClick={(event) =>
              handleScrollToSection(event, "refferralProgram")
            }
          >
            <a>
              <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">
                Purchase Token
              </span>
            </a>
          </li>
          <li onClick={(event) => handleScrollToSection(event, "mintToken")}>
            <a>
              <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">
                Monthly draw
              </span>
            </a>
          </li>
        </ul>
        <Button
          color="dark_0"
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
        </Button>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex w-64 shadow-xl flex-col bg-white-0 p-3 transform transition-transform duration-300">
            <div className="flex justify-between items-center bg-gray-400">
              <a href="/" className="cursor-pointer">
                <Img
                  src={headerLogo}
                  alt="Logo Container"
                  className="h-12 w-48  object-contain"
                />
              </a>
              <button onClick={toggleMenu}>
                <IoClose className="text-3xl text-gray-500" />
              </button>
            </div>
            <ul className="flex flex-col items-start gap-4 mt-4">
              <li>
                <a
                  onClick={(event) => handleScrollToSection(event, "benefits")}
                >
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
                    Purchase Token
                  </Text>
                </a>
              </li>
              <li>
                <a>
                  <Text as="p" className="!text-accent-black">
                    Monthly draw
                  </Text>
                </a>
              </li>
              <Button
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
              </Button>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

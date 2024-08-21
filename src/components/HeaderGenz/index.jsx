import { IoClose, IoMenu } from "react-icons/io5";
import { Img } from "../ImgMint/index";
import { Text } from "../Text/index";
import React, { useEffect, useRef, useState } from "react";
import { handleScrollToSection } from "../../utils/helper";
import headerLogo from "../../assets/header-logo.jpeg";
import arrowDown from "../../assets/img_arrow_down.svg";

export default function HeaderGenz({
  hideTabs = [],
  isTalentTab,
  isWeb3Tab,
  ...props
}) {
  const menuItems = [
    { href: "/#/goldenvisa", label: "UAE Golden Visa" },
    { href: "/#/OPNChain", label: "OPNChain" },
    { href: "/#/opntoken", label: "OPN Token" },
    { href: "/#/Talent", label: "Web3 Talent Program", hide: isTalentTab },
    {
      href: "/#/Entrepreneur",
      label: "Web3 Entrepreneur Program",
      hide: isWeb3Tab,
    },
    { href: "#", label: "OPNVerse" },
    {
      href: "/#/Icognative",
      label: "iCognative",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropDown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center gap-5 p-2 ps-6 bg-light_base rounded-[34px] bg-white-0`}
    >
      <a href="/" className="cursor-pointer">
        <Img
          src={headerLogo}
          alt="Logo Container"
          className="h-12 w-48 md:w-32 lg:w-48  object-contain"
        />
      </a>
      <button className="flex md:hidden" onClick={toggleMenu}>
        <IoMenu className="text-3xl text-gray-500 " />
      </button>
      <ul className="flex justify-center gap-10 md:gap-5 lg:gap-10 max-[768px]:hidden max-[550px]:hidden pr-8">
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
        <li>
          <a onClick={(event) => handleScrollToSection(event, "participate")}>
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">
              Participate
            </span>
          </a>
        </li>
        {!hideTabs?.includes("Golden draw") && (
          <li>
            <a onClick={(event) => handleScrollToSection(event, "goldenDraw")}>
              <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">
                Golden draw
              </span>
            </a>
          </li>
        )}
        <span
          className="text-md xl:text-lg  tracking-wide text-[#08122a] cursor-pointer flex items-center"
          ref={dropdownRef}
        >
          <img
            src={arrowDown}
            alt="Arrow Down Image"
            className="rounded sm:w-full h-full"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isDropDown}
          />
          {isDropDown && (
            <div className="relative text-left">
              <div
                className="z-10 absolute right-0 w-56 mt-9 origin-top-right rounded-md shadow-lg"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
                style={{ backgroundColor: "white" }}
              >
                <div className="py-1" role="none">
                  {menuItems.map((item, index) =>
                    !item?.hide ? (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 lg:px-5 lg:py-3 text-lg  text-[#08122a] hover:text-blue-500"
                        onClick={(event) => {
                          closeMenu();
                          item?.onClick(event);
                        }}
                      >
                        {item.label}
                      </a>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          )}
        </span>
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
              <a onClick={(event) => handleScrollToSection(event, "benefits")}>
                <Text as="p" className="!text-accent-black">
                  Benefits
                </Text>
              </a>
            </li>
            <li>
              <a
                onClick={(event) => handleScrollToSection(event, "howItWroks")}
              >
                <Text as="p" className="!text-accent-black">
                  How it works
                </Text>
              </a>
            </li>
            <li>
              <a
                onClick={(event) => handleScrollToSection(event, "participate")}
              >
                <Text as="p" className="!text-accent-black">
                  Participate
                </Text>
              </a>
            </li>
            {!hideTabs?.includes("Golden draw") && (
              <li>
                <a
                  onClick={(event) =>
                    handleScrollToSection(event, "goldenDraw")
                  }
                >
                  <Text as="p" className="!text-accent-black">
                    Golden draw
                  </Text>
                </a>
              </li>
            )}
            {menuItems.map((item, index) => (
              <li key={`menu-${index}`}>
                <a
                  href={item.href}
                  onClick={(event) => {
                    closeMenu();
                    item?.onClick(event);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
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

import PropTypes from "prop-types";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Img } from "../Img";
import { Text } from "../Text";
import { Button } from "../Button";
import headerLogo from "../../assets/header-logo.jpeg";

export default function HeaderVisa({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      {...props}
      // className={`${props.className} w-full flex justify-between items-center gap-5 p-2 bg-light_base rounded-[34px]`}
      className={`${props.className} w-full flex justify-between items-center gap-5 p-2 ps-6 bg-white-0 rounded-[34px]`}
    >
      {/* <Img
        src="images/img_header_logo.png"
        alt="Header Logo"
        className="h-12 w-48 object-contain"
      /> */}
      <Img
        src={headerLogo}
        alt="Header Logo"
        className="h-12 w-48 object-contain max-[1050px]:w-28"
      />
      <button className="flex lg:hidden" onClick={toggleMenu}>
        <IoMenu className="text-3xl text-gray-500 " />
      </button>
      <ul className="hidden lg:flex justify-center gap-10 pr-8">
        <li>
          <a href="#">
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">Benefits</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">How it works</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">Mint token</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">Monthly draw</span>
          </a>
        </li>
      </ul>
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
        className="hidden lg:flex min-w-[156px] gap-4 capitalize"
      >
        Contact
      </Button> */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex w-64 shadow-xl flex-col bg-white-0 p-3 transform transition-transform duration-300">
          <div className="flex justify-between items-center">
            <Img
              src="images/img_header_logo.png"
              alt="Header Logo"
              className="h-12 w-48 object-contain"
            />
            <button onClick={toggleMenu}>
              <IoClose className="text-3xl text-gray-500" />
            </button>
          </div>
          <ul className="flex flex-col items-start gap-4 mt-4 pr-8">
            <li>
              <a href="#">
                <Text as="p" className="!text-accent-black">
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-accent-black">
                  Benefits
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-accent-black">
                  How it works
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-accent-black">
                  Mint token
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-accent-black">
                  Monthly draw
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

HeaderVisa.propTypes = {
  className: PropTypes.string,
};

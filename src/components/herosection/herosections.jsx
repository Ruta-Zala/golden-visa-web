import { useState, useRef, useEffect } from "react";
import Partners from "../partners/partners";
import arrowDown from "../../assets/img_arrow_down.svg";
import headerLogo from "../../assets/header-logo.jpeg";
import { Link } from "react-router-dom";
import { handleScrollToTop } from "../../utils/helper";
const Herosections = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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

  return (
    <div className="px-4 py-2.5 max-w-screen-2xl mx-auto">
      <div className="w-full main-hero relative z-0">
        <div className="flex flex-col justify-between items-center w-full h-[785px] relative">
          <nav className="w-full flex justify-between items-center px-2 py-2 lg:py-0">
            <div className="flex justify-start lg:justify-start xl:justify-center items-center w-48">
              <img src={headerLogo} />
              {/* <svg
                className="w-24 lg:w-48 h-10"
                viewBox="0 0 192 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.86102e-05 3.99905L11.9961 3.99905V2.36034e-05L2.86102e-05 2.36034e-05V3.99905Z"
                  fill="#08122A"
                />
                <path
                  d="M7.99829 7.99808H3.99927V24.0019H7.99829V7.99808Z"
                  fill="#08122A"
                />
                <path
                  d="M2.86102e-05 32H11.9961V28.0009H2.86102e-05V32Z"
                  fill="#08122A"
                />
                <path
                  d="M50.2178 22.9516C48.8175 20.991 48.0006 18.5947 48.0006 16.0039C48.0006 9.37514 53.3763 4.00681 59.9967 4.00681C62.5873 4.00681 64.9834 4.83151 66.9438 6.22416L69.8067 3.36105C67.0994 1.25262 63.692 3.8147e-06 59.9967 3.8147e-06C51.1591 3.8147e-06 43.9941 7.16557 43.9941 16.0039C43.9941 19.6995 45.2466 23.1072 47.3549 25.8147L50.2178 22.9516Z"
                  fill="#08122A"
                />
                <path
                  d="M69.7762 9.04835C71.1765 11.009 71.9933 13.4053 71.9933 15.9961C71.9933 22.6248 66.6177 27.9931 59.9973 27.9931C57.4067 27.9931 55.0106 27.1684 53.0501 25.7758L50.1873 28.6389C52.8945 30.7473 56.302 31.9999 59.9973 31.9999C68.8348 31.9999 75.9998 24.8344 75.9998 15.9961C75.9998 12.3005 74.7473 8.89274 72.639 6.18523L69.7762 9.04835Z"
                  fill="#08122A"
                />
                <path
                  d="M119.999 3.8147e-06H103.996V3.99903H119.999C124.418 3.99903 127.996 7.57792 127.996 11.9971C127.996 16.4162 124.418 19.9951 119.999 19.9951H116V23.9941H119.999C126.627 23.9941 131.995 18.618 131.995 11.9971C131.995 5.37612 126.627 3.8147e-06 119.999 3.8147e-06Z"
                  fill="#08122A"
                />
                <path
                  d="M111.995 7.99809H107.996V32H111.995V7.99809Z"
                  fill="#08122A"
                />
                <path
                  d="M164.001 7.99807V11.9971H168V32H171.999V7.99807H164.001Z"
                  fill="#08122A"
                />
                <path
                  d="M192 20.0029C192 13.3742 186.624 8.00587 180.004 8.00587C173.383 8.00587 168.008 13.382 168.008 20.0029H172.006C172.006 15.5838 175.585 12.0049 180.004 12.0049C184.423 12.0049 188.001 15.5838 188.001 20.0029V32H192V20.0029Z"
                  fill="#08122A"
                />
              </svg> */}
            </div>
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-black-0 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex items-center justify-between gap-4">
              <div className="flex flex-row items-center px-3 xl:px-6 gap-3 xl:gap-12 bg-[#f1f5f9] rounded-full py-3">
                <a href="/#/goldenvisa">
                  <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">
                    UAE Golden Visa
                  </span>
                </a>
                <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">
                  OPNChain
                </span>
                <a href="/#/opntoken" onClick={handleScrollToTop}>
                  <span className="text-lg tracking-wide text-[#08122a] cursor-pointer">
                    OPN Token
                  </span>
                </a>
                <span
                  className="text-lg tracking-wide text-[#08122a] cursor-pointer"
                  ref={dropdownRef}
                >
                  <img
                    src={arrowDown}
                    alt="Arrow Down Image"
                    className="h-[8px] rounded sm:w-full"
                    onClick={toggleDropdown}
                    aria-haspopup="true"
                    aria-expanded={isDropDown}
                  />
                  {isDropDown && (
                    <div className="relative text-left">
                      <div
                        className="z-10 absolute right-0 w-56 mt-8 origin-top-right rounded-md shadow-lg"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="py-1" role="none">
                          <a
                            href="/#/GenzTalentProgram"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Web3 Talent Program
                          </a>
                          <a
                            href="/#/Web3Entrepreneur"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Web3 Entrepreneur Program
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            OPNVerse
                          </a>
                          <a
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            iCognative
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </span>
              </div>
              <a href="/#/opntoken">
                <span>
                  <button className="flex flex-row justify-center items-center ps-8 py-2 pr-2 gap-4 bg-gradient-to-r from-[#3983cc] to-[#0056b8] rounded-full border-none text-white-0">
                    Mint OPN{" "}
                    <div className="flex flex-row justify-center items-center rotate-[-45deg] p-0 gap-2 w-8 h-8 text-[#2573C0] bg-[#ffffff] rounded-full">
                      →
                    </div>
                  </button>
                </span>
              </a>
            </div>

            <div
              className={`${
                isOpen ? "off-canvas-menu open" : "off-canvas-menu"
              } lg:flex lg:flex-col lg:items-center lg:w-auto`}
              id="menu"
            >
              <div className="off-canvas-header">
                {/* Update path to your logo */}
                <svg
                  className="w-32 h-10"
                  viewBox="0 0 192 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.86102e-05 3.99905L11.9961 3.99905V2.36034e-05L2.86102e-05 2.36034e-05V3.99905Z"
                    fill="#08122A"
                  />
                  <path
                    d="M7.99829 7.99808H3.99927V24.0019H7.99829V7.99808Z"
                    fill="#08122A"
                  />
                  <path
                    d="M2.86102e-05 32H11.9961V28.0009H2.86102e-05V32Z"
                    fill="#08122A"
                  />
                  <path
                    d="M50.2178 22.9516C48.8175 20.991 48.0006 18.5947 48.0006 16.0039C48.0006 9.37514 53.3763 4.00681 59.9967 4.00681C62.5873 4.00681 64.9834 4.83151 66.9438 6.22416L69.8067 3.36105C67.0994 1.25262 63.692 3.8147e-06 59.9967 3.8147e-06C51.1591 3.8147e-06 43.9941 7.16557 43.9941 16.0039C43.9941 19.6995 45.2466 23.1072 47.3549 25.8147L50.2178 22.9516Z"
                    fill="#08122A"
                  />
                  <path
                    d="M69.7762 9.04835C71.1765 11.009 71.9933 13.4053 71.9933 15.9961C71.9933 22.6248 66.6177 27.9931 59.9973 27.9931C57.4067 27.9931 55.0106 27.1684 53.0501 25.7758L50.1873 28.6389C52.8945 30.7473 56.302 31.9999 59.9973 31.9999C68.8348 31.9999 75.9998 24.8344 75.9998 15.9961C75.9998 12.3005 74.7473 8.89274 72.639 6.18523L69.7762 9.04835Z"
                    fill="#08122A"
                  />
                  <path
                    d="M119.999 3.8147e-06H103.996V3.99903H119.999C124.418 3.99903 127.996 7.57792 127.996 11.9971C127.996 16.4162 124.418 19.9951 119.999 19.9951H116V23.9941H119.999C126.627 23.9941 131.995 18.618 131.995 11.9971C131.995 5.37612 126.627 3.8147e-06 119.999 3.8147e-06Z"
                    fill="#08122A"
                  />
                  <path
                    d="M111.995 7.99809H107.996V32H111.995V7.99809Z"
                    fill="#08122A"
                  />
                  <path
                    d="M164.001 7.99807V11.9971H168V32H171.999V7.99807H164.001Z"
                    fill="#08122A"
                  />
                  <path
                    d="M192 20.0029C192 13.3742 186.624 8.00587 180.004 8.00587C173.383 8.00587 168.008 13.382 168.008 20.0029H172.006C172.006 15.5838 175.585 12.0049 180.004 12.0049C184.423 12.0049 188.001 15.5838 188.001 20.0029V32H192V20.0029Z"
                    fill="#08122A"
                  />
                </svg>
                <button onClick={closeMenu} className="close-button">
                  &times;
                </button>
              </div>
              <div className="flex flex-col lg:flex-row lg:ml-auto lg:mr-4">
                <a
                  href="#"
                  className="block px-4 py-2 lg:px-5 lg:py-3 text-lg text-[#08122a] hover:text-blue-500"
                  onClick={closeMenu}
                >
                  UAE Golden Visa
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 lg:px-5 lg:py-3 text-lg text-[#08122a] hover:text-blue-500"
                  onClick={closeMenu}
                >
                  OPNChain
                </a>
                <a
                  href="/#/opntoken"
                  className="block px-4 py-2 lg:px-5 lg:py-3 text-lg text-[#08122a] hover:text-blue-500"
                  onClick={() => {
                    closeMenu();
                    handleScrollToTop();
                  }}
                >
                  OPN Token
                </a>
                <a
                  href="/#/GenzTalentProgram"
                  className="block px-4 py-2 lg:px-5 lg:py-3 text-lg text-[#08122a] hover:text-blue-500"
                  onClick={closeMenu}
                >
                  Web3 Talent Program
                </a>
                <a
                  href="/#/Web3Entrepreneur"
                  className="block px-4 py-2 lg:px-5 lg:py-3 text-lg text-[#08122a] hover:text-blue-500"
                  onClick={closeMenu}
                >
                  Web3 Entrepreneur Program
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 lg:px-5 lg:py-3 text-lg text-[#08122a] hover:text-blue-500"
                  onClick={closeMenu}
                >
                  OPNVerse
                </a>
                <a
                  href="/#/Icognative"
                  className="block px-4 py-2 lg:px-5 lg:py-3 text-lg text-[#08122a] hover:text-blue-500"
                  onClick={closeMenu}
                >
                  iCognative
                </a>
              </div>
              <div className="flex justify-center lg:justify-end">
                <button className="flex items-center px-4 py-2 lg:py-3 gap-2.5 bg-gradient-to-r from-[#3983cc] to-[#0056b8] rounded-full border-none text-white-0">
                  Mint OPN
                  <div className="flex justify-center items-center p-0 gap-2 w-8 h-8 text-black-0 bg-[#ffffff] rounded-full">
                    →
                  </div>
                </button>
              </div>
            </div>
            <div
              className={`${isOpen ? "overlay show" : "overlay"}`}
              onClick={closeMenu}
            ></div>
          </nav>
          <div className="w-full flex flex-col md:flex-row justify-between items-center relative">
            <div className="flex flex-col justify-end items-start bg-white-0 rounded-2xl mb-3 md:mb-0 mx-2 md:ms-4">
              <div className="flex flex-col items-start gap-5 p-[24px] md:p-12">
                <p className="text-xl font-medium text-[#08122a] opacity-40">
                  An integrated web3 ecosystem
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium">
                  Decentralized.
                  <br />
                  <span className="bg-clip-text text-3xl md:text-4xl lg:text-6xl font-medium text-transparent bg-gradient-to-b from-[#9ba6c1] via-[#314168] to-[#314168]">
                    Cognitive.
                  </span>
                  <br />
                  Spatial.
                </h1>
                <button className="box-border font-medium mt-5 flex flex-row justify-center items-center py-2 ps-8 pr-2 gap-4 border border-[#08122a] rounded-full text-[#08122a] cursor-pointer bg-white-0">
                  Roadmap
                  <div className="flex flex-row justify-center items-center p-0 gap-2.5 w-8 h-8 text-white-0 bg-[#08122a] rounded-full rotate-[-45deg]">
                    →
                  </div>
                </button>
              </div>
            </div>
            <div className="max-w-xl w-full h-full hidden md:flex justify-end items-end absolute right-0 -bottom-[15px]">
              <div className="relative px-4 py-3 bg-gradient-to-r-blue rounded-xl sm:w-[9.4rem] md:w-38 md:h-[17rem] lg:w-52 lg:h-[17rem] xl:w-[18.8rem] 2xl:w-80 xl:h-[17rem] flex justify-between items-center flex-col">
                <div>
                  {" "}
                  <h1 className="text-2xl font-medium leading-6 text-white-0">
                    Check out the UAE Golden Visa Portal
                  </h1>
                </div>
                <Link
                  to="/goldenvisa"
                  onClick={handleScrollToTop}
                  className="flex w-full justify-end items-center cursor-pointer"
                >
                  <div className="flex justify-center items-center w-10 h-10 rounded-[50%] bg-white-0 text-3xl transform -rotate-45">
                    →
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex md:hidden justify-center items-center pt-5">
        <div className="relative px-4 py-3 bg-gradient-to-r-blue rounded-xl md:w-80 h-60 flex justify-between items-center flex-col w-full">
          <div>
            {" "}
            <h1 className="text-2xl font-medium leading-6 text-white-0">
              Check out the UAE Golden Visa Portal
            </h1>
          </div>
          <Link
            to="/goldenvisa"
            onClick={handleScrollToTop}
            className="flex w-full justify-end items-center cursor-pointer"
          >
            <div className="flex justify-center items-center w-10 h-10 rounded-[50%] bg-white-0 text-3xl transform -rotate-45">
              →
            </div>
          </Link>
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default Herosections;

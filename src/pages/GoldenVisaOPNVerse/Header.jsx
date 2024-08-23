import { useState } from 'react';
import headerLogo from '../../assets/header-logo.jpeg'
import arrowDown from "../../assets/img_arrow_down.svg";
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Header({ menuItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropDown, setIsDropDown] = useState(false);

    let mainMenuItems = menuItems.slice(0, 3);
    let remainingMenuItems = menuItems.slice(3);

    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropDown(false);
        }
    };

    const toggleDropdown = () => {
        setIsDropDown((prev) => !prev);
    };


    return (<nav className="w-full flex justify-between items-center px-2 py-2 lg:py-0 bg-white-0 lg:bg-transparent h-[70px] lg:h-[60px]">
        <div className="flex justify-start lg:justify-start xl:justify-center items-center w-[25%] lg:w-[15%]">
            <a href="/" className="cursor-pointer">
                <img src={headerLogo} />
            </a>
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
        <div className="hidden lg:flex items-center justify-between gap-3 w-[49%] lg:w-[48%]">
            <div className="flex flex-row items-center px-3 xl:px-6 justify-around bg-[#f1f5f9] rounded-full py-3 flex-1">
                {mainMenuItems.map((menuItem, index) => (<a key={index} href={menuItem.href}>
                    <span className="text-md xl:text-lg tracking-wide text-[#08122a] cursor-pointer">
                        {menuItem.label}
                    </span>
                </a>))}
                <span
                    className="text-md xl:text-lg tracking-wide text-[#08122a] cursor-pointer"
                    ref={dropdownRef}
                >
                    <img
                        src={arrowDown}
                        alt="Arrow Down Image"
                        className="h-full rounded sm:w-full"
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
                                    {remainingMenuItems.map((menuItem, index) => (<a
                                        key={'submenu-' + index}
                                        href={menuItem.href}
                                        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        {menuItem.label}
                                    </a>))}
                                </div>
                            </div>
                        </div>
                    )}
                </span>
            </div>
            <a>
                <span>
                    <button className="flex flex-row justify-center items-center ps-4 py-2 pr-2 gap-2 xl:gap-4 bg-gradient-to-r from-[#3983cc] to-[#0056b8] rounded-full border-none text-white-0">
                        Join Now
                        <div className="flex flex-row justify-center items-center rotate-[-45deg] p-0 gap-2 w-8 h-8 text-[#2573C0] bg-[#ffffff] rounded-full">
                            →
                        </div>
                    </button>
                </span>
            </a>
        </div>

        <div
            className={`${isOpen ? "off-canvas-menu open" : "off-canvas-menu"
                } lg:flex lg:flex-col lg:items-center lg:w-auto`}
            id="menu"
        >
            <div className="off-canvas-header">
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
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 lg:px-5 lg:py-3 text-lg text-[#08122a] hover:text-blue-500"
                        onClick={(event) => {
                            closeMenu();
                            item?.onClick(event);
                        }}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
            <div className="flex justify-center lg:justify-end">
                <button className="flex items-center px-4 py-2 lg:py-3 gap-2.5 bg-gradient-to-r from-[#3983cc] to-[#0056b8] rounded-full border-none text-white-0">
                    Join Now
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
    )
}
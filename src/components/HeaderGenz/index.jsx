import { Button } from "../ButtonGenz/index";
import { Img } from "../ImgGenz/index";
import { Text } from "../TextGenz/index";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center gap-5 p-2 bg-light_base rounded-[34px] max-[550px]:flex-row max-[1050px]:flex-row`}
    >
      <Img
        src="images/img_logo_container.svg"
        alt="Logo"
        className="h-[32px] w-[18%] object-contain"
      />
      <ul className="flex justify-center gap-10 max-[550px]:hidden max-[1050px]:hidden">
        <li>
          <a href="/">
            <Text
              size="iopn_desktop_navigation_menu_link"
              as="p"
              className="!text-accent-black"
            >
              Home
            </Text>
          </a>
        </li>
        <li>
          <a href="/">
            <Text
              size="iopn_desktop_navigation_menu_link"
              as="p"
              className="!text-accent-black"
            >
              Benefits
            </Text>
          </a>
        </li>
        <li>
          <a href="/">
            <Text
              size="iopn_desktop_navigation_menu_link"
              as="p"
              className="!text-accent-black"
            >
              How it works
            </Text>
          </a>
        </li>
        <li>
          <a href="/">
            <Text
              size="iopn_desktop_navigation_menu_link"
              as="p"
              className="!text-accent-black"
            >
              Purchase token
            </Text>
          </a>
        </li>
        <li>
          <a href="/">
            <Text
              size="iopn_desktop_navigation_menu_link"
              as="p"
              className="!text-accent-black"
            >
              Monthly draw
            </Text>
          </a>
        </li>
      </ul>
      <Button
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
        className="min-w-[156px] gap-4 font-medium capitalize"
      >
        Contact
      </Button>
    </header>
  );
}

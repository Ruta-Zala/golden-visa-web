import React from "react";

const sizes = {
  iopn_desktop_navigation_menu_link:
    "tracking-[0.54px] text-[18px] font-normal not-italic max-[1440px]:text-[15px]",
  visa_desktop_headers_h1:
    "capitalize text-[100px] font-normal not-italic max-[1440px]:text-[100px] max-[1050px]:text-[48px]",
  visa_desktop_headers_h2:
    "capitalize text-[72px] font-normal not-italic max-[1440px]:text-[72px] max-[1050px]:text-[48px]",
  visa_desktop_body_text_20:
    "text-[20px] font-normal not-italic max-[1440px]:text-[17px]",
  visa_desktop_headers_h3:
    "text-[44px] font-normal not-italic max-[1440px]:text-[37px] max-[1050px]:text-[40px] max-[550px]:text-[34px]",
  visa_desktop_body_text_16:
    "text-[16px] font-normal not-italic max-[1440px]:text-[13px]",
  visa_desktop_body_text_18:
    "text-[18px] font-normal not-italic max-[1440px]:text-[15px]",
  iopn_desktop_body_text_20:
    "text-[20px] font-normal not-italic max-[1440px]:text-[17px]",
  iopn_desktop_body_text_16:
    "text-[16px] font-normal not-italic max-[1440px]:text-[13px]",
};

const Text = ({
  children,
  className = "",
  as,
  size = "visa_desktop_body_text_16",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black font-outfit ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

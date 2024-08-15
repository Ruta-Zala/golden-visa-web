import React from "react";

const sizes = {
  visa_desktop_headers_subheader:
    "uppercase text-[16px] font-medium max-[1440px]:text-[13px]",
  visa_desktop_body_label_16:
    "tracking-[0.32px] uppercase text-[16px] font-medium max-[1440px]:text-[13px]",
  visa_desktop_headers_h4:
    "text-[32px] font-medium max-[1440px]:text-[27px] max-[1050px]:text-[30px] max-[550px]:text-[28px]",
  iopn_desktop_navigation_button:
    "capitalize text-[18px] font-medium max-[1440px]:text-[15px]",
  visa_desktop_headers_h5:
    "text-[24px] font-medium max-[1440px]:text-[20px] max-[1050px]:text-[22px]",
  visa_desktop_headers_h6: "text-[20px] font-medium max-[1440px]:text-[17px]",
};

const Heading = ({
  children,
  className = "",
  size = "visa_desktop_body_label_16",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-grey font-outfit ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };

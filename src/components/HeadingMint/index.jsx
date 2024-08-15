import React from "react";

const sizes = {
  visa_desktop_headers_subheader: "uppercase text-[16px] font-medium lg:text-[13px]",
  visa_desktop_headers_h4: "text-[32px] font-medium lg:text-[27px] md:text-[30px] sm:text-[28px]",
  visa_desktop_headers_h6: "text-[20px] font-medium lg:text-[17px]",
  visa_desktop_headers_h5: "text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  visa_desktop_body_label_16: "tracking-[0.32px] uppercase text-[16px] font-medium lg:text-[13px]",
  iopn_desktop_navigation_button: "capitalize text-[18px] font-medium lg:text-[15px]",
};

const Heading = ({ children, className = "", size = "visa_desktop_headers_subheader", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-dark-0 font-outfit ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

import PropTypes from "prop-types";

const sizes = {
  iopn_desktop_navigation_menu_link:
    "tracking-[0.54px] text-[18px] font-normal not-italic lg:text-[15px]",
  visa_headers_h1:
    "capitalize text-[100px] font-normal not-italic lg:text-[100px] md:text-[48px]",
  visa_headers_h2:
    "capitalize text-[72px] font-normal not-italic lg:text-[72px] md:text-[48px]",
  visa_body_text_20: "text-[20px] font-normal not-italic lg:text-[17px]",
  visa_headers_h3:
    "text-[44px] font-normal not-italic lg:text-[37px] md:text-[40px] sm:text-[34px]",
  visa_body_text_18: "text-[18px] font-normal not-italic lg:text-[15px]",
  iopn_desktop_body_text_20:
    "text-[20px] font-normal not-italic lg:text-[17px]",
  iopn_desktop_body_text_16:
    "text-[16px] font-normal not-italic lg:text-[13px]",
  textxs: "text-[18px] font-normal not-italic lg:text-[15px]",
  texts:
    "text-[32px] font-normal not-italic lg:text-[27px] md:text-[30px] sm:text-[28px]",
};

const Text = ({
  children,
  className = "",
  as,
  size = "iopn_desktop_navigation_menu_link",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-dark-0 font-outfit ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node, // Use PropTypes.node to accept any type of children
  as: PropTypes.elementType, // Use PropTypes.elementType to accept any React component
  size: PropTypes.string,
};

export { Text };

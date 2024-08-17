import PropTypes from "prop-types";

const sizes = {
  visa_headers_subheader: "uppercase text-[16px] font-medium lg:text-[13px]",
  visa_body_label_16:
    "tracking-[0.80px] uppercase text-[16px] font-medium lg:text-[13px]",
  visa_headers_h4:
    "text-[32px] font-medium lg:text-[27px] md:text-[30px] sm:text-[28px]",
  visa_headers_h5: "text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  headingxs: "text-[20px] font-bold lg:text-[17px]",
};

const Heading = ({
  children,
  className = "",
  size = "visa_headers_subheader",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-dark-0 font-outfit ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  as: PropTypes.elementType,
};

export { Heading };

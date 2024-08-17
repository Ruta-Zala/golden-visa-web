import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[36px]",
};

const variants = {
  fill: {
    white_A700_33: "bg-white-a700_33 text-white-0",
    white_2: "bg-white-2 shadow-xl text-dark-0",
    white_3: "bg-white-3 text-dark-0",
  },
};

const sizes = {
  xs: "h-[68px] pl-[26px] pr-[72px] text-[20px]",
  sm: "h-[50px] px-[26px] text-[16px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text border-blue-900_1e border border-solid  ${
          (shape && shapes[shape]) || ""
        } ${variants[variant]?.[color] || variants[variant] || ""} ${
          sizes[size] || ""
        }`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700_33", "white_2", "white_3"]),
};

export { Input };

import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[36px]",
};

const variants = {
  fill: {
    white_0: "bg-white-0 shadow-sm text-dark-2",
    white_3: "bg-white-3 shadow-sm text-dark-0",
  },
};

const sizes = {
  xs: "h-[68px] pl-[26px] pr-16 text-[20px]",
  sm: "h-[50px] pl-[26px] pr-16 text-[28px]",
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
      color = "white_3",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  ${
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
  color: PropTypes.oneOf(["white_0", "white_3"]),
};

export { Input };

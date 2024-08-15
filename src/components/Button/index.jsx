import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[26px]",
};
const variants = {
  fill: {
    white_0: "bg-white-0 text-dark-0",
    dark_0: "bg-dark-0 text-white-0",
  },
  outline: {
    dark_0: "border-dark-0 border border-solid text-dark-0",
    white_0: "border-white-0 border border-solid text-white-0",
  },
};
const sizes = {
  xs: "text-sm px-2 py-2 rounded-3xl max-w-64",
  sm: "px-3 py-2 text-xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "sm",
  color = "white_0",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_0", "dark_0"]),
};

export { Button };

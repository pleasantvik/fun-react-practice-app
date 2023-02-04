import React from "react";
import className from "classnames";

// const finalClassName = className({
//   "bg-blue-500": true,
//   "text-yellow-500": false,
// });

// console.log(finalClassName);

export const Button = ({
  children,
  secondary,
  primary,
  danger,
  warning,
  success,
  outline,
  rounded,
  ...rest
}) => {
  const classes = className(
    rest.className,
    "items-center  flex px-3 py-1.5 border",
    {
      "bg-blue-500 border-blue-500 text-white": primary,
      "bg-gray-900 border-gray-900 text-white": secondary,
      "bg-green-500 border-green-500 text-white": success,
      "bg-yellow-400 border-yellow-400 text-white": warning,
      "bg-red-500 border-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValues: ({ secondary, primary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!danger) +
      Number(!!warning) +
      Number(!!success);
    if (count > 1) {
      return new Error(
        `Only one of primary,secondary,danger,succes,warning is allowed`
      );
    }
  },
};

import { ButtonProps } from "@/types/Button.types";
import clsx from "clsx";

const Button = ({
  children,
  variant = "default",
  size = "default",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    default: "bg-outline text-gray-800 hover:bg-outline-hover",
    primary: "bg-primary text-white hover:bg-primary-hover",
    outline: "border border-gray-300 text-gray-800 hover:bg-outline",
    danger: "bg-danger text-white hover:bg-danger-hover",
    success: "bg-success text-white hover:bg-success-hover",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm",
    default: "px-3 py-1.5 text-sm sm:px-4 sm:py-2",
    md: "px-4 py-2 text-sm sm:px-5 sm:py-2.5",
    xl: "px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

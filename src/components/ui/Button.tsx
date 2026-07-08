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
  const baseStyles = `
    inline-flex items-center justify-center
    whitespace-nowrap
    rounded-md
    text-sm font-medium
    transition-all duration-200

    focus:outline-none focus:ring-2 focus:ring-offset-2

    disabled:pointer-events-none
    disabled:opacity-50

    active:scale-[0.98]
  `;

  const variants = {
    default: "bg-gray-100 text-gray-800 hover:bg-gray-200",

    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",

    outline: "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",

    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",

    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-400",
  };

  // Height-based sizing like shadcn
  const sizes = {
    sm: "h-8 px-3 text-xs",
    default: "h-10 px-4 py-2",
    lg: "h-11 px-6 text-base",
    icon: "h-10 w-10",
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

import CircularProgress from "@mui/material/CircularProgress";
import type { ButtonProps } from "../../lib/types/components.ts";

export const Button = ({
  variant,
  children,
  click,
  className,
  outlined,
  loading,
  disabled,
  Icon,
  iconPosition,
}: ButtonProps) => {
  const colorMap = {
    primary: `${
      outlined
        ? "border border-blue-300 text-blue-500"
        : "bg-blue-400 text-white "
    } enabled:hover:bg-blue-200/60`,
    secondary: `${
      outlined
        ? "border border-gray-300 text-gray-500"
        : "bg-gray-400 text-white "
    } enabled:hover:bg-gray-200/60`,
    warning: `${
      outlined ? "border border-red-300 text-red-500" : "bg-red-400 text-white "
    } enabled:hover:bg-red-200/60 `,
  };

  return (
    <button
      onClick={click}
      disabled={disabled}
      className={`transition delay-100 ${className ?? ""} 
      enabled:cursor-pointer py-2 px-5 outline-0 mx-auto rounded-sm 
      ${colorMap[variant]} disabled:opacity-50 
      disabled:cursor-not-allowed flex items-center`}
    >
      {Icon && iconPosition == "before" && <Icon className="mr-1" />}
      {loading && (
        <CircularProgress className="mr-2" color="inherit" size={16} />
      )}
      <span>{children}</span>
      {Icon && iconPosition == "after" && <Icon className="ml-1" />}
    </button>
  );
};

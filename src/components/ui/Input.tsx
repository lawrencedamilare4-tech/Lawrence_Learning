import { forwardRef, useState } from "react";
import { BsEye, BsEyeFill } from "react-icons/bs";
import type { InputProps } from "../../lib/types/components.ts";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, type, Icon, className }, ref) => {
    const [inputType, setInputType] = useState(type);
    const [value, setValue] = useState("");

    const togglePassword = () =>
      setInputType((value) => (value === "password" ? "text" : "password"));

    return (
      <div className="inputBox flex gap-1 flex-col">
        {label && <span className="font-semibold mb-1">{label}</span>}
        <div
          className={`${className} inputField border bg-white flex gap-2 rounded-md border-gray-400/40 p-3 items-center`}
        >
          {Icon && <Icon size={17} />}
          <input
            type={inputType}
            placeholder={placeholder}
            className="flex-1 transition outline-0"
            value={value}
            ref={ref}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
          {type === "password" && value && (
            <button type="button" onClick={togglePassword}>
              {inputType === "text" ? <BsEye /> : <BsEyeFill />}
            </button>
          )}
        </div>
      </div>
    );
  },
);

export default Input;

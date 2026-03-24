import { forwardRef, useState } from "react";
import { BsEye, BsEyeFill } from "react-icons/bs";
import type { InputProps } from "../../lib/types/components.ts";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, type, Icon, className, value, onChange }, ref) => {
    const [inputType, setInputType] = useState(type);

    const togglePassword = () =>
      setInputType((t) => (t === "password" ? "text" : "password"));

    return (
      <div className="flex flex-col gap-1">
        {label && <span className="font-semibold mb-1">{label}</span>}

        <div
          className={`${className} border bg-white flex gap-2 rounded-md border-gray-400/40 p-3 items-center`}
        >
          {Icon && <Icon size={17} />}

          <input
            ref={ref}
            type={inputType}
            placeholder={placeholder}
            className="flex-1 outline-0"
            value={value}
            onChange={onChange}
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

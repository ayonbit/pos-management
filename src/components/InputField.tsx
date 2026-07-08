"use client";

import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  Path,
  UseFormRegister,
} from "react-hook-form";

type Option = {
  value: string;
  label: string;
};

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;

  type?: string;
  placeholder?: string;

  error?: FieldError | Merge<FieldError, FieldErrorsImpl>;

  as?: "input" | "textarea" | "select" | "checkbox" | "radio";

  options?: Option[];

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;

  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
};

const baseInputClass = `
w-full
rounded-lg
border
border-gray-200
bg-white
px-3
py-2
text-sm
outline-none
transition-all
focus:ring-2
focus:ring-primary/30
focus:border-primary
disabled:cursor-not-allowed
disabled:bg-gray-100
`;

const errorClass = `
border-red-400
focus:ring-red-200
focus:border-red-400
`;

const InputField = <T extends FieldValues>({
  label,
  name,
  register,
  type = "text",
  placeholder,
  error,
  as = "input",
  options = [],
  inputProps,
  textareaProps,
  selectProps,
}: Props<T>) => {
  return (
    <div className="flex w-full flex-col gap-1.5">
      {/* Label */}
      {as !== "checkbox" && as !== "radio" && (
        <label
          htmlFor={String(name)}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      {/* Input */}
      {as === "input" && (
        <input
          id={String(name)}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          {...inputProps}
          className={`
            ${baseInputClass}
            ${error ? errorClass : ""}
            ${inputProps?.className || ""}
          `}
        />
      )}

      {/* Textarea */}
      {as === "textarea" && (
        <textarea
          id={String(name)}
          placeholder={placeholder}
          {...register(name)}
          {...textareaProps}
          className={`
            ${baseInputClass}
            resize-none
            min-h-25
            ${error ? errorClass : ""}
            ${textareaProps?.className || ""}
          `}
        />
      )}

      {/* Select */}
      {as === "select" && (
        <select
          id={String(name)}
          defaultValue=""
          {...register(name)}
          {...selectProps}
          className={`
            ${baseInputClass}
            ${error ? errorClass : ""}
            ${selectProps?.className || ""}
          `}
        >
          <option value="" disabled>
            Select {label}
          </option>

          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {/* Checkbox */}
      {as === "checkbox" && (
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            id={String(name)}
            type="checkbox"
            {...register(name)}
            {...inputProps}
            className={`
              h-4
              w-4
              rounded
              border-gray-300
              text-primary
              focus:ring-primary
              ${inputProps?.className || ""}
            `}
          />

          <span className="text-sm text-gray-700">{label}</span>
        </label>
      )}

      {/* Radio */}
      {as === "radio" && (
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>

          <div className="flex flex-wrap gap-4">
            {options.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  value={opt.value}
                  {...register(name)}
                  {...inputProps}
                  className={`
                    h-4
                    w-4
                    border-gray-300
                    text-primary
                    focus:ring-primary
                    ${inputProps?.className || ""}
                  `}
                />

                <span className="text-sm text-gray-700">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Error */}
      {error?.message && (
        <p className="text-xs font-medium text-red-500">
          {String(error.message)}
        </p>
      )}
    </div>
  );
};

export default InputField;

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

  error?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;

  as?: "input" | "textarea" | "select" | "checkbox" | "radio";
  options?: Option[];

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
};

const InputField = <T extends FieldValues>({
  label,
  type = "text",
  register,
  name,
  placeholder,
  error,
  as = "input",
  options = [],
  inputProps,
  textareaProps,
  selectProps,
}: Props<T>) => {
  return (
    <div className="flex flex-col gap-1">
      {/* LABEL (except checkbox & radio) */}
      {as !== "checkbox" && as !== "radio" && (
        <label className="text-xs sm:text-sm text-gray-600">{label}</label>
      )}

      {/* INPUT */}
      {as === "input" && (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          {...inputProps}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {/* TEXTAREA */}
      {as === "textarea" && (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          {...textareaProps}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {/* SELECT */}

      {as === "select" && (
        <select
          {...register(name)}
          {...selectProps}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select{label}
          </option>

          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
      {/* CHECKBOX */}
      {as === "checkbox" && (
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register(name)}
            {...inputProps}
            className="h-4 w-4"
          />
          <span className="text-xs sm:text-sm text-gray-600">{label}</span>
        </label>
      )}

      {/* RADIO */}
      {as === "radio" && (
        <div className="flex flex-col gap-2">
          <span className="text-xs sm:text-sm text-gray-600">{label}</span>

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
                  className="h-4 w-4"
                />
                <span className="text-xs sm:text-sm text-gray-600">
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* ERROR */}
      {error?.message && (
        <p className="text-xs text-red-500">{String(error.message)}</p>
      )}
    </div>
  );
};

export default InputField;

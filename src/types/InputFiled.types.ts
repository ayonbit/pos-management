import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export interface InputFieldProps<T extends FieldValues = any> {
  label: string;
  type?: string;
  name: Path<T>;
  register: UseFormRegister<T>;

  placeholder?: string;

  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;

  as?: "input" | "textarea" | "select" | "checkbox" | "radio";

  options?: { value: string; label: string }[];

  inputProps?:
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>
    | React.SelectHTMLAttributes<HTMLSelectElement>;
}

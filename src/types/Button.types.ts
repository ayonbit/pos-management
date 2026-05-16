import React from "react";

export type ButtonVariant =
  | "default"
  | "primary"
  | "outline"
  | "danger"
  | "success";

export type ButtonSize = "sm" | "default" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

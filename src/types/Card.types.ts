import React from "react";

export type CardProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

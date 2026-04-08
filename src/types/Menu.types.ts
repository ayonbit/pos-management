import { IconType } from "react-icons";

export type MenuItem = {
  label: string;
  icon: IconType;
  href?: string;
  children?: MenuItem[];
};

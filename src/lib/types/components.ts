import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface ButtonProps {
  variant: "primary" | "secondary" | "warning";
  children: ReactNode;
  click: () => void;
  className?: string;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
  Icon?: IconType;
}

export interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  Icon?: IconType;
  outlined?: boolean;
  className?: string;
}

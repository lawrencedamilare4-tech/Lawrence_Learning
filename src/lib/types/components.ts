import type { Method } from "axios";
import type { ChangeEvent, ReactNode } from "react";
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
  iconPosition?: "before" | "after";
}

export interface InputProps {
  label?: string;
  placeholder: string;
  type: string;
  Icon?: IconType;
  outlined?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IFetch {
  url: string;
  method?: Method;
  body?: any;
  headers?: Record<string, string>;
}

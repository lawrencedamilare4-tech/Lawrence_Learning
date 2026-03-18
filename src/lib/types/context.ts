import type { ReactNode } from "react";

export interface IModalContext {
  isOpen: boolean;
  openModal: (b: ReactNode) => void;
  closeModal: () => void;
}

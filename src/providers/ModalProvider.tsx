import { createContext, useContext, useState, type ReactNode } from "react";
import type { IModalContext } from "../lib/types/context";
import { BiX } from "react-icons/bi";

const ModalContext = createContext<IModalContext | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>();

  const openModal = (modalContent: ReactNode) => {
    setContent(modalContent);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div className="bg-black/40 fixed inset-0" onClick={closeModal}></div>
          <div className="bg-white rounded-md p-6 shadow-lg max-w-md w-full relative">
            <span
              onClick={closeModal}
              className="text-red-500 block w-fit cursor-pointer ml-auto"
            >
              <BiX size={25} />
            </span>
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = (): IModalContext => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

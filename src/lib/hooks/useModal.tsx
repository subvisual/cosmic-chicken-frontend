import { createContext, ReactNode, useContext, useRef, useState } from "react";
import Modal from "../components/Modal";

type Modals = {
  renderModal: (opts: { message: string; onContinue: () => void }) => void;
  close: () => void;
  message: string;
  onContinue: () => void;
};

const ModalContext = createContext<Modals>({} as Modals);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const onContinue = useRef<() => void>(() => null);

  function renderModal(opts: { message: string; onContinue: () => void }) {
    setOpen(true);
    setMessage(opts.message);
    onContinue.current = opts.onContinue;
  }

  function close() {
    setOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{ renderModal, close, message, onContinue: onContinue.current }}
    >
      {children}
      {open && <Modal />}
    </ModalContext.Provider>
  );
}

export default function useModal() {
  return useContext(ModalContext);
}

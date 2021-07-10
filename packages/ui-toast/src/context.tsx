import * as React from "react";
import type { Toast as IToast } from "./types";

type ToastContextValue = {
  toast: IToast | null;
  setToast: React.Dispatch<React.SetStateAction<IToast | null>>;
};

const ToastContext = React.createContext<ToastContextValue | undefined>(
  undefined
);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("");
  }
  return context;
};

interface ToastProviderProps {
  children?: React.ReactNode;
  toastEl: React.ReactElement;
}
export const ToastProvider = ({ children, toastEl }: ToastProviderProps) => {
  const [toast, setToast] = React.useState<IToast | null>(null);

  const value = React.useMemo(() => ({ toast, setToast }), [toast, setToast]);

  React.useEffect(() => {
    let timerId: number | null = null;

    if (toast !== null) {
      timerId = setTimeout(() => {
        setToast(null);
      }, 15000);
    }

    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
    };
  }, [toast, setToast]);

  return (
    <ToastContext.Provider value={value}>
      {toast !== null ? toastEl : null}
      {children}
    </ToastContext.Provider>
  );
};

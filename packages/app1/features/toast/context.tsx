import * as React from "react";
import { Toast as IToast } from "./types";
import { Toast } from "./components/Toast";

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
}
export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = React.useState<IToast | null>(null);

  const value = React.useMemo(() => ({ toast, setToast }), [toast, setToast]);

  return (
    <ToastContext.Provider value={value}>
      {toast !== null ? <Toast toast={toast} setToast={setToast} /> : null}
      {children}
    </ToastContext.Provider>
  );
};

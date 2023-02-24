import { ReactNode } from "react";

export interface IModalProps {
    active: boolean;
    setActive: (arg:boolean) => void;
  children: ReactNode;
}

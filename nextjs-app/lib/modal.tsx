"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import QuoteModal from "@/components/QuoteModal";

interface ModalCtx { openModal: () => void; }
const Ctx = createContext<ModalCtx>({ openModal: () => {} });

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal  = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <Ctx.Provider value={{ openModal }}>
      {children}
      <QuoteModal open={open} onClose={closeModal} />
    </Ctx.Provider>
  );
}

export function useModal() { return useContext(Ctx); }

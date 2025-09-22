"use client"

import { Toaster as Sonner } from "sonner"

type ToastProviderProps = {
  children: React.ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Sonner position="top-right" richColors />
    </>
  )
}

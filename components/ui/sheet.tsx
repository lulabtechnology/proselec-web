"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;

export function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  side?: "right" | "left";
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-50 h-dvh w-[320px] bg-background p-6 shadow-soft outline-none border-l",
          side === "right" ? "right-0 top-0" : "left-0 top-0 border-l-0 border-r",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

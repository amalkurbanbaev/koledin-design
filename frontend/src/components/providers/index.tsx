"use client";

import { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const RootProvider = ({ children }: { children: ReactNode }) => (
    <ThemeProvider>{children}</ThemeProvider>
);

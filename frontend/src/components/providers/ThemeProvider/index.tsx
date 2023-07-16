"use client";

import { ThemeProvider as ThemeNextProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
    <ThemeNextProvider enableSystem defaultTheme="system" attribute="class">
        {children}
    </ThemeNextProvider>
);

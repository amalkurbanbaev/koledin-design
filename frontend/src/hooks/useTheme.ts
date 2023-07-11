import { useEffect } from "react";

import { useLocalStorage } from "usehooks-ts";

export const useTheme = () => {
    const [theme, setTheme] = useLocalStorage<"light" | "dark" | "system">(
        "theme",
        "system",
    );

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
            theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return { theme, setTheme };
};

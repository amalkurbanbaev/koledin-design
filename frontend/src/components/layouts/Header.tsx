"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { ILayoutHeader } from "@/types/generated";
import { getStrapiMedia } from "@/utils/api-helpers";

import { DarkThemeIcon, LightThemeIcon } from "../common/ThemeIcons";

const Header = (props: Partial<ILayoutHeader>) => {
    const { headerLogo, additionalHeaderLogo } = props;
    const logoUrl = getStrapiMedia(headerLogo?.data?.attributes.url);
    const additionalLogo = getStrapiMedia(
        additionalHeaderLogo?.data?.attributes.url,
    );

    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="container-main my-10 flex w-full justify-between lg:py-10 landscape:my-10">
            <div className="flex-1" />
            <Link href="/" className="flex flex-1 justify-center">
                <div className="relative">
                    {logoUrl ? (
                        <Image
                            src={logoUrl}
                            width={380}
                            height={117}
                            alt={
                                additionalHeaderLogo?.data?.attributes
                                    .alternativeText || ""
                            }
                            className="h-auto w-32 object-contain md:w-96"
                            priority
                        />
                    ) : undefined}
                    {additionalLogo ? (
                        <Image
                            src={additionalLogo}
                            width={73}
                            height={73}
                            alt=""
                            className="absolute left-[calc(100%+27px)] top-0 hidden h-auto -translate-y-1/2 md:block md:w-12 lg:w-[73px]"
                        />
                    ) : undefined}
                </div>
            </Link>

            <div className="flex flex-1 items-start justify-end">
                <div className="ml-auto hidden w-1/3 justify-between gap-x-2 lg:flex">
                    {mounted ? (
                        <>
                            <button
                                type="button"
                                onClick={() => setTheme("dark")}
                            >
                                <DarkThemeIcon />
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    resolvedTheme === "dark"
                                        ? setTheme("light")
                                        : setTheme("dark")
                                }
                                className="relative flex h-5 flex-1"
                            >
                                <span
                                    className={classNames(
                                        "absolute h-5 w-5 rounded-full border-2 transition-all duration-500 ease-in-out",
                                        resolvedTheme === "dark"
                                            ? "left-0"
                                            : "left-full -translate-x-full",
                                    )}
                                />
                            </button>
                            <button
                                type="button"
                                onClick={() => setTheme("light")}
                            >
                                <LightThemeIcon />
                            </button>
                        </>
                    ) : (
                        <div className="h-5 w-36 animate-pulse rounded-full bg-black/10 dark:bg-white/20" />
                    )}
                </div>
                {mounted ? (
                    <div className="relative my-auto flex h-7 w-7 rounded-full border-2 lg:hidden">
                        {resolvedTheme === "dark" ? (
                            <button
                                type="button"
                                onClick={() => setTheme("light")}
                                className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                            >
                                <LightThemeIcon size="sm" />
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setTheme("dark")}
                                className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                            >
                                <DarkThemeIcon size="sm" />
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="relative my-auto flex h-7 w-7 animate-spin-slow rounded-full border-2 border-dashed duration-1000 lg:hidden" />
                )}
            </div>
        </header>
    );
};

export default Header;

/* eslint-disable no-nested-ternary */

"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import { useTheme } from "@/hooks/useTheme";
import { ILayoutHeader } from "@/types/generated";
import { getStrapiMedia } from "@/utils/api-helpers";

import { DarkThemeIcon, LightThemeIcon } from "../common/ThemeIcons";

const Header = (props: Partial<ILayoutHeader>) => {
    const { headerLogo, additionalHeaderLogo } = props;
    const logoUrl = getStrapiMedia(headerLogo?.data?.attributes.url);
    const additionalLogo = getStrapiMedia(
        additionalHeaderLogo?.data?.attributes.url,
    );

    const { theme, setTheme } = useTheme();

    const isDarkPreferTheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;

    return (
        <header className="container-main my-10 flex w-full justify-between md:mb-[90px] md:mt-[113px]">
            <div className="flex-1" />
            <Link href="/" className="relative flex-1">
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
                        className="absolute -right-1/4 top-0 w-6 -translate-y-1/2 md:-right-1/3 md:w-16 md:-translate-x-1/2"
                    />
                ) : undefined}
            </Link>
            <div className="flex flex-1 items-start justify-end gap-x-3">
                <button type="button" onClick={() => setTheme("dark")}>
                    <DarkThemeIcon />
                </button>
                <div className="w-20">
                    <div
                        className={classNames(
                            "h-5 w-5 rounded-full border-2 border-white transition-transform duration-300 ease-in-out",
                            isDarkPreferTheme && theme === "system"
                                ? "translate-x-0"
                                : theme === "dark"
                                ? "translate-x-0"
                                : "translate-x-[58px]",
                        )}
                    />
                </div>
                <button
                    type="button"
                    className=""
                    onClick={() => setTheme("light")}
                >
                    <LightThemeIcon />
                </button>
            </div>
        </header>
    );
};

export default Header;

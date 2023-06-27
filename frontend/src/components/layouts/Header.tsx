"use client";

import Image from "next/image";
import Link from "next/link";

import { ILayoutHeader } from "@/types/generated";
import { getStrapiMedia } from "@/utils/api-helpers";

const Header = (props: Partial<ILayoutHeader>) => {
    const { headerLogo, additionalHeaderLogo } = props;
    const logoUrl = getStrapiMedia(headerLogo?.data?.attributes.url);
    const additionalLogo = getStrapiMedia(
        additionalHeaderLogo?.data?.attributes.url,
    );

    return (
        <header className="container-main my-10 flex w-full justify-center md:mb-[90px] md:mt-[113px]">
            <Link href="/" className="relative">
                {logoUrl ? (
                    <Image
                        src={logoUrl}
                        width={380}
                        height={117}
                        alt={
                            additionalHeaderLogo?.data?.attributes
                                .alternativeText || ""
                        }
                        className="h-auto w-32 object-contain md:w-auto"
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
        </header>
    );
};

export default Header;

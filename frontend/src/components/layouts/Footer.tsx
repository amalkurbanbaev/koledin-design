"use client";

import React from "react";

import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import { ILayoutFooter } from "@/types/generated";
import { getStrapiMedia } from "@/utils/api-helpers";

const Footer = (props: Partial<ILayoutFooter>) => {
    const { copyrights, footerLogo } = props;

    const logo = getStrapiMedia(footerLogo?.data?.attributes.url);

    const md = (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {copyrights?.bottomText || ""}
        </ReactMarkdown>
    );

    return (
        <footer className="container-main container mb-16 mt-24 pb-16 md:mb-[81px]">
            <div className="flex flex-col gap-y-4 text-base md:gap-y-16 ">
                <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="font-normal leading-[23px]">
                        {copyrights?.copyrightText}{" "}
                        <br className="hidden md:block" />
                        {new Date().getFullYear()}
                    </div>

                    <div className="flex flex-col leading-[23px]">
                        {Object.entries(copyrights?.developers).map(
                            ([key, value]) => (
                                <div key={key} className="columns-2 gap-0">
                                    <div>{key}</div>
                                    <div>{value as string}</div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-y-5">
                    {logo ? (
                        <Image
                            src={logo}
                            width={footerLogo?.data?.attributes.width || 34}
                            height={footerLogo?.data?.attributes.height || 45}
                            alt="g-logo"
                            className="object-contain"
                        />
                    ) : undefined}

                    <div className="text-center font-light">{md}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

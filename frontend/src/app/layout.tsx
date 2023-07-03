import "./globals.css";
import { ReactNode } from "react";

import { Metadata } from "next";
import { Jost } from "next/font/google";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { IGlobal } from "@/types/generated";
import { getStrapiURL } from "@/utils/api-helpers";
import { fetchAPI } from "@/utils/fetch-api";

import RootErrorBoundary from "./error";

const jost = Jost({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600"],
});

const FALLBACK_SEO = {
    title: "Strapi Starter Next Blog",
    description: "Strapi Starter Next Blog",
};

async function getGlobal(): Promise<{
    data: IGlobal;
    meta: { pagination: { start: number; limit: number; total: number } };
}> {
    const path = `/global`;

    const urlParamsObject = {
        populate: [
            "favicon",
            "metadata",
            "meta.metaTitle",
            "meta.metaDescription",
            "meta.shareImage",
            "header",
            "header.headerLogo",
            "header.additionalHeaderLogo",
            "header.langs",
            "header.themes",
            "footer",
            "footer.copyrights",
            "footer.footerLogo",
        ],
    };

    const response = await fetchAPI(path, urlParamsObject, {
        "Content-Type": "image/svg+xml",
    });
    return response;
}

export async function generateMetadata(): Promise<Metadata> {
    const meta = await getGlobal();

    if (!meta.data) return FALLBACK_SEO;

    const { metadata, favicon } = meta.data.attributes;
    const { url } = favicon?.data?.attributes || {};

    return {
        title: metadata?.metaTitle,
        description: metadata?.metaDescription,
        icons: {
            icon: [new URL(url || "", getStrapiURL())],
        },
        openGraph: {
            images: [new URL(url || "", getStrapiURL())],
        },
    };
}

interface RootLayoutProps {
    children: ReactNode;
    params: { lang: string };
    modal: ReactNode;
}

const RootLayout = async ({ children, params, modal }: RootLayoutProps) => {
    const global = await getGlobal();

    if (!global.data) return <RootErrorBoundary />;

    const { header, footer } = global.data.attributes;

    return (
        <html lang={params.lang}>
            <body className={`${jost.className} flex flex-col`}>
                <Header {...header} />
                <main className="relative flex-1">{children}</main>
                {modal}
                <Footer {...footer} />
            </body>
        </html>
    );
};

export default RootLayout;

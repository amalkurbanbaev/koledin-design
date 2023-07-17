import "./globals.css";
import { ReactNode } from "react";

import { Metadata } from "next";
import { Jost } from "next/font/google";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { RootProvider } from "@/components/providers";
import { IGlobal } from "@/types/generated";
import { getStrapiURL } from "@/utils/api-helpers";
import { fetchAPI } from "@/utils/fetch-api";

import RootErrorBoundary from "./error";

const jost = Jost({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600"],
});

const FALLBACK_SEO: Metadata = {
    metadataBase: new URL("https://koledin.com"),
    title: "Koledin Design",
    description:
        "Делаем графический дизайн, сайты и развиваем чувство стиля / We make graphic design, websites and develop a sense of style",
    icons: {
        icon: [
            { url: "/favicons/favicon.ico" },
            new URL("/favicons/favicon.ico", "https://koledin.com"),
        ],
        apple: [
            {
                url: "/favicons/apple-touch-icon.png",
                type: "image/png",
                sizes: "180x180",
            },
        ],
        other: [
            {
                rel: "icon",
                type: "image/png",
                url: "/favicons/favicon-32x32.png",
                sizes: "32x32",
            },
            {
                rel: "icon",
                type: "image/png",
                url: "/favicons/favicon-16x16.png",
                sizes: "16x16",
            },
            {
                rel: "manifest",
                url: "/favicons/site.webmanifest",
            },
            {
                rel: "mask-icon",
                url: "/favicons/safari-pinned-tab.svg",
            },
        ],
    },
    applicationName: "Koledin Design",
    manifest: "/favicons/site.webmanifest",
    appleWebApp: {
        capable: true,
        title: "Koledin Design",
        statusBarStyle: "black-translucent",
    },
    openGraph: {
        title: "Koledin Design",
        description:
            "Делаем графический дизайн, сайты и развиваем чувство стиля / We make graphic design, websites and develop a sense of style",
        url: "https://koledin.com",
        siteName: "Koledin Design",
        images: [
            {
                url: "/shareImageFallback.jpg",
                width: 600,
                height: 600,
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
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
    const { url: faviconUrl } = favicon?.data?.attributes || {};

    return {
        metadataBase: new URL(getStrapiURL()),
        title: metadata?.metaTitle,
        description: metadata?.metaDescription,
        icons: {
            icon: [{ url: faviconUrl || "" }],
            apple: [
                {
                    url: "/favicons/apple-touch-icon.png",
                    type: "image/png",
                    sizes: "180x180",
                },
            ],
            other: [
                {
                    rel: "icon",
                    type: "image/png",
                    url: "/favicons/favicon-32x32.png",
                    sizes: "32x32",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    url: "/favicons/favicon-16x16.png",
                    sizes: "16x16",
                },
                {
                    rel: "manifest",
                    url: "/favicons/site.webmanifest",
                },
                {
                    rel: "mask-icon",
                    url: "/favicons/safari-pinned-tab.svg",
                },
            ],
        },
        applicationName: "Koledin Design",
        manifest: "/favicons/site.webmanifest",
        appleWebApp: {
            capable: true,
            title: metadata?.metaTitle || "Koledin Design",
            statusBarStyle: "black-translucent",
        },
        openGraph: {
            title: metadata?.metaTitle || "Koledin Design",
            description: metadata?.metaDescription || "",
            url: getStrapiURL(),
            siteName: metadata?.metaTitle || "Koledin Design",
            images: [
                {
                    url: metadata?.shareImage?.data?.attributes.url || "",
                    width: metadata?.shareImage?.data?.attributes.width || "",
                    height: metadata?.shareImage?.data?.attributes.height || "",
                    alt:
                        metadata?.shareImage?.data?.attributes
                            .alternativeText || "",
                },
            ],
            locale: "ru_RU",
            type: "website",
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
        <html lang={params.lang} suppressHydrationWarning>
            <body
                className={`${jost.className} flex flex-col bg-theme-pink text-black transition-colors duration-300 dark:bg-theme-black dark:text-white`}
            >
                <RootProvider>
                    <Header {...header} />
                    <main className="relative flex-1">{children}</main>
                    {modal}
                    <Footer {...footer} />{" "}
                </RootProvider>
            </body>
        </html>
    );
};

export default RootLayout;

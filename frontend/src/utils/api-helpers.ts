export const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export function getStrapiURL(path = "") {
    const baseURL =
        process.env.NODE_ENV !== "development"
            ? API_URL
            : "http://127.0.0.1:1337"; // TODO

    return `${baseURL}${path}`;
}

export function getStrapiMedia(url?: string | null) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith("http") || url.startsWith("//")) {
        return url;
    }

    // Otherwise prepend the URL path with the Strapi URL
    return `${getStrapiURL()}${url}`;
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
}

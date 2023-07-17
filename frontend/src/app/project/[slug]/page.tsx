import { Metadata } from "next";

import Project from "@/components/templates/Project";
import { IProject } from "@/types/generated";
import { getStrapiMedia, getStrapiURL } from "@/utils/api-helpers";
import { fetchAPI } from "@/utils/fetch-api";

async function getProjectBySlug(slug: string): Promise<{
    data: IProject[];
    meta: { pagination: null };
}> {
    const path = `/projects`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            cover: { fields: ["url"] },
            categories: { fields: ["name"] },
            media: { populate: ["*"] },
        },
    };
    const options = {};
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

async function getMetaData(slug: string): Promise<{
    data: IProject[];
    meta: { pagination: null };
}> {
    const path = `/projects`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            cover: { fields: ["url"] },
            categories: { fields: ["name"] },
            meta: { fields: ["*"] },
            // media: { populate: ["*"] },
        },
    };
    const options = {};
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const meta = await getMetaData(params.slug);
    const metadata = meta.data[0].attributes.meta;

    const sharedOgImage = getStrapiMedia(
        metadata?.shareImage?.data?.attributes.url,
    );

    return {
        title: metadata?.metaTitle,
        description: metadata?.metaDescription,
        openGraph: {
            url: `${getStrapiURL()}propject/params.slug/`,
            images: [
                {
                    url: sharedOgImage || "/shareImageFallback.jpg",
                    width: metadata?.shareImage?.data?.attributes.width || 500,
                    height:
                        metadata?.shareImage?.data?.attributes.height || 500,
                    alt:
                        metadata?.shareImage?.data?.attributes
                            .alternativeText || "",
                },
            ],
        },
    };
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const projectData = await getProjectBySlug(slug);

    if (projectData.data.length === 0) return <h2>no post found</h2>;

    return (
        <div className="container-main">
            <Project {...projectData.data[0].attributes} />
        </div>
    );
};

export default ProjectPage;

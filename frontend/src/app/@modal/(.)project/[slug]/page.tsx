import { Metadata } from "next";

import Window from "@/components/common/Window";
import Project from "@/components/templates/Project";
import { IProject } from "@/types/generated";
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

    return {
        title: metadata?.metaTitle,
        description: metadata?.metaDescription,
    };
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const projectData = await getProjectBySlug(slug);
    if (projectData.data.length === 0) return <h2>no post found</h2>;

    return (
        <Window>
            <Project {...projectData.data[0].attributes} />
        </Window>
    );
};

export default ProjectPage;

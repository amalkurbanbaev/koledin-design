import { Suspense } from "react";

import ProjectList from "@/components/templates/ProjectList";
import { IProject } from "@/types/generated";
import { fetchAPI } from "@/utils/fetch-api";

const getAllProjects = async (): Promise<{
    data: IProject[];
    meta: { pagination: { start: number; limit: number; total: number } };
}> => {
    const path = "/projects";
    const params = {
        sort: { createdAt: "desc" },
        populate: {
            cover: { fields: ["url"] },
            category: { populate: "*" },
        },
    };
    const response = await fetchAPI(path, params);
    return response;
};

const Home = async () => {
    const projectsData = await getAllProjects();

    return (
        <div className="container-main">
            <Suspense fallback={<div>Loading...</div>}>
                <ProjectList projects={projectsData.data} />
            </Suspense>
        </div>
    );
};

export default Home;

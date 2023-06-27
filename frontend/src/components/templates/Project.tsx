"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import { IProject } from "@/types/generated";

import MediaSlider from "../common/MediaSlider";

const Project = (project: IProject["attributes"]) => {
    const { title, description, media, categories } = project;

    const richText = description ? (
        <ReactMarkdown className="rich-text" remarkPlugins={[remarkGfm]}>
            {description}
        </ReactMarkdown>
    ) : (
        "No content"
    );

    return (
        <div className="max-w-6xl">
            <h3 className="mb-20 text-2xl font-semibold max-md:max-w-md max-sm:max-w-sm md:text-4xl">
                {title}
            </h3>
            {media?.data ? <MediaSlider media={media?.data} /> : undefined}
            <div className="mt-14 flex items-start justify-between lg:mt-20">
                <div className="max-w-2xl text-base font-light">{richText}</div>
            </div>
            <div className="mt-14 flex gap-x-8">
                {categories?.data.map((cat) => (
                    <div
                        className="flex items-center gap-x-2.5 text-[27px]"
                        key={cat.id}
                    >
                        <div className="h-14 w-14 rounded-full border-2 border-white" />
                        <span>{cat.attributes.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;

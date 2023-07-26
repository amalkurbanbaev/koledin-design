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
    ) : null;

    return (
        <div className="max-w-6xl">
            <h3 className="mb-10 w-4/5 text-2xl font-semibold lg:py-20 lg:text-4xl landscape:mb-5">
                {title}
            </h3>
            {media?.data ? <MediaSlider media={media?.data} /> : undefined}
            <div className="mt-14 flex items-start justify-between lg:mt-20">
                <div className="max-w-2xl text-base font-light">{richText}</div>
            </div>
            <div className="mt-14 flex gap-x-8">
                {categories?.data.map((cat) => (
                    <div
                        className="flex flex-wrap items-center gap-x-2.5 text-sm lg:text-[27px]"
                        key={cat.id}
                    >
                        <div className="h-5 w-5 rounded-full border-2 border-white lg:h-14 lg:w-14" />
                        <span>{cat.attributes.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;

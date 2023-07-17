import React from "react";

import Image from "next/image";
import Link from "next/link";

import { IProject } from "@/types/generated";
import { getStrapiMedia } from "@/utils/api-helpers";

type Props = { projects: IProject[] };

const ProjectList = (props: Props) => {
    const { projects } = props;
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 max-sm:place-content-center max-sm:place-items-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
            {projects?.map((el) => (
                <Link
                    key={el.id}
                    href={`/project/${el.attributes.slug}` || ""}
                    className="flex max-w-sm flex-col"
                >
                    <Image
                        src={
                            getStrapiMedia(
                                el.attributes.cover?.data?.attributes.url,
                            ) || ""
                        }
                        alt={
                            el.attributes.cover?.data?.attributes
                                .alternativeText || ""
                        }
                        width={377}
                        height={229}
                        className="relative h-auto w-[377px] object-contain grayscale transition-all duration-1000 dark:filter-none"
                    />

                    <div className="mt-3 flex w-full justify-between gap-x-4">
                        <h3>{el.attributes.title}</h3>
                        <span>#{el.id}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProjectList;

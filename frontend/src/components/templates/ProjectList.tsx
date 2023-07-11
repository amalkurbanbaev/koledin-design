import React from "react";

import Image from "next/image";
import Link from "next/link";

import { IProject } from "@/types/generated";
import { getStrapiMedia } from "@/utils/api-helpers";

type Props = { projects: IProject[] };

const ProjectList = (props: Props) => {
    const { projects } = props;
    return (
        <div className="grid grid-cols-1 place-items-center gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {projects?.map((el) => (
                <Link
                    key={el.id}
                    href={`/project/${el.attributes.slug}` || ""}
                    className="flex h-[229px] max-w-sm flex-col items-center object-cover"
                >
                    <div className="relative">
                        <div className="absolute inset-0 w-full bg-black/50 backdrop-grayscale transition-opacity duration-300 dark:opacity-0" />
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
                            className="h-auto w-[377px] object-contain"
                        />
                    </div>
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

import { IProject } from "./Project";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface ICategory<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            name: string | null;
            projects?: {
                data: IProject<ExtractNested<Populate, "projects">>[];
            };
            publishedAt: string;
            createdAt: string;
            updatedAt: string;
        },
        ExtractFlat<Populate>
    >;
}

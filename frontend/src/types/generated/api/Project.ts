import { IMedia } from "../builtins/Media";
import { ICategory } from "./Category";
import { ISeoMetadata } from "./seo/Metadata";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IProject<Populate extends string | never = never> {
    id: number;
    attributes: RequiredBy<
        {
            title: string | null;
            description: string | null;
            cover?: { data: IMedia | null };
            categories?: {
                data: ICategory<ExtractNested<Populate, "categories">>[];
            };
            meta?: ISeoMetadata<ExtractNested<Populate, "meta">> | null;
            media?: { data: IMedia[] };
            slug: string | null;
            publishedAt: string;
            createdAt: string;
            updatedAt: string;
        },
        ExtractFlat<Populate>
    >;
}

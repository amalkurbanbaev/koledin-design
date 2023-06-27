import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISeoMetadata<Populate extends string | never = never> = RequiredBy<
    {
        id: number;
        __component: "seo.metadata";
        metaTitle: string | null;
        metaDescription: string | null;
        shareImage?: { data: IMedia | null };
    },
    ExtractFlat<Populate>
>;

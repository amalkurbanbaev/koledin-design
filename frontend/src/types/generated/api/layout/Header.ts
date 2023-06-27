import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ILayoutHeader<Populate extends string | never = never> = RequiredBy<
    {
        id: number;
        __component: "layout.header";
        langs: "en" | "ru" | null;
        themes: "light" | "dark" | "pink" | null;
        headerLogo?: { data: IMedia | null };
        additionalHeaderLogo?: { data: IMedia | null };
    },
    ExtractFlat<Populate>
>;

import { ILayoutHeader } from "./layout/Header";
import { ILayoutFooter } from "./layout/Footer";
import { IMedia } from "../builtins/Media";
import { ISeoMetadata } from "./seo/Metadata";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IGlobal<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      siteTitle: string | null;
      header?: ILayoutHeader<ExtractNested<Populate, "header">> | null;
      footer?: ILayoutFooter<ExtractNested<Populate, "footer">> | null;
      favicon?: { data: IMedia | null };
      metadata?: ISeoMetadata | null;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}

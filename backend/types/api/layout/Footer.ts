import { ICommonCopyrights } from "../common/Copyrights";
import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ILayoutFooter<Populate extends string | never = never> = RequiredBy<
  {
    id: number;
    __component: "layout.footer";
    copyrights?: ICommonCopyrights | null;
    footerLogo?: { data: IMedia | null };
  },
  ExtractFlat<Populate>
>;

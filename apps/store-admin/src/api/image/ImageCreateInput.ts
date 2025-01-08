import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ImageCreateInput = {
  article?: ArticleWhereUniqueInput | null;
  image?: InputJsonValue;
};

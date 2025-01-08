import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ImageUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  image?: InputJsonValue;
};

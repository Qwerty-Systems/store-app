import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ImageWhereInput = {
  article?: ArticleWhereUniqueInput;
  id?: StringFilter;
  image?: JsonFilter;
};

import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  article?: ArticleWhereUniqueInput;
  id?: StringFilter;
  imageType?: StringNullableFilter;
  imageUrl?: StringNullableFilter;
};

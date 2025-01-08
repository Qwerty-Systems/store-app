import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";

export type ImageCreateInput = {
  article?: ArticleWhereUniqueInput | null;
  imageType?: string | null;
  imageUrl?: string | null;
};

import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";

export type ImageUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  imageType?: string | null;
  imageUrl?: string | null;
};

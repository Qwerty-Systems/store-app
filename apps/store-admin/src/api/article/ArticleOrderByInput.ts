import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  additionalImages?: SortOrder;
  articleCode?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  descriptionEn?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  keywords?: SortOrder;
  quantityPerUnit?: SortOrder;
  unit?: SortOrder;
  updatedAt?: SortOrder;
};

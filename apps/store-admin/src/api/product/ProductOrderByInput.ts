import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  additionalImages?: SortOrder;
  articleCode?: SortOrder;
  createdAt?: SortOrder;
  defaultImageUrl?: SortOrder;
  description?: SortOrder;
  descriptionEn?: SortOrder;
  id?: SortOrder;
  keywords?: SortOrder;
  quantityPerUnit?: SortOrder;
  unit?: SortOrder;
  updatedAt?: SortOrder;
};

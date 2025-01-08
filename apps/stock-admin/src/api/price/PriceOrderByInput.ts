import { SortOrder } from "../../util/SortOrder";

export type PriceOrderByInput = {
  articleId?: SortOrder;
  createdAt?: SortOrder;
  effectiveDate?: SortOrder;
  id?: SortOrder;
  priceKenya?: SortOrder;
  priceNetherlands?: SortOrder;
  updatedAt?: SortOrder;
};

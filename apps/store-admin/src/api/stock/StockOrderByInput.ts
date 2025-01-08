import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  articleId?: SortOrder;
  availableStock?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  newStock?: SortOrder;
  orderId?: SortOrder;
  outStock?: SortOrder;
  totalStock?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  articleId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  orderLocation?: SortOrder;
  orderPrice?: SortOrder;
  orderQuantity?: SortOrder;
  stockId?: SortOrder;
  updatedAt?: SortOrder;
};

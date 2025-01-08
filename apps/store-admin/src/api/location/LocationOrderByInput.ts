import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  address?: SortOrder;
  contact?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  stockId?: SortOrder;
  updatedAt?: SortOrder;
};

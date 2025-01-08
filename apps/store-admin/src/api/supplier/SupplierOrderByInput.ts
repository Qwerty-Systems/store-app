import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  contact?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  priceId?: SortOrder;
  stockId?: SortOrder;
  updatedAt?: SortOrder;
};

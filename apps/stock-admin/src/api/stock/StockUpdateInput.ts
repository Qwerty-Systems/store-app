import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { LocationUpdateManyWithoutStocksInput } from "./LocationUpdateManyWithoutStocksInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderUpdateManyWithoutStocksInput } from "./OrderUpdateManyWithoutStocksInput";
import { SupplierUpdateManyWithoutStocksInput } from "./SupplierUpdateManyWithoutStocksInput";

export type StockUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  availableStock?: number | null;
  location?: string | null;
  locations?: LocationUpdateManyWithoutStocksInput;
  newStock?: number | null;
  order?: OrderWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutStocksInput;
  outStock?: number | null;
  suppliers?: SupplierUpdateManyWithoutStocksInput;
  totalStock?: number | null;
};

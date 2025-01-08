import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { LocationCreateNestedManyWithoutStocksInput } from "./LocationCreateNestedManyWithoutStocksInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderCreateNestedManyWithoutStocksInput } from "./OrderCreateNestedManyWithoutStocksInput";
import { SupplierCreateNestedManyWithoutStocksInput } from "./SupplierCreateNestedManyWithoutStocksInput";

export type StockCreateInput = {
  article?: ArticleWhereUniqueInput | null;
  availableStock?: number | null;
  location?: string | null;
  locations?: LocationCreateNestedManyWithoutStocksInput;
  newStock?: number | null;
  order?: OrderWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutStocksInput;
  outStock?: number | null;
  suppliers?: SupplierCreateNestedManyWithoutStocksInput;
  totalStock?: number | null;
};

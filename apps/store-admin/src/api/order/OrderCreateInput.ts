import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { LocationCreateNestedManyWithoutOrdersInput } from "./LocationCreateNestedManyWithoutOrdersInput";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";
import { StockCreateNestedManyWithoutOrdersInput } from "./StockCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  article?: ArticleWhereUniqueInput | null;
  locations?: LocationCreateNestedManyWithoutOrdersInput;
  orderDate?: Date | null;
  orderLocation?: string | null;
  orderPrice?: number | null;
  orderQuantity?: number | null;
  stock?: StockWhereUniqueInput | null;
  stocks?: StockCreateNestedManyWithoutOrdersInput;
};

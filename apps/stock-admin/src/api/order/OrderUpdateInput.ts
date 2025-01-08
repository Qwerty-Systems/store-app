import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { LocationUpdateManyWithoutOrdersInput } from "./LocationUpdateManyWithoutOrdersInput";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";
import { StockUpdateManyWithoutOrdersInput } from "./StockUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  locations?: LocationUpdateManyWithoutOrdersInput;
  orderDate?: Date | null;
  orderLocation?: string | null;
  orderPrice?: number | null;
  orderQuantity?: number | null;
  stock?: StockWhereUniqueInput | null;
  stocks?: StockUpdateManyWithoutOrdersInput;
};

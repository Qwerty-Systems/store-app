import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { LocationUpdateManyWithoutOrdersInput } from "./LocationUpdateManyWithoutOrdersInput";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";
import { StockUpdateManyWithoutOrdersInput } from "./StockUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  article?: ProductWhereUniqueInput | null;
  locations?: LocationUpdateManyWithoutOrdersInput;
  orderDate?: Date | null;
  orderLocation?: string | null;
  orderPrice?: number | null;
  orderQuantity?: number | null;
  stock?: StockWhereUniqueInput | null;
  stocks?: StockUpdateManyWithoutOrdersInput;
};

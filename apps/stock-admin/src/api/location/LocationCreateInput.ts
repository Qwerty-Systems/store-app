import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type LocationCreateInput = {
  address?: string | null;
  contact?: string | null;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  stock?: StockWhereUniqueInput | null;
};

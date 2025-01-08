import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type SupplierUpdateInput = {
  contact?: string | null;
  country?: string | null;
  name?: string | null;
  price?: PriceWhereUniqueInput | null;
  stock?: StockWhereUniqueInput | null;
};

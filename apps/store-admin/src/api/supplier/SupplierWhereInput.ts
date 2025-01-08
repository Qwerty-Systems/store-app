import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type SupplierWhereInput = {
  contact?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: PriceWhereUniqueInput;
  stock?: StockWhereUniqueInput;
};

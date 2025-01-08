import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  contact?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
  stock?: StockWhereUniqueInput;
};

import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { SupplierListRelationFilter } from "../supplier/SupplierListRelationFilter";

export type StockWhereInput = {
  article?: ProductWhereUniqueInput;
  availableStock?: IntNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  locations?: LocationListRelationFilter;
  newStock?: IntNullableFilter;
  order?: OrderWhereUniqueInput;
  orders?: OrderListRelationFilter;
  outStock?: IntNullableFilter;
  suppliers?: SupplierListRelationFilter;
  totalStock?: IntNullableFilter;
};

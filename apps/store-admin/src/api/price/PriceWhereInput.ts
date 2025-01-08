import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SupplierListRelationFilter } from "../supplier/SupplierListRelationFilter";

export type PriceWhereInput = {
  article?: ProductWhereUniqueInput;
  effectiveDate?: DateTimeNullableFilter;
  id?: StringFilter;
  priceKenya?: FloatNullableFilter;
  priceNetherlands?: FloatNullableFilter;
  suppliers?: SupplierListRelationFilter;
};

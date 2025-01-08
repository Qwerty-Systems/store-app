import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SupplierCreateNestedManyWithoutPricesInput } from "./SupplierCreateNestedManyWithoutPricesInput";

export type PriceCreateInput = {
  article?: ProductWhereUniqueInput | null;
  effectiveDate?: Date | null;
  priceKenya?: number | null;
  priceNetherlands?: number | null;
  suppliers?: SupplierCreateNestedManyWithoutPricesInput;
};

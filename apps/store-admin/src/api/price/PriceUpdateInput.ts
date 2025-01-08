import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SupplierUpdateManyWithoutPricesInput } from "./SupplierUpdateManyWithoutPricesInput";

export type PriceUpdateInput = {
  article?: ProductWhereUniqueInput | null;
  effectiveDate?: Date | null;
  priceKenya?: number | null;
  priceNetherlands?: number | null;
  suppliers?: SupplierUpdateManyWithoutPricesInput;
};

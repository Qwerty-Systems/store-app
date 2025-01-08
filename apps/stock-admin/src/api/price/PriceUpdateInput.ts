import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { SupplierUpdateManyWithoutPricesInput } from "./SupplierUpdateManyWithoutPricesInput";

export type PriceUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  effectiveDate?: Date | null;
  priceKenya?: number | null;
  priceNetherlands?: number | null;
  suppliers?: SupplierUpdateManyWithoutPricesInput;
};

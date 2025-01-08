import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { SupplierCreateNestedManyWithoutPricesInput } from "./SupplierCreateNestedManyWithoutPricesInput";

export type PriceCreateInput = {
  article?: ArticleWhereUniqueInput | null;
  effectiveDate?: Date | null;
  priceKenya?: number | null;
  priceNetherlands?: number | null;
  suppliers?: SupplierCreateNestedManyWithoutPricesInput;
};

import { ImageCreateNestedManyWithoutProductsInput } from "./ImageCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { PriceCreateNestedManyWithoutProductsInput } from "./PriceCreateNestedManyWithoutProductsInput";
import { StockCreateNestedManyWithoutProductsInput } from "./StockCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  additionalImages?: string | null;
  articleCode?: string | null;
  defaultImageUrl?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  images?: ImageCreateNestedManyWithoutProductsInput;
  keywords?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  prices?: PriceCreateNestedManyWithoutProductsInput;
  quantityPerUnit?: number | null;
  stocks?: StockCreateNestedManyWithoutProductsInput;
  unit?: string | null;
};

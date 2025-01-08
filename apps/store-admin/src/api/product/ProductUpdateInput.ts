import { ImageUpdateManyWithoutProductsInput } from "./ImageUpdateManyWithoutProductsInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { PriceUpdateManyWithoutProductsInput } from "./PriceUpdateManyWithoutProductsInput";
import { StockUpdateManyWithoutProductsInput } from "./StockUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  additionalImages?: string | null;
  articleCode?: string | null;
  defaultImageUrl?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  images?: ImageUpdateManyWithoutProductsInput;
  keywords?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  prices?: PriceUpdateManyWithoutProductsInput;
  quantityPerUnit?: number | null;
  stocks?: StockUpdateManyWithoutProductsInput;
  unit?: string | null;
};

import { ImageUpdateManyWithoutArticlesInput } from "./ImageUpdateManyWithoutArticlesInput";
import { OrderUpdateManyWithoutArticlesInput } from "./OrderUpdateManyWithoutArticlesInput";
import { PriceUpdateManyWithoutArticlesInput } from "./PriceUpdateManyWithoutArticlesInput";
import { StockUpdateManyWithoutArticlesInput } from "./StockUpdateManyWithoutArticlesInput";

export type ArticleUpdateInput = {
  additionalImages?: string | null;
  articleCode?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  images?: ImageUpdateManyWithoutArticlesInput;
  keywords?: string | null;
  orders?: OrderUpdateManyWithoutArticlesInput;
  prices?: PriceUpdateManyWithoutArticlesInput;
  quantityPerUnit?: number | null;
  stocks?: StockUpdateManyWithoutArticlesInput;
  unit?: string | null;
};

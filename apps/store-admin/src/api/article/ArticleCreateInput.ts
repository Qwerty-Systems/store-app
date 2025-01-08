import { ImageCreateNestedManyWithoutArticlesInput } from "./ImageCreateNestedManyWithoutArticlesInput";
import { OrderCreateNestedManyWithoutArticlesInput } from "./OrderCreateNestedManyWithoutArticlesInput";
import { PriceCreateNestedManyWithoutArticlesInput } from "./PriceCreateNestedManyWithoutArticlesInput";
import { StockCreateNestedManyWithoutArticlesInput } from "./StockCreateNestedManyWithoutArticlesInput";

export type ArticleCreateInput = {
  additionalImages?: string | null;
  articleCode?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  images?: ImageCreateNestedManyWithoutArticlesInput;
  keywords?: string | null;
  orders?: OrderCreateNestedManyWithoutArticlesInput;
  prices?: PriceCreateNestedManyWithoutArticlesInput;
  quantityPerUnit?: number | null;
  stocks?: StockCreateNestedManyWithoutArticlesInput;
  unit?: string | null;
};

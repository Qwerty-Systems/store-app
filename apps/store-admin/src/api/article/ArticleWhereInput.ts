import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PriceListRelationFilter } from "../price/PriceListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StockListRelationFilter } from "../stock/StockListRelationFilter";

export type ArticleWhereInput = {
  additionalImages?: StringNullableFilter;
  articleCode?: StringNullableFilter;
  description?: StringNullableFilter;
  descriptionEn?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  images?: ImageListRelationFilter;
  keywords?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  prices?: PriceListRelationFilter;
  quantityPerUnit?: IntNullableFilter;
  stocks?: StockListRelationFilter;
  unit?: StringNullableFilter;
};

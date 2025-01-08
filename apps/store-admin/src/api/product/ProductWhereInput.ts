import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PriceListRelationFilter } from "../price/PriceListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StockListRelationFilter } from "../stock/StockListRelationFilter";

export type ProductWhereInput = {
  additionalImages?: StringNullableFilter;
  articleCode?: StringNullableFilter;
  defaultImageUrl?: StringNullableFilter;
  description?: StringNullableFilter;
  descriptionEn?: StringNullableFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  keywords?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  prices?: PriceListRelationFilter;
  quantityPerUnit?: IntNullableFilter;
  stocks?: StockListRelationFilter;
  unit?: StringNullableFilter;
};

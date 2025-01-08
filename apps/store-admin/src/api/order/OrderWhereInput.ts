import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";
import { StockListRelationFilter } from "../stock/StockListRelationFilter";

export type OrderWhereInput = {
  article?: ArticleWhereUniqueInput;
  id?: StringFilter;
  locations?: LocationListRelationFilter;
  orderDate?: DateTimeNullableFilter;
  orderLocation?: StringNullableFilter;
  orderPrice?: FloatNullableFilter;
  orderQuantity?: IntNullableFilter;
  stock?: StockWhereUniqueInput;
  stocks?: StockListRelationFilter;
};

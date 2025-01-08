import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ImageWhereInput = {
  article?: ProductWhereUniqueInput;
  id?: StringFilter;
  image?: JsonFilter;
};

import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ImageCreateInput = {
  article?: ProductWhereUniqueInput | null;
  image: InputJsonValue;
};

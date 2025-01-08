import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ImageUpdateInput = {
  article?: ProductWhereUniqueInput | null;
  image?: InputJsonValue;
};

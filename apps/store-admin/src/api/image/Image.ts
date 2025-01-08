import { Product } from "../product/Product";
import { JsonValue } from "type-fest";

export type Image = {
  article?: Product | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  updatedAt: Date;
};

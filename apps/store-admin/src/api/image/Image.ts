import { Article } from "../article/Article";
import { JsonValue } from "type-fest";

export type Image = {
  article?: Article | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  updatedAt: Date;
};

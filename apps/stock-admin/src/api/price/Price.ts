import { Article } from "../article/Article";
import { Supplier } from "../supplier/Supplier";

export type Price = {
  article?: Article | null;
  createdAt: Date;
  effectiveDate: Date | null;
  id: string;
  priceKenya: number | null;
  priceNetherlands: number | null;
  suppliers?: Array<Supplier>;
  updatedAt: Date;
};

import { Product } from "../product/Product";
import { Supplier } from "../supplier/Supplier";

export type Price = {
  article?: Product | null;
  createdAt: Date;
  effectiveDate: Date | null;
  id: string;
  priceKenya: number | null;
  priceNetherlands: number | null;
  suppliers?: Array<Supplier>;
  updatedAt: Date;
};

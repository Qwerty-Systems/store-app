import { Product } from "../product/Product";
import { Location } from "../location/Location";
import { Stock } from "../stock/Stock";

export type Order = {
  article?: Product | null;
  createdAt: Date;
  id: string;
  locations?: Array<Location>;
  orderDate: Date | null;
  orderLocation: string | null;
  orderPrice: number | null;
  orderQuantity: number | null;
  stock?: Stock | null;
  stocks?: Array<Stock>;
  updatedAt: Date;
};

import { Article } from "../article/Article";
import { Location } from "../location/Location";
import { Order } from "../order/Order";
import { Supplier } from "../supplier/Supplier";

export type Stock = {
  article?: Article | null;
  availableStock: number | null;
  createdAt: Date;
  id: string;
  location: string | null;
  locations?: Array<Location>;
  newStock: number | null;
  order?: Order | null;
  orders?: Array<Order>;
  outStock: number | null;
  suppliers?: Array<Supplier>;
  totalStock: number | null;
  updatedAt: Date;
};

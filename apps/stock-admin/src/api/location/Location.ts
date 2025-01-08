import { Order } from "../order/Order";
import { Stock } from "../stock/Stock";

export type Location = {
  address: string | null;
  contact: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  order?: Order | null;
  stock?: Stock | null;
  updatedAt: Date;
};

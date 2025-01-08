import { Price } from "../price/Price";
import { Stock } from "../stock/Stock";

export type Supplier = {
  contact: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  price?: Price | null;
  stock?: Stock | null;
  updatedAt: Date;
};

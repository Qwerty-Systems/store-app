import { Image } from "../image/Image";
import { Order } from "../order/Order";
import { Price } from "../price/Price";
import { Stock } from "../stock/Stock";

export type Product = {
  additionalImages: string | null;
  articleCode: string | null;
  createdAt: Date;
  defaultImageUrl: string | null;
  description: string | null;
  descriptionEn: string | null;
  id: string;
  images?: Array<Image>;
  keywords: string | null;
  orders?: Array<Order>;
  prices?: Array<Price>;
  quantityPerUnit: number | null;
  stocks?: Array<Stock>;
  unit: string | null;
  updatedAt: Date;
};

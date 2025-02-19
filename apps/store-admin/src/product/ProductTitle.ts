import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "articleCode";

export const ProductTitle = (record: TProduct): string => {
  return record.articleCode?.toString() || String(record.id);
};

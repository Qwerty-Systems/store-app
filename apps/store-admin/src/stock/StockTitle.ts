import { Stock as TStock } from "../api/stock/Stock";

export const STOCK_TITLE_FIELD = "location";

export const StockTitle = (record: TStock): string => {
  return record.location?.toString() || String(record.id);
};

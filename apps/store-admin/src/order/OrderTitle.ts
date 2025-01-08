import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "orderLocation";

export const OrderTitle = (record: TOrder): string => {
  return record.orderLocation?.toString() || String(record.id);
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { STOCK_TITLE_FIELD } from "../stock/StockTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Article" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="orderDate" source="orderDate" />
        <TextField label="orderLocation" source="orderLocation" />
        <TextField label="orderPrice" source="orderPrice" />
        <TextField label="orderQuantity" source="orderQuantity" />
        <ReferenceField label="Stock" source="stock.id" reference="Stock">
          <TextField source={STOCK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Location"
          target="orderId"
          label="Locations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="address" source="address" />
            <TextField label="contact" source="contact" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Stock" source="stock.id" reference="Stock">
              <TextField source={STOCK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Stock" target="orderId" label="Stocks">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Article"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="availableStock" source="availableStock" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="location" source="location" />
            <TextField label="newStock" source="newStock" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="outStock" source="outStock" />
            <TextField label="totalStock" source="totalStock" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

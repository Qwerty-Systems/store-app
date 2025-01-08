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

import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { STOCK_TITLE_FIELD } from "./StockTitle";
import { ARTICLE_TITLE_FIELD } from "../article/ArticleTitle";
import { PRICE_TITLE_FIELD } from "../price/PriceTitle";

export const StockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Article" source="article.id" reference="Article">
          <TextField source={ARTICLE_TITLE_FIELD} />
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
        <ReferenceManyField
          reference="Location"
          target="stockId"
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
        <ReferenceManyField reference="Order" target="stockId" label="Orders">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Article"
              source="article.id"
              reference="Article"
            >
              <TextField source={ARTICLE_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Supplier"
          target="stockId"
          label="Suppliers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="contact" source="contact" />
            <TextField label="country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField label="Price" source="price.id" reference="Price">
              <TextField source={PRICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Stock" source="stock.id" reference="Stock">
              <TextField source={STOCK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

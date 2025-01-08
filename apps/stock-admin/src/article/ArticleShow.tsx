import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ARTICLE_TITLE_FIELD } from "./ArticleTitle";
import { STOCK_TITLE_FIELD } from "../stock/StockTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const ArticleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="additionalImages" source="additionalImages" />
        <TextField label="articleCode" source="articleCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="descriptionEN" source="descriptionEn" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="keywords" source="keywords" />
        <TextField label="quantityPerUnit" source="quantityPerUnit" />
        <TextField label="unit" source="unit" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Image" target="articleId" label="Images">
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
            <TextField label="imageType" source="imageType" />
            <TextField label="imageUrl" source="imageUrl" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Order" target="articleId" label="Orders">
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
        <ReferenceManyField reference="Price" target="articleId" label="Prices">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Article"
              source="article.id"
              reference="Article"
            >
              <TextField source={ARTICLE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="effectiveDate" source="effectiveDate" />
            <TextField label="ID" source="id" />
            <TextField label="priceKenya" source="priceKenya" />
            <TextField label="priceNetherlands" source="priceNetherlands" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Stock" target="articleId" label="Stocks">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Article"
              source="article.id"
              reference="Article"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

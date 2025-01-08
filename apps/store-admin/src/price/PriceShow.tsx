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

import { PRICE_TITLE_FIELD } from "./PriceTitle";
import { STOCK_TITLE_FIELD } from "../stock/StockTitle";
import { ARTICLE_TITLE_FIELD } from "../article/ArticleTitle";

export const PriceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Article" source="article.id" reference="Article">
          <TextField source={ARTICLE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="effectiveDate" source="effectiveDate" />
        <TextField label="ID" source="id" />
        <TextField label="priceKenya" source="priceKenya" />
        <TextField label="priceNetherlands" source="priceNetherlands" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Supplier"
          target="priceId"
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

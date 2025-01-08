import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRICE_TITLE_FIELD } from "../price/PriceTitle";
import { STOCK_TITLE_FIELD } from "../stock/StockTitle";

export const SupplierList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Suppliers"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

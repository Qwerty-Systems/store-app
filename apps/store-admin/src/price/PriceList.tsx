import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ARTICLE_TITLE_FIELD } from "../article/ArticleTitle";

export const PriceList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Prices"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Article" source="article.id" reference="Article">
          <TextField source={ARTICLE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="effectiveDate" source="effectiveDate" />
        <TextField label="ID" source="id" />
        <TextField label="priceKenya" source="priceKenya" />
        <TextField label="priceNetherlands" source="priceNetherlands" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

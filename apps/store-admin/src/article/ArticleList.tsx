import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ArticleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Articles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="additionalImages" source="additionalImages" />
        <TextField label="articleCode" source="articleCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="descriptionEN" source="descriptionEn" />
        <TextField label="ID" source="id" />
        <TextField label="keywords" source="keywords" />
        <TextField label="quantityPerUnit" source="quantityPerUnit" />
        <TextField label="unit" source="unit" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

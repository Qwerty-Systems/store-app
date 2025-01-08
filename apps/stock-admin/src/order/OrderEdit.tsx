import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ArticleTitle } from "../article/ArticleTitle";
import { LocationTitle } from "../location/LocationTitle";
import { StockTitle } from "../stock/StockTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Article" label="Article">
          <SelectInput optionText={ArticleTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="locations" reference="Location">
          <SelectArrayInput
            optionText={LocationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="orderDate" source="orderDate" />
        <TextInput label="orderLocation" source="orderLocation" />
        <NumberInput label="orderPrice" source="orderPrice" />
        <NumberInput step={1} label="orderQuantity" source="orderQuantity" />
        <ReferenceInput source="stock.id" reference="Stock" label="Stock">
          <SelectInput optionText={StockTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="stocks" reference="Stock">
          <SelectArrayInput
            optionText={StockTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

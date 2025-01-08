import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ArticleTitle } from "../article/ArticleTitle";
import { LocationTitle } from "../location/LocationTitle";
import { OrderTitle } from "../order/OrderTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const StockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Article" label="Article">
          <SelectInput optionText={ArticleTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="availableStock" source="availableStock" />
        <TextInput label="location" source="location" />
        <ReferenceArrayInput source="locations" reference="Location">
          <SelectArrayInput
            optionText={LocationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="newStock" source="newStock" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="outStock" source="outStock" />
        <ReferenceArrayInput source="suppliers" reference="Supplier">
          <SelectArrayInput
            optionText={SupplierTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="totalStock" source="totalStock" />
      </SimpleForm>
    </Create>
  );
};

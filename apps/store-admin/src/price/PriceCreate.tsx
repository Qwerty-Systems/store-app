import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const PriceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Product" label="Article">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <DateTimeInput label="effectiveDate" source="effectiveDate" />
        <NumberInput label="priceKenya" source="priceKenya" />
        <NumberInput label="priceNetherlands" source="priceNetherlands" />
        <ReferenceArrayInput source="suppliers" reference="Supplier">
          <SelectArrayInput
            optionText={SupplierTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

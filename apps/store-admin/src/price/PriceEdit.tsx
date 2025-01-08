import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const PriceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

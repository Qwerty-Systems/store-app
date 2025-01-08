import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Product" label="Article">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};

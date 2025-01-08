import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Product" label="Article">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};

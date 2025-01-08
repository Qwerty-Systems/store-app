import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ArticleTitle } from "../article/ArticleTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Article" label="Article">
          <SelectInput optionText={ArticleTitle} />
        </ReferenceInput>
        <TextInput label="imageType" source="imageType" />
        <TextInput label="imageUrl" source="imageUrl" />
      </SimpleForm>
    </Edit>
  );
};

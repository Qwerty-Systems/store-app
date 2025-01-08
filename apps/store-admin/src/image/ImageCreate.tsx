import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ArticleTitle } from "../article/ArticleTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Article" label="Article">
          <SelectInput optionText={ArticleTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};

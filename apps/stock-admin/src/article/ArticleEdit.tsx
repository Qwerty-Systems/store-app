import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ImageTitle } from "../image/ImageTitle";
import { OrderTitle } from "../order/OrderTitle";
import { PriceTitle } from "../price/PriceTitle";
import { StockTitle } from "../stock/StockTitle";

export const ArticleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="additionalImages"
          multiline
          source="additionalImages"
        />
        <TextInput label="articleCode" source="articleCode" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="descriptionEN" multiline source="descriptionEn" />
        <TextInput label="imageUrl" source="imageUrl" />
        <ReferenceArrayInput source="images" reference="Image">
          <SelectArrayInput
            optionText={ImageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="keywords" multiline source="keywords" />
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="prices" reference="Price">
          <SelectArrayInput
            optionText={PriceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="quantityPerUnit"
          source="quantityPerUnit"
        />
        <ReferenceArrayInput source="stocks" reference="Stock">
          <SelectArrayInput
            optionText={StockTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="unit" source="unit" />
      </SimpleForm>
    </Edit>
  );
};

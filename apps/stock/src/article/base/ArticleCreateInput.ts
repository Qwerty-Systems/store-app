/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { ImageCreateNestedManyWithoutArticlesInput } from "./ImageCreateNestedManyWithoutArticlesInput";
import { Type } from "class-transformer";
import { OrderCreateNestedManyWithoutArticlesInput } from "./OrderCreateNestedManyWithoutArticlesInput";
import { PriceCreateNestedManyWithoutArticlesInput } from "./PriceCreateNestedManyWithoutArticlesInput";
import { StockCreateNestedManyWithoutArticlesInput } from "./StockCreateNestedManyWithoutArticlesInput";

@InputType()
class ArticleCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  additionalImages?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  articleCode?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  descriptionEn?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageUrl?: string | null;

  @ApiProperty({
    required: false,
    type: () => ImageCreateNestedManyWithoutArticlesInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutArticlesInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutArticlesInput, {
    nullable: true,
  })
  images?: ImageCreateNestedManyWithoutArticlesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  keywords?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutArticlesInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutArticlesInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutArticlesInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutArticlesInput;

  @ApiProperty({
    required: false,
    type: () => PriceCreateNestedManyWithoutArticlesInput,
  })
  @ValidateNested()
  @Type(() => PriceCreateNestedManyWithoutArticlesInput)
  @IsOptional()
  @Field(() => PriceCreateNestedManyWithoutArticlesInput, {
    nullable: true,
  })
  prices?: PriceCreateNestedManyWithoutArticlesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantityPerUnit?: number | null;

  @ApiProperty({
    required: false,
    type: () => StockCreateNestedManyWithoutArticlesInput,
  })
  @ValidateNested()
  @Type(() => StockCreateNestedManyWithoutArticlesInput)
  @IsOptional()
  @Field(() => StockCreateNestedManyWithoutArticlesInput, {
    nullable: true,
  })
  stocks?: StockCreateNestedManyWithoutArticlesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  unit?: string | null;
}

export { ArticleCreateInput as ArticleCreateInput };

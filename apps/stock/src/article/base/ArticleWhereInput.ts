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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../../image/base/ImageListRelationFilter";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
import { PriceListRelationFilter } from "../../price/base/PriceListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StockListRelationFilter } from "../../stock/base/StockListRelationFilter";

@InputType()
class ArticleWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  additionalImages?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  articleCode?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  descriptionEn?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  imageUrl?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ImageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ImageListRelationFilter)
  @IsOptional()
  @Field(() => ImageListRelationFilter, {
    nullable: true,
  })
  images?: ImageListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  keywords?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => OrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderListRelationFilter)
  @IsOptional()
  @Field(() => OrderListRelationFilter, {
    nullable: true,
  })
  orders?: OrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PriceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PriceListRelationFilter)
  @IsOptional()
  @Field(() => PriceListRelationFilter, {
    nullable: true,
  })
  prices?: PriceListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  quantityPerUnit?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => StockListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StockListRelationFilter)
  @IsOptional()
  @Field(() => StockListRelationFilter, {
    nullable: true,
  })
  stocks?: StockListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  unit?: StringNullableFilter;
}

export { ArticleWhereInput as ArticleWhereInput };

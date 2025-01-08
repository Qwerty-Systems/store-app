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
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { LocationCreateNestedManyWithoutStocksInput } from "./LocationCreateNestedManyWithoutStocksInput";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { OrderCreateNestedManyWithoutStocksInput } from "./OrderCreateNestedManyWithoutStocksInput";
import { SupplierCreateNestedManyWithoutStocksInput } from "./SupplierCreateNestedManyWithoutStocksInput";

@InputType()
class StockCreateInput {
  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  article?: ProductWhereUniqueInput | null;

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
  availableStock?: number | null;

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
  location?: string | null;

  @ApiProperty({
    required: false,
    type: () => LocationCreateNestedManyWithoutStocksInput,
  })
  @ValidateNested()
  @Type(() => LocationCreateNestedManyWithoutStocksInput)
  @IsOptional()
  @Field(() => LocationCreateNestedManyWithoutStocksInput, {
    nullable: true,
  })
  locations?: LocationCreateNestedManyWithoutStocksInput;

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
  newStock?: number | null;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutStocksInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutStocksInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutStocksInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutStocksInput;

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
  outStock?: number | null;

  @ApiProperty({
    required: false,
    type: () => SupplierCreateNestedManyWithoutStocksInput,
  })
  @ValidateNested()
  @Type(() => SupplierCreateNestedManyWithoutStocksInput)
  @IsOptional()
  @Field(() => SupplierCreateNestedManyWithoutStocksInput, {
    nullable: true,
  })
  suppliers?: SupplierCreateNestedManyWithoutStocksInput;

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
  totalStock?: number | null;
}

export { StockCreateInput as StockCreateInput };

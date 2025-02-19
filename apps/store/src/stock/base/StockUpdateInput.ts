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
import { LocationUpdateManyWithoutStocksInput } from "./LocationUpdateManyWithoutStocksInput";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { OrderUpdateManyWithoutStocksInput } from "./OrderUpdateManyWithoutStocksInput";
import { SupplierUpdateManyWithoutStocksInput } from "./SupplierUpdateManyWithoutStocksInput";

@InputType()
class StockUpdateInput {
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
    type: () => LocationUpdateManyWithoutStocksInput,
  })
  @ValidateNested()
  @Type(() => LocationUpdateManyWithoutStocksInput)
  @IsOptional()
  @Field(() => LocationUpdateManyWithoutStocksInput, {
    nullable: true,
  })
  locations?: LocationUpdateManyWithoutStocksInput;

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
    type: () => OrderUpdateManyWithoutStocksInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutStocksInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutStocksInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutStocksInput;

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
    type: () => SupplierUpdateManyWithoutStocksInput,
  })
  @ValidateNested()
  @Type(() => SupplierUpdateManyWithoutStocksInput)
  @IsOptional()
  @Field(() => SupplierUpdateManyWithoutStocksInput, {
    nullable: true,
  })
  suppliers?: SupplierUpdateManyWithoutStocksInput;

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

export { StockUpdateInput as StockUpdateInput };

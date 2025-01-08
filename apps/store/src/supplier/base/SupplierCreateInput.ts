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
} from "class-validator";
import { PriceWhereUniqueInput } from "../../price/base/PriceWhereUniqueInput";
import { Type } from "class-transformer";
import { StockWhereUniqueInput } from "../../stock/base/StockWhereUniqueInput";

@InputType()
class SupplierCreateInput {
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
  contact?: string | null;

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
  country?: string | null;

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
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PriceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PriceWhereUniqueInput)
  @IsOptional()
  @Field(() => PriceWhereUniqueInput, {
    nullable: true,
  })
  price?: PriceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => StockWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StockWhereUniqueInput)
  @IsOptional()
  @Field(() => StockWhereUniqueInput, {
    nullable: true,
  })
  stock?: StockWhereUniqueInput | null;
}

export { SupplierCreateInput as SupplierCreateInput };

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
  IsDate,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { SupplierUpdateManyWithoutPricesInput } from "./SupplierUpdateManyWithoutPricesInput";

@InputType()
class PriceUpdateInput {
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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  effectiveDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  priceKenya?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  priceNetherlands?: number | null;

  @ApiProperty({
    required: false,
    type: () => SupplierUpdateManyWithoutPricesInput,
  })
  @ValidateNested()
  @Type(() => SupplierUpdateManyWithoutPricesInput)
  @IsOptional()
  @Field(() => SupplierUpdateManyWithoutPricesInput, {
    nullable: true,
  })
  suppliers?: SupplierUpdateManyWithoutPricesInput;
}

export { PriceUpdateInput as PriceUpdateInput };

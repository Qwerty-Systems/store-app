/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PriceService } from "../price.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PriceCreateInput } from "./PriceCreateInput";
import { Price } from "./Price";
import { PriceFindManyArgs } from "./PriceFindManyArgs";
import { PriceWhereUniqueInput } from "./PriceWhereUniqueInput";
import { PriceUpdateInput } from "./PriceUpdateInput";
import { SupplierFindManyArgs } from "../../supplier/base/SupplierFindManyArgs";
import { Supplier } from "../../supplier/base/Supplier";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PriceControllerBase {
  constructor(
    protected readonly service: PriceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Price })
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPrice(@common.Body() data: PriceCreateInput): Promise<Price> {
    return await this.service.createPrice({
      data: {
        ...data,

        article: data.article
          ? {
              connect: data.article,
            }
          : undefined,
      },
      select: {
        article: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        effectiveDate: true,
        id: true,
        priceKenya: true,
        priceNetherlands: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Price] })
  @ApiNestedQuery(PriceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async prices(@common.Req() request: Request): Promise<Price[]> {
    const args = plainToClass(PriceFindManyArgs, request.query);
    return this.service.prices({
      ...args,
      select: {
        article: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        effectiveDate: true,
        id: true,
        priceKenya: true,
        priceNetherlands: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Price })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async price(
    @common.Param() params: PriceWhereUniqueInput
  ): Promise<Price | null> {
    const result = await this.service.price({
      where: params,
      select: {
        article: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        effectiveDate: true,
        id: true,
        priceKenya: true,
        priceNetherlands: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Price })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePrice(
    @common.Param() params: PriceWhereUniqueInput,
    @common.Body() data: PriceUpdateInput
  ): Promise<Price | null> {
    try {
      return await this.service.updatePrice({
        where: params,
        data: {
          ...data,

          article: data.article
            ? {
                connect: data.article,
              }
            : undefined,
        },
        select: {
          article: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          effectiveDate: true,
          id: true,
          priceKenya: true,
          priceNetherlands: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Price })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePrice(
    @common.Param() params: PriceWhereUniqueInput
  ): Promise<Price | null> {
    try {
      return await this.service.deletePrice({
        where: params,
        select: {
          article: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          effectiveDate: true,
          id: true,
          priceKenya: true,
          priceNetherlands: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/suppliers")
  @ApiNestedQuery(SupplierFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "read",
    possession: "any",
  })
  async findSuppliers(
    @common.Req() request: Request,
    @common.Param() params: PriceWhereUniqueInput
  ): Promise<Supplier[]> {
    const query = plainToClass(SupplierFindManyArgs, request.query);
    const results = await this.service.findSuppliers(params.id, {
      ...query,
      select: {
        contact: true,
        country: true,
        createdAt: true,
        id: true,
        name: true,

        price: {
          select: {
            id: true,
          },
        },

        stock: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/suppliers")
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "update",
    possession: "any",
  })
  async connectSuppliers(
    @common.Param() params: PriceWhereUniqueInput,
    @common.Body() body: SupplierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      suppliers: {
        connect: body,
      },
    };
    await this.service.updatePrice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/suppliers")
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "update",
    possession: "any",
  })
  async updateSuppliers(
    @common.Param() params: PriceWhereUniqueInput,
    @common.Body() body: SupplierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      suppliers: {
        set: body,
      },
    };
    await this.service.updatePrice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/suppliers")
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "update",
    possession: "any",
  })
  async disconnectSuppliers(
    @common.Param() params: PriceWhereUniqueInput,
    @common.Body() body: SupplierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      suppliers: {
        disconnect: body,
      },
    };
    await this.service.updatePrice({
      where: params,
      data,
      select: { id: true },
    });
  }
}

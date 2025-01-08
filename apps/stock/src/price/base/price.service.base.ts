/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Price as PrismaPrice,
  Supplier as PrismaSupplier,
  Article as PrismaArticle,
} from "@prisma/client";

export class PriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PriceCountArgs, "select">): Promise<number> {
    return this.prisma.price.count(args);
  }

  async prices(args: Prisma.PriceFindManyArgs): Promise<PrismaPrice[]> {
    return this.prisma.price.findMany(args);
  }
  async price(args: Prisma.PriceFindUniqueArgs): Promise<PrismaPrice | null> {
    return this.prisma.price.findUnique(args);
  }
  async createPrice(args: Prisma.PriceCreateArgs): Promise<PrismaPrice> {
    return this.prisma.price.create(args);
  }
  async updatePrice(args: Prisma.PriceUpdateArgs): Promise<PrismaPrice> {
    return this.prisma.price.update(args);
  }
  async deletePrice(args: Prisma.PriceDeleteArgs): Promise<PrismaPrice> {
    return this.prisma.price.delete(args);
  }

  async findSuppliers(
    parentId: string,
    args: Prisma.SupplierFindManyArgs
  ): Promise<PrismaSupplier[]> {
    return this.prisma.price
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .suppliers(args);
  }

  async getArticle(parentId: string): Promise<PrismaArticle | null> {
    return this.prisma.price
      .findUnique({
        where: { id: parentId },
      })
      .article();
  }
}

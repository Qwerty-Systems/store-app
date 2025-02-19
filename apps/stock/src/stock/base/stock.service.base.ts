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
  Stock as PrismaStock,
  Location as PrismaLocation,
  Order as PrismaOrder,
  Supplier as PrismaSupplier,
  Article as PrismaArticle,
} from "@prisma/client";

export class StockServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StockCountArgs, "select">): Promise<number> {
    return this.prisma.stock.count(args);
  }

  async stocks(args: Prisma.StockFindManyArgs): Promise<PrismaStock[]> {
    return this.prisma.stock.findMany(args);
  }
  async stock(args: Prisma.StockFindUniqueArgs): Promise<PrismaStock | null> {
    return this.prisma.stock.findUnique(args);
  }
  async createStock(args: Prisma.StockCreateArgs): Promise<PrismaStock> {
    return this.prisma.stock.create(args);
  }
  async updateStock(args: Prisma.StockUpdateArgs): Promise<PrismaStock> {
    return this.prisma.stock.update(args);
  }
  async deleteStock(args: Prisma.StockDeleteArgs): Promise<PrismaStock> {
    return this.prisma.stock.delete(args);
  }

  async findLocations(
    parentId: string,
    args: Prisma.LocationFindManyArgs
  ): Promise<PrismaLocation[]> {
    return this.prisma.stock
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .locations(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.stock
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async findSuppliers(
    parentId: string,
    args: Prisma.SupplierFindManyArgs
  ): Promise<PrismaSupplier[]> {
    return this.prisma.stock
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .suppliers(args);
  }

  async getArticle(parentId: string): Promise<PrismaArticle | null> {
    return this.prisma.stock
      .findUnique({
        where: { id: parentId },
      })
      .article();
  }

  async getOrder(parentId: string): Promise<PrismaOrder | null> {
    return this.prisma.stock
      .findUnique({
        where: { id: parentId },
      })
      .order();
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { ImageServiceBase } from "./base/image.service.base";

@Injectable()
export class ImageService extends ImageServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {
    super(prisma, localStorageService);
  }
}

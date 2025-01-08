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
  Image as PrismaImage,
  Article as PrismaArticle,
} from "@prisma/client";
import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { InputJsonValue } from "src/types";
import { FileDownload, FileUpload } from "src/storage/base/storage.types";
import { LocalStorageFile } from "src/storage/providers/local/local.storage.types";

export class ImageServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {}

  async count(args: Omit<Prisma.ImageCountArgs, "select">): Promise<number> {
    return this.prisma.image.count(args);
  }

  async images(args: Prisma.ImageFindManyArgs): Promise<PrismaImage[]> {
    return this.prisma.image.findMany(args);
  }
  async image(args: Prisma.ImageFindUniqueArgs): Promise<PrismaImage | null> {
    return this.prisma.image.findUnique(args);
  }
  async createImage(args: Prisma.ImageCreateArgs): Promise<PrismaImage> {
    return this.prisma.image.create(args);
  }
  async updateImage(args: Prisma.ImageUpdateArgs): Promise<PrismaImage> {
    return this.prisma.image.update(args);
  }
  async deleteImage(args: Prisma.ImageDeleteArgs): Promise<PrismaImage> {
    return this.prisma.image.delete(args);
  }

  async uploadImage<T extends Prisma.ImageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaImage> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "/";
    const image = await this.localStorageService.uploadFile(
      file,
      [],
      5000,
      containerPath
    );

    return await this.prisma.image.update({
      where: args.where,

      data: {
        image: image as InputJsonValue,
      },
    });
  }

  async downloadImage<T extends Prisma.ImageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageFindUniqueArgs>
  ): Promise<FileDownload> {
    const { image } = await this.prisma.image.findUniqueOrThrow({
      where: args.where,
    });

    return await this.localStorageService.downloadFile(
      image as unknown as LocalStorageFile
    );
  }

  async deleteImage<T extends Prisma.ImageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageFindUniqueArgs>
  ): Promise<PrismaImage> {
    const { image } = await this.prisma.image.findUniqueOrThrow({
      where: args.where,
    });

    await this.localStorageService.deleteFile(
      image as unknown as LocalStorageFile
    );

    return await this.prisma.image.update({
      where: args.where,

      data: {
        image: Prisma.DbNull,
      },
    });
  }

  async getArticle(parentId: string): Promise<PrismaArticle | null> {
    return this.prisma.image
      .findUnique({
        where: { id: parentId },
      })
      .article();
  }
}

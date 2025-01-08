import { Article } from "../article/Article";

export type Image = {
  article?: Article | null;
  createdAt: Date;
  id: string;
  imageType: string | null;
  imageUrl: string | null;
  updatedAt: Date;
};

import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  articleId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageType?: SortOrder;
  imageUrl?: SortOrder;
  updatedAt?: SortOrder;
};

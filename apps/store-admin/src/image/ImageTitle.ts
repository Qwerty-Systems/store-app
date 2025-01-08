import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "imageType";

export const ImageTitle = (record: TImage): string => {
  return record.imageType?.toString() || String(record.id);
};

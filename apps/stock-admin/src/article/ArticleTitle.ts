import { Article as TArticle } from "../api/article/Article";

export const ARTICLE_TITLE_FIELD = "articleCode";

export const ArticleTitle = (record: TArticle): string => {
  return record.articleCode?.toString() || String(record.id);
};

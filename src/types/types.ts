export type ArticleType = Array<{
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
}>;

export type ArticleTypeChild = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};

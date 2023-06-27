export interface IPage {
  id: number;
  attributes: {
    page: string | null;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

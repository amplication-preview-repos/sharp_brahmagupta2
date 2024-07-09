export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  post: string | null;
};

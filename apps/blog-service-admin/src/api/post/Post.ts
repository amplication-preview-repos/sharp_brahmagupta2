import { Author } from "../author/Author";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  author?: Author | null;
};

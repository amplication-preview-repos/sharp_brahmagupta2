import { Post } from "../post/Post";

export type Author = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  posts?: Array<Post>;
};

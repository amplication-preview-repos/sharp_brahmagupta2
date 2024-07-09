import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type PostUpdateInput = {
  title?: string | null;
  content?: string | null;
  author?: AuthorWhereUniqueInput | null;
};

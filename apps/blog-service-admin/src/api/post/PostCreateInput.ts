import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type PostCreateInput = {
  title?: string | null;
  content?: string | null;
  author?: AuthorWhereUniqueInput | null;
};

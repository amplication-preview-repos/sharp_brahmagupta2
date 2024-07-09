import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  name?: string | null;
  email?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
};

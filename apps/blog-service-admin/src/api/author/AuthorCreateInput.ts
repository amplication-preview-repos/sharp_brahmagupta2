import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  name?: string | null;
  email?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
};

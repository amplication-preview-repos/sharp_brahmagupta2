import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type PostWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  author?: AuthorWhereUniqueInput;
};

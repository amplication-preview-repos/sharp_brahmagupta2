import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CommentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  post?: StringNullableFilter;
};

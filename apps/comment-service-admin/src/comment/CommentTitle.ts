import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "post";

export const CommentTitle = (record: TComment): string => {
  return record.post?.toString() || String(record.id);
};

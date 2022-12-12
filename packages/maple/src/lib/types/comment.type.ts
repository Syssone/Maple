export class CommentType {
  comment_id: number | undefined;
  comment_post_id: number | undefined;
  comment_author: string | undefined;
  comment_author_email: string | undefined;
  comment_author_url: string | undefined;
  comment_author_ip: string | undefined;
  comment_date: number | undefined;
  comment_date_gmt: number | undefined;
  comment_content: string | undefined;
  comment_karma: number | undefined;
  comment_approved: string | undefined;
  comment_agent: string | undefined;
  comment_type: string | undefined;
  comment_parent: number | undefined;
  user_id: number | undefined;
}

export class CommentMetaType {
  meta_id: number | undefined;
  comment_id: number | undefined;
  meta_key: string | undefined;
  meta_value: string | undefined;
}

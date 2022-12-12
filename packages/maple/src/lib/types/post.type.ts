export class PostType {
  id: number | undefined;
  post_author: string | undefined;
  post_date: number | undefined;
  post_date_gmt: number | undefined;
  post_content: string | undefined;
  post_title: string | undefined;
  post_excerpt: string | undefined;
  post_status: string | undefined;
  comment_status: string | undefined;
  ping_status: string | undefined;
  post_password: string | undefined;
  post_name: string | undefined;
  to_ping: string | undefined;
  pinged: string | undefined;
  post_modified: number | undefined;
  post_modified_gmt: number | undefined;
  post_content_filtered: string | undefined;
  post_parent: number | undefined;
  guid: string | undefined;
  menu_order: number | undefined;
  post_type: string | undefined;
  post_mime_type: string | undefined;
}

export class PostMetaType {
  meta_id: number | undefined;
  post_id: number | undefined;
  meta_key: string | undefined;
  meta_value: string | undefined;
}

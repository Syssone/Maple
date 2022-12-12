export class UserType {
  id: number | undefined;
  user_login: string | undefined;
  user_pass: string | undefined;
  user_nicename: string | undefined;
  user_email: string | undefined;
  user_url: string | undefined;
  user_registered: number | undefined;
  user_activation_key: string | undefined;
  user_status: number | undefined;
  display_name: string | undefined;
}

export class UserMetaType {
  umeta_id: number | undefined;
  user_id: number | undefined;
  meta_key: string | undefined;
  meta_value: string | undefined;
}

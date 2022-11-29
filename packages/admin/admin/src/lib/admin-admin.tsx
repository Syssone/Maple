import styles from './admin-admin.module.css';

/* eslint-disable-next-line */
export interface AdminAdminProps {}

export function AdminAdmin(props: AdminAdminProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdminAdmin!</h1>
    </div>
  );
}

export default AdminAdmin;

import { useUser } from "@/shared/services/user/hooks/useUser";
import styles from "./user.page.module.scss";
export const UserPage = () => {
	const { currentUser } = useUser();

	return <div className={styles.user_page}></div>;
};

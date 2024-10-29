import { UserInfoCard } from "@features/UserInfoCard/UserInfoCard.tsx";
import styles from "./ProfilePage.module.scss";

export const ProfilePage = () => {
	// if (loading) return "loading...";

	return (
		<div className={styles.profile_page}>
			<UserInfoCard />
		</div>
	);
};

export default ProfilePage;

import { useUser } from "@/shared/services/user/useUser.tsx";
import styles from "./profile_edit.page.module.scss";

export const ProfileAchievementsPage = () => {
	const { currentUser } = useUser();

	return (
		<div className={styles.profile_achievements_page}>
			<span>Achievements</span>
			<div></div>
		</div>
	);
};

export default ProfileAchievementsPage;

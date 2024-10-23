import { AnimeUserRates } from "@features/AnimeUserRates/AnimeUserRates.tsx";
import { UserInfoCard } from "@features/UserInfoCard/UserInfoCard.tsx";
import styles from "./ProfilePage.module.scss";

export const ProfilePage = () => {
	// if (loading) return "loading...";

	return (
		<div className={styles.profile_page}>
			<UserInfoCard />
			<div className={styles.anime_user_rates}>
				<span className={styles.title}>Watching</span>
				<AnimeUserRates />
			</div>
		</div>
	);
};

export default ProfilePage;

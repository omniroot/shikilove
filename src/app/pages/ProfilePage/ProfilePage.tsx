import { AnimeUserRates } from "@features/AnimeUserRates/AnimeUserRates.tsx";
import { UserInfoCard } from "@features/UserInfoCard/UserInfoCard.tsx";
import styles from "./ProfilePage.module.scss";
import { AnimeInfoSection } from "@features/AnimeInfoSection/AnimeInfoSection.tsx";

export const ProfilePage = () => {
	// if (loading) return "loading...";

	return (
		<div className={styles.profile_page}>
			<UserInfoCard />
			<AnimeInfoSection title="Watching">
				<AnimeUserRates />
			</AnimeInfoSection>
		</div>
	);
};

export default ProfilePage;

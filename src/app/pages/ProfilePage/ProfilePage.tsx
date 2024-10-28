import { AnimeUserRates } from "@features/AnimeUserRates/AnimeUserRates.tsx";
import { UserInfoCard } from "@features/UserInfoCard/UserInfoCard.tsx";
import styles from "./ProfilePage.module.scss";
import { AnimeInfoSection } from "@features/AnimeInfoSection/AnimeInfoSection.tsx";
import { useSearchParams } from "react-router-dom";

export const ProfilePage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const status = searchParams.get("status");
	if (!status) setSearchParams({ status: "watching" });

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

import { useUser } from "@/shared/services/user/useUser.tsx";
import { AchievementsButton, ProfileInfoCard, ProfileUserRates } from "@pages/profile/_components";
import { FC, ReactNode } from "react";
import styles from "./profile.page.module.scss";

interface IProfilePageProps {
	children?: ReactNode;
}

export const ProfilePage: FC<IProfilePageProps> = () => {
	const { currentUser } = useUser();

	return (
		<div className={styles.profile_page}>
			<ProfileInfoCard currentUser={currentUser} />
			<AchievementsButton />
			<ProfileUserRates />
		</div>
	);
};

export default ProfilePage;

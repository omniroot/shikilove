import { AchievementsButton, ProfileInfoCard, ProfileUserRates } from "@pages/profile/_components";
import { FC, ReactNode } from "react";
import styles from "./profile.page.module.scss";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import { ProfilePageSkeleton } from "@pages/profile/profile.page.skeleton.tsx";

interface IProfilePageProps {
	children?: ReactNode;
}

export const ProfilePage: FC<IProfilePageProps> = () => {
	const { currentUser } = useCurrentUser();

	if (!currentUser) return <ProfilePageSkeleton />;
	return (
		<div className={styles.profile_page}>
			<ProfileInfoCard currentUser={currentUser} />
			<AchievementsButton />
			<ProfileUserRates />
		</div>
	);
};

export default ProfilePage;

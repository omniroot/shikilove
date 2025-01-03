import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import { AchievementsButton, ProfileInfoCard, ProfileUserRates } from "@pages/profile/_components";
import { ProfilePageSkeleton } from "@pages/profile/profile.page.skeleton.tsx";
import { FC, ReactNode } from "react";
import styles from "./profile.page.module.scss";
import { createLazyRoute } from "@tanstack/react-router";

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

export const Route = createLazyRoute("/profile")({
	component: ProfilePage,
});

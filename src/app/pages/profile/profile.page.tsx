import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import { AchievementsButton, ProfileInfoCard, ProfileUserRates } from "@pages/profile/_components";
import { ProfilePageSkeleton } from "@pages/profile/profile.page.skeleton.tsx";
import { FC, ReactNode } from "react";
import styles from "./profile.page.module.scss";
import { createLazyRoute } from "@tanstack/react-router";
import { useCurrentUserFriends } from "@/shared/services/user/hooks/useCurrentUserFriends.tsx";
import { FriendsList } from "@pages/profile/_components/FriendsList/FriendsList.tsx";

interface IProfilePageProps {
	children?: ReactNode;
}

export const ProfilePage: FC<IProfilePageProps> = () => {
	const { currentUser } = useCurrentUser();
	const { currentUserFriends } = useCurrentUserFriends();

	if (!currentUser || !currentUserFriends) return <ProfilePageSkeleton />;

	return (
		<div className={styles.profile_page}>
			<ProfileInfoCard currentUser={currentUser} />
			<AchievementsButton />
			<FriendsList friends={currentUserFriends} />
			<ProfileUserRates />
		</div>
	);
};

export const Route = createLazyRoute("/profile")({
	component: ProfilePage,
});

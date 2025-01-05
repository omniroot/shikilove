import { useUser, useUserFriends } from "@pages/user/_api/user/index.ts";
import { AchievementsButton, ProfileInfoCard, ProfileUserRates } from "@pages/user/_components";
import { FriendsList } from "@pages/user/_components/FriendsList/FriendsList.tsx";
import { UserPageSkeleton } from "@pages/user/user.page.skeleton.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import styles from "./user.page.module.scss";

export const UserPage = () => {
	const userId = Number(Route.useParams().userId);
	const { data: user } = useUser(userId);
	const { data: friends } = useUserFriends(userId);

	if (!user || !friends) return <UserPageSkeleton />;
	return (
		<div className={styles.user_page}>
			<ProfileInfoCard currentUser={user} />
			<AchievementsButton />
			<FriendsList friends={friends} />
			<ProfileUserRates />
		</div>
	);
};

export const Route = createLazyRoute("/users/$userId")({
	component: UserPage,
});

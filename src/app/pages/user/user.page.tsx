import { useGetUser } from "@/features/users/api/getUser/getUser.api";
import { AchievementsButton, ProfileInfoCard, ProfileUserRates } from "@pages/user/_components";
import { FriendsList } from "@pages/user/_components/FriendsList/FriendsList.tsx";
import { UserPageSkeleton } from "@pages/user/user.page.skeleton.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import styles from "./user.page.module.scss";
import { useGetUserFriends } from "@/features/users/api/getUserFriends/getUserFriends.api";

export const UserPage = () => {
	const userId = Number(Route.useParams().userId);
	const { data: user } = useGetUser({ userId });
	const { data: friends } = useGetUserFriends({ userId });

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

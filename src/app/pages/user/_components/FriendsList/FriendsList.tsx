import { FC } from "react";
import styles from "./FriendsList.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import dayjs from "dayjs";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { Link } from "@tanstack/react-router";
import { IFriend } from "@pages/user/_api/user";

interface IFriendsListProps {
	friends: IFriend[];
}
export const FriendsList: FC<IFriendsListProps> = ({ friends }) => {
	return (
		<HeadingSection title="Friends">
			<div className={styles.friends_list}>
				{friends.map((friend) => (
					<Link
						to={`/users/$userId`}
						params={{ userId: String(friend.id) }}
						key={friend.id}
						className={styles.friend}
					>
						<ImageView src={friend.image.x160} className={styles.avatar} />
						<span className={styles.nickname}>{friend.nickname}</span>
						<span className={styles.last_online_at}>{dayjs(friend.last_online_at).fromNow()}</span>
					</Link>
				))}
			</div>
		</HeadingSection>
	);
};

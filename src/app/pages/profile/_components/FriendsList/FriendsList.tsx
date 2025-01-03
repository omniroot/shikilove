import { IFriend } from "@/shared/services/user/user.interface.ts";
import { FC } from "react";
import styles from "./FriendsList.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import dayjs from "dayjs";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";

interface IFriendsListProps {
	friends: IFriend[];
}
export const FriendsList: FC<IFriendsListProps> = ({ friends }) => {
	return (
		<HeadingSection title="Friends">
			<div className={styles.friends_list}>
				{friends.map((friend) => (
					<div key={friend.id} className={styles.friend}>
						<ImageView src={friend.image.x160} className={styles.avatar} />
						<span className={styles.nickname}>{friend.nickname}</span>
						<span className={styles.last_online_at}>{dayjs(friend.last_online_at).fromNow()}</span>
					</div>
				))}
			</div>
		</HeadingSection>
	);
};

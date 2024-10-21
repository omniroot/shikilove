import { useFetchCurrentUser } from "@/shared/hooks/useFetchCurrentUser";
import { ImageView } from "@ui/ImageView/ImageView";
import styles from "./UserInfoCard.module.scss";
import dayjs from "dayjs";

export const UserInfoCard = () => {
	const { nickname, lastOnlineAt, avatarUrl } = useFetchCurrentUser();

	const _lastOnline = dayjs(lastOnlineAt).fromNow();

	return (
		<div className={styles.user_info_card}>
			<ImageView
				src={avatarUrl}
				full={avatarUrl}
				width="250px"
				radius="1"
				allowFullscreen
			/>
			{/* <Divide orientation="vertical" width="170px" /> */}
			<div className={styles.info}>
				<div className={styles.first_line}>
					<span className={styles.nickname}>{nickname}</span>
					<span className={styles.last_online_at}>{_lastOnline}</span>
				</div>
				<div className={styles.second_line}>
					<span className={styles.about}>I love anime</span>
					<span className={styles.dev_mode}>{import.meta.env.MODE} mode</span>
				</div>
			</div>
		</div>
	);
};

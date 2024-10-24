import { useFetchCurrentUser } from "@/shared/hooks/useFetchCurrentUser.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import styles from "./UserInfoCard.module.scss";
import dayjs from "dayjs";

export const UserInfoCard = () => {
	const { nickname, lastOnlineAt, avatarUrl } = useFetchCurrentUser();

	const _lastOnline = dayjs(lastOnlineAt).fromNow();

	return (
		<div className={styles.user_info_card}>
			<ImageView
				src={avatarUrl}
				className={styles.user_image}
				full={avatarUrl}
				allowFullscreen
			/>
			{/* <Divide orientation="vertical" width="170px" /> */}
			<div className={styles.info}>
				<div className={styles.first_line}>
					<span className={styles.nickname}>{nickname}</span>
					<span className={styles.last_online_at}>{_lastOnline}</span>
				</div>
				<div className={styles.second_line}>
					<span className={styles.about}></span>
				</div>
				<span className={styles.dev_mode}>{import.meta.env.MODE} mode</span>
			</div>
		</div>
	);
};

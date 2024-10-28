import { ImageView } from "@ui/ImageView/ImageView.tsx";
import styles from "./UserInfoCard.module.scss";
import dayjs from "dayjs";
import { useAuthorization } from "@/shared/hooks/useAuthorization.tsx";
import { getVersion } from "@/shared/utils/getVersion.ts";

export const UserInfoCard = () => {
	const { currentUser } = useAuthorization();

	if (!currentUser) return <div>User info loading...</div>;
	const _lastOnline = dayjs(currentUser.lastOnlineAt).fromNow();

	return (
		<div className={styles.user_info_card}>
			<ImageView
				src={currentUser.avatarUrl}
				className={styles.user_image}
				full={currentUser.avatarUrl}
				allowFullscreen
			/>
			{/* <Divide orientation="vertical" width="170px" /> */}
			<div className={styles.info}>
				<div className={styles.first_line}>
					<span className={styles.nickname}>{currentUser.nickname}</span>
					<span className={styles.last_online_at}>{_lastOnline}</span>
				</div>
				<div className={styles.second_line}>
					<span className={styles.about}></span>
				</div>
				<span className={styles.dev_mode}>
					{import.meta.env.MODE} mode | version {getVersion()}
				</span>
			</div>
		</div>
	);
};

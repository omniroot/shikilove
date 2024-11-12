// import { ImageView } from "@ui/ImageView/ImageView.tsx";
// import dayjs from "dayjs";
// import styles from "./UserInfoCard.module.scss";
// import { Tooltip } from "@ui/Tooltip/Tooltip.tsx";
// import { IconButton } from "@ui/IconButton/IconButton.tsx";
// import { MessageIcon, MoreIcon } from "@/shared/icons/index.tsx";
// import { useUser } from "@/shared/services/user/useUser.tsx";

// type IGetUserRateChartData =
// 	| { id: number; grouped_id: string; name: string; size: number; type: string }[]
// 	| undefined;

// const getUserRateChartData = (datas: IGetUserRateChartData): [string[], number[]] => {
// 	const _labels: string[] = [];
// 	const _datas: number[] = [];

// 	if (datas) {
// 		datas.map((item) => {
// 			if (item.size > 0) {
// 				_labels.push(item.name);
// 				_datas.push(item.size);
// 			}
// 		});
// 	}
// 	return [_labels, _datas];
// };

// export const UserInfoCard = () => {
// 	const { currentUser } = useUser();
// 	const [userRateLabels, userRateData] = getUserRateChartData(
// 		currentUser?.stats.full_statuses.anime,
// 	);

// 	if (!currentUser) return <div>User info loading...</div>;
// 	const _lastOnline = dayjs(currentUser.last_online_at).fromNow();
// 	const userOnline = currentUser?.last_online === "сейчас на сайте" ? "Online" : "Offline";

// 	console.log(userRateLabels, userRateData);

// 	return (
// 		<div className={styles.user_info_card}>
// 			<ImageView
// 				src={currentUser.avatar}
// 				className={styles.user_image}
// 				full={currentUser.avatar}
// 				allowFullscreen
// 			/>
// 			<div className={styles.info}>
// 				<div className={styles.first_line}>
// 					<span className={styles.nickname}>{currentUser.nickname}</span>
// 					<Tooltip title={_lastOnline} className={styles.tooltip}>
// 						<span className={styles.last_online_at}>{userOnline}</span>
// 					</Tooltip>
// 				</div>
// 				<div className={styles.second_line}>
// 					<span className={styles.about}>{currentUser?.about}</span>
// 				</div>
// 				{/* <span className={styles.dev_mode}>
// 					{import.meta.env.MODE} mode | version {packageVersion}
// 				</span> */}
// 			</div>
// 			<div className={styles.user_actions}>
// 				<IconButton className={styles.message_button}>
// 					<MessageIcon />
// 				</IconButton>
// 				<IconButton className={styles.more_button}>
// 					<MoreIcon />
// 				</IconButton>
// 			</div>
// 		</div>
// 	);
// };

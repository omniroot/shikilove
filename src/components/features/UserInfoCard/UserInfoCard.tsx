import { ImageView } from "@ui/ImageView/ImageView.tsx";
import styles from "./UserInfoCard.module.scss";
import dayjs from "dayjs";
import { useAuthorization } from "@/shared/hooks/useAuthorization.tsx";
import { usePackageInfo } from "@/shared/hooks/usePackageInfo.tsx";
import { UserRatesChart } from "@features/UserRatesChart/UserRatesChart.tsx";

type IGetUserRateChartData =
	| { id: number; grouped_id: string; name: string; size: number; type: string }[]
	| undefined;

const getUserRateChartData = (datas: IGetUserRateChartData): [string[], number[]] => {
	const _labels: string[] = [];
	const _datas: number[] = [];

	if (datas) {
		datas.map((item) => {
			if (item.size > 0) {
				_labels.push(item.name);
				_datas.push(item.size);
			}
		});
	}
	return [_labels, _datas];
};

export const UserInfoCard = () => {
	const { fullCurrentUser, currentUser } = useAuthorization();
	const { packageVersion } = usePackageInfo();
	const [userRateLabels, userRateData] = getUserRateChartData(
		fullCurrentUser?.stats.full_statuses.anime,
	);

	if (!currentUser) return <div>User info loading...</div>;
	const _lastOnline = dayjs(currentUser.lastOnlineAt).fromNow();

	console.log(userRateLabels, userRateData);

	return (
		<div className={styles.user_info_card}>
			<ImageView
				src={currentUser.avatarUrl}
				className={styles.user_image}
				full={currentUser.avatarUrl}
				allowFullscreen
			/>
			<div className={styles.info}>
				<div className={styles.first_line}>
					<span className={styles.nickname}>{currentUser.nickname}</span>
					<span className={styles.last_online_at}>{_lastOnline}</span>
				</div>
				<div className={styles.second_line}>
					<span className={styles.about}></span>
				</div>
				<span className={styles.dev_mode}>
					{import.meta.env.MODE} mode | version {packageVersion}
				</span>
			</div>
			<div>
				{fullCurrentUser?.stats.full_statuses.anime && (
					<UserRatesChart labels={userRateLabels} data={userRateData} />
				)}
			</div>
		</div>
	);
};

import styles from "./ProfilePage.module.scss";
import { AnimeUserRates } from "@/app/pages/ProfilePage/AnimeUserRates/AnimeUserRates";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimeInfoSection } from "@features/AnimeInfoSection/AnimeInfoSection.tsx";
import { useAuthorization } from "@/shared/hooks/useAuthorization.tsx";
import { UserActivityChart } from "@/app/pages/ProfilePage/UserActivityChart/UserActivityChart";
import { UserInfoCard } from "@/app/pages/ProfilePage/UserInfoCard/UserInfoCard.tsx";

interface IGetUserActivityChartData {
	name: number[];
	value: number;
}

const getUserActivityChartData = (
	datas: IGetUserActivityChartData[] | undefined,
): [string[], number[]] => {
	const _labels: string[] = [];
	const _datas: number[] = [];

	if (datas) {
		datas.map((ell) => {
			const _start = new Date(ell.name[0] * 1000).toLocaleString("ru-RU", {
				year: "numeric",
				month: "long",
			});
			const _end = new Date(ell.name[1] * 1000).toLocaleString("ru-RU", {
				year: "numeric",
				month: "long",
			});
			if (ell.value > 0) {
				const str = "";
				_labels.push(str.concat(`${_start}\n${_end}`));
				_datas.push(ell.value);
			}
		});

		console.log(_labels, _datas);
	}
	return [_labels, _datas];
};

export const ProfilePage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { fullCurrentUser } = useAuthorization();
	const [userActivityLables, userActivityData] = getUserActivityChartData(
		fullCurrentUser?.stats.activity,
	);

	const status = searchParams.get("status");

	useEffect(() => {
		setSearchParams({ status: "watching" }, { replace: true });
	}, [status]);
	if (!status) return null;

	return (
		<div className={styles.profile_page}>
			<UserInfoCard />
			{fullCurrentUser?.stats.activity && (
				<UserActivityChart data={userActivityData} labels={userActivityLables} />
			)}
			<AnimeInfoSection title="User Rates">
				<AnimeUserRates />
			</AnimeInfoSection>
		</div>
	);
};

export default ProfilePage;

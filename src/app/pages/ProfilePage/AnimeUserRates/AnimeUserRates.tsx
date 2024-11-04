import { useState } from "react";
import styles from "./AnimeUserRates.module.scss";
import { useUserRate } from "@/shared/hooks/useUserRate";
import {
	WatchingIcon,
	PlannedIcon,
	WatchedIcon,
	PostponedIcon,
	DroppedIcon,
} from "@/shared/icons/index.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { ButtonGroup } from "@ui/ButtonGroup/ButtonGroup.tsx";
import { useSearchParams } from "react-router-dom";

type IPages = "watching" | "planned" | "completed" | "rewatching" | "on_hold" | "dropped";

const elements = [
	{
		id: "watching",
		title: "watching",
		icon: <WatchingIcon />,
	},
	{
		id: "planned",
		title: "planned",
		icon: <PlannedIcon />,
	},
	{
		id: "completed",
		title: "completed",
		icon: <WatchedIcon />,
	},
	{
		id: "rewatching",
		title: "rewatching",
		icon: <PostponedIcon />,
	},
	{
		id: "on_hold",
		title: "postponed",
		icon: <PostponedIcon />,
	},
	{
		id: "dropped",
		title: "dropped",
		icon: <DroppedIcon />,
	},
];
export const AnimeUserRates = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const status = searchParams.get("status") as IPages;
	const { userRates } = useUserRate();
	const [activeFilter, setActiveFilter] = useState<IPages>(status);

	const onButtonGroupClick = (nextFilter: IPages) => {
		for (const element of elements) {
			if (element.id === nextFilter) {
				setSearchParams({ status: nextFilter });
				setActiveFilter(nextFilter);
			}
		}
	};
	return (
		<div className={styles.anime_user_rates}>
			<ButtonGroup
				className={styles.anime_filters}
				elements={elements}
				deafultActive={activeFilter}
				onClick={(activeId) => {
					onButtonGroupClick(activeId as IPages);
				}}
			/>
			<AnimeList>
				{userRates?.map((rate) => {
					if (rate.status === activeFilter) {
						return <AnimeCard variant="vertical" userRateAnime={rate} key={rate.id} />;
					}
				})}
			</AnimeList>
		</div>
	);
};

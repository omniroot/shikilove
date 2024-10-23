import { useFetchUserRates } from "@/shared/hooks/useFetchUserRates";
import {
	DroppedIcon,
	PlannedIcon,
	PostponedIcon,
	WatchedIcon,
	WatchingIcon,
} from "@/shared/icons";

import { ButtonGroup } from "@ui/ButtonGroup/ButtonGroup";
import { useState } from "react";
import styles from "./AnimeUserRates.module.scss";
import { AnimeList } from "@features/AnimeList/AnimeList";
import { AnimeCard } from "@features/AnimeCard/AnimeCard";

type IPages =
	| "watching"
	| "planned"
	| "completed"
	| "rewatching"
	| "on_hold"
	| "dropped";

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
	const { userRates } = useFetchUserRates();
	const [activeFilter, setActiveFilter] = useState<IPages>("watching");

	const onButtonGroupClick = (id: IPages) => {
		for (const element of elements) {
			if (element.id === id) {
				setActiveFilter(id);
			}
		}
	};
	return (
		<div className={styles.anime_user_rates}>
			<ButtonGroup
				className={styles.anime_filters}
				elements={elements}
				deafultActive="watching"
				onClick={(activeId) => {
					onButtonGroupClick(activeId as IPages);
				}}
			/>
			<AnimeList>
				{userRates?.map((rate) => {
					if (rate.status === activeFilter) {
						return (
							<AnimeCard
								key={rate.anime.id}
								id={rate.anime.id}
								image={rate.anime.poster.main2xUrl}
								title={rate.anime.name}
								userStatus={rate.status}
								userEpisodes={rate.episodes}
							/>
						);
					}
				})}
			</AnimeList>
		</div>
	);
};

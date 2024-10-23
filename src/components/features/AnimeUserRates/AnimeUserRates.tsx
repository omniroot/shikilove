import { useFetchUserRates } from "@/shared/hooks/useFetchUserRates";
import {
	DroppedIcon,
	PlannedIcon,
	PostponedIcon,
	WatchedIcon,
	WatchingIcon,
} from "@/shared/icons";

import { ButtonGroup } from "@ui/ButtonGroup/ButtonGroup";
import { IconButton } from "@ui/IconButton/IconButton";
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
		element: (
			<IconButton>
				<WatchingIcon />
				<span>watching</span>
			</IconButton>
		),
	},
	{
		id: "planned",
		element: (
			<IconButton>
				<PlannedIcon />
				<span>planned</span>
			</IconButton>
		),
	},
	{
		id: "completed",
		element: (
			<IconButton>
				<WatchedIcon />
				<span>watched</span>
			</IconButton>
		),
	},
	{
		id: "rewatching",
		element: (
			<IconButton>
				{/* <Repeat /> */}
				<span>rewatching</span>
			</IconButton>
		),
	},
	{
		id: "on_hold",
		element: (
			<IconButton>
				<PostponedIcon />
				<span>postponed</span>
			</IconButton>
		),
	},
	{
		id: "dropped",
		element: (
			<IconButton>
				<DroppedIcon />
				<span>dropped</span>
			</IconButton>
		),
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

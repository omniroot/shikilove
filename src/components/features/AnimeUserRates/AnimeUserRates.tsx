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
import { Link } from "react-router-dom";
import { ImageView } from "@ui/ImageView/ImageView";

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
				elements={elements}
				deafultActive="watching"
				onClick={(activeId) => {
					onButtonGroupClick(activeId as IPages);
				}}
			/>
			<div className={styles.anime_list}>
				{userRates?.map((rate) => {
					if (rate.status === activeFilter) {
						return (
							<Link
								to={`/animes/${rate.anime.id}`}
								className={styles.anime_card}
							>
								<ImageView
									radius="1"
									src={rate.anime.poster.main2xUrl}
									width="100%"
									height="85%"
									alt={rate.anime.name}
								/>
								<span className={styles.anime_title}>{rate.anime.name}</span>
							</Link>
						);
					}
				})}
			</div>
		</div>
	);
};

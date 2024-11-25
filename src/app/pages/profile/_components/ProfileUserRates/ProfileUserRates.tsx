import { WatchedIcon, WatchingIcon } from "@/shared/icons/index.tsx";
import { useUserRate } from "@/shared/services/userRate/useUserRate.tsx";
import { capitalizeFirstLetter } from "@/shared/utils/capitalizeFirstLetter.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { ButtonGroup, IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";
import { getButtonGroupElementById } from "@ui/ButtonGroup/ButtonGroup.utils.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { FC, ReactNode, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IProfileUserRatesProps {
	children?: ReactNode;
}

const animeFiltersList: IButtonGroupElement[] = [
	{ id: "watching", icon: <WatchingIcon /> },
	{ id: "completed", icon: <WatchedIcon /> },
];

export const ProfileUserRates: FC<IProfileUserRatesProps> = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentFilter = searchParams.get("filter") || "watching";
	const [userRateFilter, setUserRateFilter] = useState(
		getButtonGroupElementById(animeFiltersList, currentFilter),
	);
	const { userRates } = useUserRate();

	const onAnimeFilterClick = (nextActiveFilter: IButtonGroupElement) => {
		setSearchParams({ filter: nextActiveFilter.id });
		setUserRateFilter(nextActiveFilter);
	};

	useEffect(() => {
		setUserRateFilter(getButtonGroupElementById(animeFiltersList, currentFilter));
	}, [searchParams]);
	if (!userRateFilter) return null;

	return (
		<HeadingSection
			title={capitalizeFirstLetter(currentFilter)}
			actionsSlot={
				<ButtonGroup
					elements={animeFiltersList}
					activeElement={userRateFilter}
					setActiveElement={(nextElement) => onAnimeFilterClick(nextElement)}
				/>
			}
		>
			<AnimeList>
				{userRates &&
					userRates?.map((userRate) => {
						if (userRate.status === userRateFilter.id) {
							return (
								<AnimeCard
									key={userRate.id}
									variant="vertical"
									anime={{
										id: userRate.id,
										poster: userRate.anime.poster.main2xUrl,
										name: userRate.anime.name,
										episodes: userRate.anime.episodes,
										userRate: userRate,
									}}
								/>
							);
						}
					})}
			</AnimeList>
		</HeadingSection>
	);
};

// import { useState } from "react";
// import styles from "./AnimeUserRates.module.scss";
// import { useUserRate } from "@/shared/hooks/useUserRate";
// import {
// 	WatchingIcon,
// 	PlannedIcon,
// 	WatchedIcon,
// 	PostponedIcon,
// 	DroppedIcon,
// } from "@/shared/icons/index.tsx";
// import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
// import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
// import { ButtonGroup } from "@ui/ButtonGroup/ButtonGroup.tsx";
// import { useSearchParams } from "react-router-dom";

// type IPages = "watching" | "planned" | "completed" | "rewatching" | "on_hold" | "dropped";

// const elements = [
// 	{
// 		id: "watching",
// 		title: "watching",
// 		icon: <WatchingIcon />,
// 	},
// 	{
// 		id: "planned",
// 		title: "planned",
// 		icon: <PlannedIcon />,
// 	},
// 	{
// 		id: "completed",
// 		title: "completed",
// 		icon: <WatchedIcon />,
// 	},
// 	{
// 		id: "rewatching",
// 		title: "rewatching",
// 		icon: <PostponedIcon />,
// 	},
// 	{
// 		id: "on_hold",
// 		title: "postponed",
// 		icon: <PostponedIcon />,
// 	},
// 	{
// 		id: "dropped",
// 		title: "dropped",
// 		icon: <DroppedIcon />,
// 	},
// ];
// export const AnimeUserRates = () => {
// 	const [searchParams, setSearchParams] = useSearchParams();
// 	const status = searchParams.get("status") as IPages;
// 	const { userRates } = useUserRate();
// 	const [activeFilter, setActiveFilter] = useState<IPages>(status);

// 	const onButtonGroupClick = (nextFilter: IPages) => {
// 		for (const element of elements) {
// 			if (element.id === nextFilter) {
// 				setSearchParams({ status: nextFilter });
// 				setActiveFilter(nextFilter);
// 			}
// 		}
// 	};
// 	return (
// 		<div className={styles.anime_user_rates}>
// 			<ButtonGroup
// 				className={styles.anime_filters}
// 				elements={elements}
// 				deafultActive={activeFilter}
// 				onClick={(activeId) => {
// 					onButtonGroupClick(activeId as IPages);
// 				}}
// 			/>
// 			<AnimeList>
// 				{userRates?.map((rate) => {
// 					if (rate.status === activeFilter) {
// 						return <AnimeCard variant="vertical" userRateAnime={rate} key={rate.id} />;
// 					}
// 				})}
// 			</AnimeList>
// 		</div>
// 	);
// };

import { WatchedIcon, WatchingIcon } from "@/shared/icons/index.tsx";
import { useUserRate } from "@/shared/services/userRate/useUserRate.tsx";
import { capitalizeFirstLetter } from "@/shared/utils/capitalizeFirstLetter.ts";
import { getAnimeCardData } from "@/shared/utils/getAnimeCardData.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { ButtonGroup, IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";
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

const getAnimeFilterItem = (id: string) => {
	return animeFiltersList.find((filter) => filter.id === id) || animeFiltersList[0];
};

export const ProfileUserRates: FC<IProfileUserRatesProps> = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentFilter = searchParams.get("status") || "watching";
	const [userRateFilter, setUserRateFilter] = useState(getAnimeFilterItem(currentFilter));
	const { userRates } = useUserRate();

	const onAnimeFilterClick = (nextActiveFilter: IButtonGroupElement) => {
		setSearchParams({ status: nextActiveFilter.id });
		setUserRateFilter(nextActiveFilter);
	};

	useEffect(() => {
		setUserRateFilter(getAnimeFilterItem(currentFilter));
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
			<AnimeList scroll="vertical">
				{userRates?.map((rate) => {
					if (rate.status === userRateFilter.id) {
						return <AnimeCard key={rate.id} animeCard={getAnimeCardData(rate)} />;
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

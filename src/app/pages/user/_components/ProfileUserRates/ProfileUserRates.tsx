import {
	DroppedIcon,
	PlannedIcon,
	PostponedIcon,
	WatchedIcon,
	WatchingIcon,
} from "@/shared/icons/index.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { IUserRateStatus } from "@pages/user/_api/userRate/userRate.types";
import { Button } from "@ui/Button/Button.tsx";
import { ButtonGroup, IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";
import { getButtonGroupElementById } from "@ui/ButtonGroup/ButtonGroup.utils.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { Loader } from "@ui/Loader/Loader.tsx";
import { FC, ReactNode, useState } from "react";
import styles from "./ProfileUserRates.module.scss";
import { getRouteApi } from "@tanstack/react-router";
import { useGetUserRates } from "@pages/user/_api/userRate/getUserRates/getUserRates.api.ts";

interface IProfileUserRatesProps {
	children?: ReactNode;
}

const animeFiltersList: IButtonGroupElement[] = [
	{ id: "watching", icon: <WatchingIcon />, title: "Watching" },
	{ id: "planned", icon: <PlannedIcon />, title: "Planned" },
	{ id: "completed", icon: <WatchedIcon />, title: "Watched" },
	{ id: "dropped", icon: <DroppedIcon />, title: "Dropped" },
	{ id: "on_hold", icon: <PostponedIcon />, title: "On Hold" },
];

export const ProfileUserRates: FC<IProfileUserRatesProps> = () => {
	const { userId } = getRouteApi("/users/$userId").useParams();
	const [userRateFilter, setUserRateFilter] = useState<IButtonGroupElement>(animeFiltersList[0]);
	const {
		data: userRates,
		isSuccess,
		fetchNextPage: fetchNextUserRatesPage,
	} = useGetUserRates({
		userId: Number(userId),
		status: userRateFilter.id as IUserRateStatus,
	});

	const onAnimeFilterClick = (nextActiveFilter: IButtonGroupElement) => {
		setUserRateFilter(getButtonGroupElementById(animeFiltersList, nextActiveFilter.id));
	};

	const onMoreButtonClick = () => {
		fetchNextUserRatesPage();
	};

	// useEffect(() => {
	// 	if (userRates) {
	// 		const nextUserRatesCount = userRates.pages.reduce((prev, rates) => {
	// 			return prev + rates.length;
	// 		}, 0);
	// 		setUserRatesCount(nextUserRatesCount);
	// 	}
	// }, [userRates]);

	// if (!userRateFilter || !userRates) return null;

	return (
		<>
			<ButtonGroup
				elements={animeFiltersList}
				activeElement={userRateFilter}
				setActiveElement={(nextElement) => onAnimeFilterClick(nextElement)}
				className={styles.filters_buttons_group}
			/>

			<HeadingSection title="Watching">
				{!isSuccess ? (
					<Loader fullscreen />
				) : (
					<AnimeList>
						{userRates.pages.map((rates) => {
							return rates.map((userRate) => {
								return (
									<AnimeCard
										key={userRate.id}
										variant="horizontal"
										anime={{
											id: userRate.anime.id,
											poster: userRate.anime.poster?.main2xUrl || "/404.png",
											name: userRate.anime.name,
											episodes: userRate.anime.episodes || userRate.anime.episodesAired,
											userRate: userRate,
										}}
									/>
								);
							});
						})}
						<Button onClick={onMoreButtonClick} className={styles.more_button}>
							More
						</Button>
					</AnimeList>
				)}
			</HeadingSection>
		</>
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
// import { useSearchParams } from "@tanstack/react-router";

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

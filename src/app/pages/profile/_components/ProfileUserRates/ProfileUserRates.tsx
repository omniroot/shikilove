import {
	DroppedIcon,
	PlannedIcon,
	PostponedIcon,
	WatchedIcon,
	WatchingIcon,
} from "@/shared/icons/index.tsx";
import { DroppedFragment } from "@pages/profile/_components/ProfileUserRates/_fragments/DroppedFragment/DroppedFragment";
import { OnHoldFragment } from "@pages/profile/_components/ProfileUserRates/_fragments/OnHoldFragment /OnHoldFragment ";
import { PlannedFragment } from "@pages/profile/_components/ProfileUserRates/_fragments/PlannedFragment/PlannedFragment";
import { WatchedFragment } from "@pages/profile/_components/ProfileUserRates/_fragments/WatchedFragment/WatchedFragment";
import { WatchingFragment } from "@pages/profile/_components/ProfileUserRates/_fragments/WatchingFragment/WatchingFragment";
import { ButtonGroup, IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";
import { getButtonGroupElementById } from "@ui/ButtonGroup/ButtonGroup.utils.tsx";
import { FragmentContainer, IFragment } from "@ui/FragmentContainer/FragmentContainer";
import { getFragmentContainerElementById } from "@ui/FragmentContainer/FragmentContainer.utils";
import { FC, ReactNode, useState } from "react";
import styles from "./ProfileUserRates.module.scss";

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

const userRateFragmentsList: IFragment[] = [
	{ id: "watching", fragment: <WatchingFragment /> },
	{ id: "planned", fragment: <PlannedFragment /> },
	{ id: "watched", fragment: <WatchedFragment /> },
	{ id: "dropped", fragment: <DroppedFragment /> },
	{ id: "on_hold", fragment: <OnHoldFragment /> },
	// { id: "latest", fragment: <LatestFragment /> },
	// { id: "critique", fragment: <DiscoveryCritiqueFragment /> },
	// { id: "collections", fragment: <DiscoveryCollectionsFragment /> },
	// { id: "calendar", fragment: <DiscoveryCalendarFragment /> },
];

export const ProfileUserRates: FC<IProfileUserRatesProps> = () => {
	const [currentFragment, setCurrentFragment] = useState(
		getFragmentContainerElementById(userRateFragmentsList, "watching"),
	);
	const [userRateFilter, setUserRateFilter] = useState(
		getButtonGroupElementById(animeFiltersList, currentFragment.id),
	);

	const onAnimeFilterClick = (nextActiveFilter: IButtonGroupElement) => {
		setCurrentFragment(getFragmentContainerElementById(userRateFragmentsList, nextActiveFilter.id));
		setUserRateFilter(getButtonGroupElementById(animeFiltersList, nextActiveFilter.id));
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
			<FragmentContainer fragments={userRateFragmentsList} activeFragment={currentFragment} />
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

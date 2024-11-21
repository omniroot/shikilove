import {
	CalendarIcon,
	CollectionsIcon,
	CritiquesIcon,
	RecentlyIcon,
} from "@/shared/icons/index.tsx";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import { getButtonGroupElementById } from "@/shared/utils/getButtonGroupElement";
import { ProfilePageSkeleton } from "@pages/profile/profile.page.skeleton.tsx";
import { ButtonGroup, IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./discovery.page.module.scss";
import { useAnimeOngoings } from "@/shared/services/anime/hooks/useAnimeOngoing.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { getAnimeCardData } from "@/shared/utils/getAnimeCardData.ts";

const discoveryFilterButtonsList: IButtonGroupElement[] = [
	{ id: "ongoing", title: "Ongoing", icon: <RecentlyIcon width={16} /> },
	{ id: "recently", title: "Recently", icon: <RecentlyIcon width={16} /> },
	{ id: "critique", title: "Critique", icon: <CritiquesIcon width={16} /> },
	{ id: "collections", title: "Collections", icon: <CollectionsIcon width={16} /> },
	{ id: "calendar", title: "Calendar", icon: <CalendarIcon width={16} /> },
];

export const DiscoveryPage = () => {
	const { currentUser } = useCurrentUser();
	const [searchParams, setSearchParams] = useSearchParams();
	const currentFilter = searchParams.get("filter") || "recently";
	const [activeElement, setActiveElement] = useState(
		getButtonGroupElementById(discoveryFilterButtonsList, currentFilter),
	);
	const { animeOngoings, isAnimeOngoingsLoading } = useAnimeOngoings();

	const onElementClick = (nextElement: IButtonGroupElement) => {
		setSearchParams({ filter: nextElement.id });
		setActiveElement(nextElement);
	};

	useEffect(() => {
		setActiveElement(getButtonGroupElementById(discoveryFilterButtonsList, currentFilter));
	}, [searchParams]);

	if (!currentUser) return <ProfilePageSkeleton />;
	return (
		<div className={styles.discovery_page}>
			<ButtonGroup
				className={styles.dicovery_filter_buttons}
				elements={discoveryFilterButtonsList}
				activeElement={activeElement}
				setActiveElement={onElementClick}
			/>

			{activeElement.id === "ongoing" && (
				<AnimeList>
					{!isAnimeOngoingsLoading &&
						animeOngoings &&
						animeOngoings.map((ongoing) => (
							<AnimeCard key={ongoing.id} animeCard={getAnimeCardData(ongoing)} />
						))}
				</AnimeList>
			)}
		</div>
	);
};

export default DiscoveryPage;

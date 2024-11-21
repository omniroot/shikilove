import {
	CalendarIcon,
	CollectionsIcon,
	CritiquesIcon,
	LatestIcon,
	RecentlyIcon,
} from "@/shared/icons/index.tsx";
import { useAnimeOngoings } from "@/shared/services/anime/hooks/useAnimeOngoing.tsx";
import { getAnimeCardData } from "@/shared/utils/getAnimeCardData.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { ButtonGroup, IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";
import { getButtonGroupElementById } from "@ui/ButtonGroup/ButtonGroup.utils.tsx";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./discovery.page.module.scss";
import { FragmentContainer, IFragment } from "@ui/FragmentContainer/FragmentContainer.tsx";
import { OngoingFragment } from "@pages/discovery/_fragments/OngoingFragment/OngoingFragment.tsx";
import { getFragmentContainerElementById } from "@ui/FragmentContainer/FragmentContainer.utils.ts";
import { LatestFragment } from "@pages/discovery/_fragments/LatestFragment/LatestFragment.tsx";

const discoveryFilterButtonsList: IButtonGroupElement[] = [
	{ id: "ongoing", title: "Ongoing", icon: <RecentlyIcon width={18} /> },
	{ id: "latest", title: "Latest", icon: <LatestIcon width={20} /> },
	{ id: "critique", title: "Critique", icon: <CritiquesIcon width={18} /> },
	{ id: "collections", title: "Collections", icon: <CollectionsIcon width={18} /> },
	{ id: "calendar", title: "Calendar", icon: <CalendarIcon width={18} /> },
];

const discoveryFragmentsList: IFragment[] = [
	{ id: "ongoing", fragment: <OngoingFragment /> },
	{ id: "latest", fragment: <LatestFragment /> },
];

export const DiscoveryPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentFilter = searchParams.get("filter") || "ongoing";
	const [activeElement, setActiveElement] = useState(
		getButtonGroupElementById(discoveryFilterButtonsList, currentFilter),
	);
	const activeFragment = getFragmentContainerElementById(discoveryFragmentsList, activeElement.id);

	const onElementClick = (nextElement: IButtonGroupElement) => {
		setSearchParams({ filter: nextElement.id });
		setActiveElement(nextElement);
	};

	useEffect(() => {
		setActiveElement(getButtonGroupElementById(discoveryFilterButtonsList, currentFilter));
	}, [searchParams]);

	return (
		<div className={styles.discovery_page}>
			<ButtonGroup
				className={styles.dicovery_filter_buttons}
				elements={discoveryFilterButtonsList}
				activeElement={activeElement}
				setActiveElement={onElementClick}
			/>
			<FragmentContainer fragments={discoveryFragmentsList} activeFragment={activeFragment} />
		</div>
	);
};

export default DiscoveryPage;

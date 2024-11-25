import {
	CalendarIcon,
	CollectionsIcon,
	CritiquesIcon,
	LatestIcon,
	RecentlyIcon,
} from "@/shared/icons/index.tsx";
import { OngoingFragment } from "@pages/discovery/_fragments/DiscoveryOngoingFragment/DiscoveryOngoingFragment";
import { ButtonGroup, IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";
import { getButtonGroupElementById } from "@ui/ButtonGroup/ButtonGroup.utils.tsx";
import { FragmentContainer, IFragment } from "@ui/FragmentContainer/FragmentContainer.tsx";
import { getFragmentContainerElementById } from "@ui/FragmentContainer/FragmentContainer.utils.ts";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./discovery.page.module.scss";
import { LatestFragment } from "@pages/discovery/_fragments/DiscoveryLatestFragment/DiscoveryLatestFragment";
import { DiscoveryCritiqueFragment } from "@pages/discovery/_fragments/DiscoveryCritiqueFragment/DiscoveryCritiqueFragment.tsx";
import { DiscoveryCollectionsFragment } from "@pages/discovery/_fragments/DiscoveryCollectionsFragment/DiscoveryCollectionsFragment.tsx";

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
	{ id: "critique", fragment: <DiscoveryCritiqueFragment /> },
	{ id: "collections", fragment: <DiscoveryCollectionsFragment /> },
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

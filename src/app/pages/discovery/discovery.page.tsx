import {
	CalendarIcon,
	CollectionsIcon,
	CritiquesIcon,
	LatestIcon,
	RecentlyIcon,
} from "@/shared/icons/index.tsx";
import { createLazyRoute, Outlet } from "@tanstack/react-router";
import { ButtonGroup, IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";
import { getButtonGroupElementById } from "@ui/ButtonGroup/ButtonGroup.utils.tsx";
import { useState } from "react";
import styles from "./discovery.page.module.scss";

const discoveryFilterButtonsList: IButtonGroupElement[] = [
	{ id: "ongoings", title: "Ongoing", icon: <RecentlyIcon width={18} /> },
	{ id: "latests", title: "Latest", icon: <LatestIcon width={20} /> },
	{ id: "critiques", title: "Critique", icon: <CritiquesIcon width={18} /> },
	{ id: "collections", title: "Collections", icon: <CollectionsIcon width={18} /> },
	{ id: "calendar", title: "Calendar", icon: <CalendarIcon width={18} /> },
];

export const DiscoveryPage = () => {
	const navigate = Route.useNavigate();
	const currentFilter = "ongoing";
	const [activeElement, setActiveElement] = useState(
		getButtonGroupElementById(discoveryFilterButtonsList, currentFilter),
	);

	const onElementClick = (nextElement: IButtonGroupElement) => {
		navigate({ to: `/discovery/${nextElement.id}` });
		setActiveElement(nextElement);
	};

	// useEffect(() => {
	// 	setActiveElement(getButtonGroupElementById(discoveryFilterButtonsList, currentFilter));
	// }, [searchParams]);

	return (
		<div className={styles.discovery_page}>
			<ButtonGroup
				className={styles.dicovery_filter_buttons}
				elements={discoveryFilterButtonsList}
				activeElement={activeElement}
				setActiveElement={onElementClick}
			/>
			<Outlet />
		</div>
	);
};

export const Route = createLazyRoute("/discovery")({
	component: DiscoveryPage,
});

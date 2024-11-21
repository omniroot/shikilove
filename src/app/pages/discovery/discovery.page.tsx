import {
	CalendarIcon,
	CollectionsIcon,
	CritiquesIcon,
	RecentlyIcon,
} from "@/shared/icons/index.tsx";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";
import { ProfilePageSkeleton } from "@pages/profile/profile.page.skeleton.tsx";
import { ButtonGroup, IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";
import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";
import styles from "./discovery.page.module.scss";

const discoveryFilterButtonsList: IButtonGroupElement[] = [
	{ id: "recently", title: "Recently", icon: <RecentlyIcon width={16} /> },
	{ id: "critique", title: "Critique", icon: <CritiquesIcon width={16} /> },
	{ id: "collections", title: "Collections", icon: <CollectionsIcon width={16} /> },
	{ id: "calendar", title: "Calendar", icon: <CalendarIcon width={16} /> },
];

export const DiscoveryPage = () => {
	const { currentUser } = useCurrentUser();
	const [activeElement, setActiveElement] = useState(discoveryFilterButtonsList[0]);
	const activeElementDebounced = useDebounce(activeElement, 80);

	const onElementClick = (nextElement: IButtonGroupElement) => {
		setActiveElement(nextElement);
	};

	if (!currentUser) return <ProfilePageSkeleton />;
	return (
		<div className={styles.discovery_page}>
			<ButtonGroup
				className={styles.dicovery_filter_buttons}
				elements={discoveryFilterButtonsList}
				activeElement={activeElementDebounced}
				setActiveElement={onElementClick}
			/>
		</div>
	);
};

export default DiscoveryPage;

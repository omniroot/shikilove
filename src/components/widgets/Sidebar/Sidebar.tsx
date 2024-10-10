import { Box } from "@ui/Box/Box";
import styles from "./Sidebar.module.scss";
import {
	LogoutIcon,
	ProfileIcon,
	SearchIcon,
	SettingsIcon,
} from "@/shared/icons";
import { IconButton } from "@ui/IconButton/IconButton";
import { Link } from "react-router-dom";
import { MouseEvent, useEffect, useState } from "react";
import { BaseComponent } from "@ui/BaseComponent/BaseComponent";
import { RLink } from "@ui/RLink/RLink";
import { NavBar } from "@features/NavBar/NavBar";

const start_pages = [
	{
		name: "Profile",
		path: "/",
		icon: <ProfileIcon />,
	},
	{
		name: "Search",
		path: "/search",
		icon: <SearchIcon />,
	},
];

const end_pages = [
	{
		name: "Settings",
		path: "/settings",
		icon: <SettingsIcon />,
	},
	{
		name: "Logout",
		path: "/logout",
		icon: <LogoutIcon />,
	},
];

export const Sidebar = () => {
	// const [isSidebarHovered, setIsSidebarHovered] = useState(false);

	// const onSidebarMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
	//   setIsSidebarHovered(true);
	// };
	// const onSidebarMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
	//   setIsSidebarHovered(false);
	// };

	// useEffect(() => {
	//   console.log(isSidebarHovered);
	// }, [isSidebarHovered]);

	return (
		<Box className={styles.sidebar_container} padding="none" border="none">
			<Box
				className={styles.sidebar}
				flexDirection="column"
				alignItems="center"
				gap="1"
				// onMouseEnter={onSidebarMouseEnter}
				// onMouseLeave={onSidebarMouseLeave}
			>
				<Box>Shiki</Box>
				<NavBar pages={start_pages} />
				<Box className={styles.spacer} height="100%" border="none"></Box>
				<NavBar pages={end_pages} />
			</Box>
		</Box>
	);
};

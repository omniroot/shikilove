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

export const Sidebar = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  const onSidebarMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    setIsSidebarHovered(true);
  };
  const onSidebarMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    setIsSidebarHovered(false);
  };

  useEffect(() => {
    console.log(isSidebarHovered);
  }, [isSidebarHovered]);

  return (
    <Box className={styles.sidebar_container} padding="none" border="none">
      <Box
        className={styles.sidebar}
        flexDirection="column"
        alignItems="center"
        gap="1"
        onMouseEnter={onSidebarMouseEnter}
        onMouseLeave={onSidebarMouseLeave}
      >
        {/* <Box pseudoHide>Shikimori</Box> */}
        <IconButton border="active" className={styles.profile}>
          <ProfileIcon />
          {/* <BaseComponent pseudoHide={!isSidebarHovered}>Profile</BaseComponent> */}
        </IconButton>
        <IconButton border="transparent">
          <SearchIcon />
        </IconButton>
        <IconButton border="transparent">
          <SettingsIcon />
        </IconButton>
        <IconButton border="transparent">
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

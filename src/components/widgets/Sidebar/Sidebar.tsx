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
import { MouseEvent, useState } from "react";

export const Sidebar = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  const onSidebarMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    setIsSidebarHovered(true);
  };
  const onSidebarMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    setIsSidebarHovered(false);
  };

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
        {/* <span>Shikimori</span> */}
        <IconButton border="active">
          <ProfileIcon />
          {isSidebarHovered && "Profile"}
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

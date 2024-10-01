import { Box } from "@ui/Box/Box";
import styles from "./Sidebar.module.scss";
import {
  LogoutIcon,
  ProfileIcon,
  SearchIcon,
  SettingsIcon,
} from "@/shared/icons";
import { IconButton } from "@ui/IconButton/IconButton";

export const Sidebar = () => {
  return (
    <Box className={styles.sidebar} flexDirection="column">
      <span>Shikimori</span>
      <IconButton border="active">
        <ProfileIcon />
      </IconButton>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon />
      </IconButton>
      <IconButton>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

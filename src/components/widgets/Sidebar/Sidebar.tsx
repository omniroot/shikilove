import { Box } from "@ui/Box/Box";
import styles from "./Sidebar.module.scss";
import { ProfileIcon } from "@/shared/icons";

export const Sidebar = () => {
  return (
    <Box className={styles.sidebar}>
      <span>Shikimori</span>
      <Box border="active">
        <ProfileIcon />
      </Box>
      <Box>Search</Box>
      <Box>Settings</Box>
      <Box>Logout</Box>
    </Box>
  );
};

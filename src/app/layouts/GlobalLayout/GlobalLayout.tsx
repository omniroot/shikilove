import { Outlet } from "react-router-dom";
import styles from "./GlobalLayout.module.scss";
import { Sidebar } from "@widgets/Sidebar/Sidebar";
import { Box } from "@ui/Box/Box";

export const GlobalLayout = () => {
  return (
    <div className={styles.globallayout}>
      <Sidebar />
      <Box className={styles.main}>
        <Outlet />
      </Box>
    </div>
  );
};

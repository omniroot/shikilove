import { Outlet } from "react-router-dom";
import styles from "./GlobalLayout.module.scss";
import { Sidebar } from "@widgets/Sidebar/Sidebar";
import { Box } from "@ui/Box/Box";
import { useFetchCurrentUser } from "@/shared/hooks/useFetchCurrentUser";

export const GlobalLayout = () => {
  const { loading, ...rest } = useFetchCurrentUser();

  if (loading) return "loading...";
  console.log("@ loading", loading);
  console.log("@ rest", rest);
  return (
    <div className={styles.globallayout}>
      <Sidebar />
      <Box className={styles.main}>
        <Outlet />
      </Box>
    </div>
  );
};

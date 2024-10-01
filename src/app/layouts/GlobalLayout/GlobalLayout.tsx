import { Outlet } from "react-router-dom";
import styles from "./GlobalLayout.module.scss";
import { Sidebar } from "@widgets/Sidebar/Sidebar";

export const GlobalLayout = () => {
  return (
    <div className={styles.globallayout}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

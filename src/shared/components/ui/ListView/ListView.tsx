import { FC, ReactNode } from "react";
import styles from "./ListView.module.scss";

interface IListViewProps {
	children: ReactNode;
}

export const ListView: FC<IListViewProps> = ({ children }) => {
	return <div className={styles.list_view}>{children}</div>;
};

export const ListViewItem: FC<IListViewProps> = ({ children }) => {
	return <div className={styles.list_view_item}>{children}</div>;
};

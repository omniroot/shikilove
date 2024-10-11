import type { FC } from "react";
import styles from "./AnimeInfoSection.module.scss";

interface IAnimeInfoSectionProps {
  children?: React.ReactNode;
  title?: string;
}

export const AnimeInfoSection: FC<IAnimeInfoSectionProps> = ({
  children,
  title,
}) => {
  return (
    <div className={styles.anime_info_section}>
      <span className={styles.title}>{title}</span>
      {children}
    </div>
  );
};

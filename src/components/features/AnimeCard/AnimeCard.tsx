import { BaseComponent, IBaseComponent } from "@ui/BaseComponent/BaseComponent";
import { Box } from "@ui/Box/Box";
import { Typography } from "@ui/Typography/Typography";
import clsx from "clsx";
import { FC, MouseEvent, useEffect, useState } from "react";
import styles from "./AnimeCard.module.scss";
import { IconButton } from "@ui/IconButton/IconButton";
import { ProfileIcon } from "@/shared/icons";
import { Link, useNavigate } from "react-router-dom";

interface IAnimeCardProps {
  id?: string;
  title?: string;
  image?: string;
  link?: string;
}
export const AnimeCard: FC<IAnimeCardProps> = ({ id, image, title, link }) => {
  // const [isAnimeCardHovered, setIsAnimeCardHovered] = useState(false);

  const onAnimeCardClick = () => {};

  // const onAnimeCardMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
  //   setIsAnimeCardHovered(true);
  // };
  // const onAnimeCardMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
  //   setIsAnimeCardHovered(false);
  // };
  // const _class_anime_card = clsx(styles.anime_card);

  // const _class_hover_container = clsx(styles.anime_card_hover_container, {
  //   [styles.anime_card_hover_container_hovered]: isAnimeCardHovered === true,
  // });

  // useEffect(() => {
  //   console.log(isAnimeCardHovered);
  // }, [isAnimeCardHovered]);

  return (
    <Box
      width="250px"
      height="380px"
      flexDirection="column"
      alignItems="center"
      // border="active"
      // onMouseEnter={onAnimeCardMouseEnter}
      // onMouseLeave={onAnimeCardMouseLeave}
      radius="1"
      as={Link}
      to={`/anime/${link}`}

      // className={_class_anime_card}
      // padding="1"
    >
      <img
        src={image}
        width="100%"
        height="85%"
        style={{ borderRadius: "var(--radius)" }}
      />
      <Typography
        width="fit-content"
        height="auto"
        size="4"
        weight="bold"
        clamp="2"
        textAlign="center"
      >
        {title}
      </Typography>
      {/* <Box
        // className={_class_hover_container}
        backgroundColor="secondary"
        padding="none"
      >
        <IconButton>
          <ProfileIcon />
        </IconButton>
      </Box> */}
    </Box>
  );
};

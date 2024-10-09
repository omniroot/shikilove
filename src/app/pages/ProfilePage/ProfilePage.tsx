import { useFetchCurrentUser } from "@/shared/hooks/useFetchCurrentUser";
import { useFetchUserRates } from "@/shared/hooks/useFetchUserRates";
import {
  DroppedIcon,
  PlannedIcon,
  PostponedIcon,
  WatchedIcon,
  WatchingIcon,
} from "@/shared/icons";
import { AnimeCard } from "@features/AnimeCard/AnimeCard";
import { Box } from "@ui/Box/Box";
import { Button } from "@ui/Button/Button";
import { ButtonGroup } from "@ui/ButtonGroup/ButtonGroup";
import { Divide } from "@ui/Divide/Divide";
import { IconButton } from "@ui/IconButton/IconButton";
import { Typography } from "@ui/Typography/Typography";
import { useState } from "react";

type IPages =
  | "watching"
  | "planned"
  | "watched"
  | "postponed"
  | "dropped"
  | string;

const elements = [
  {
    id: "watching",
    element: (
      <IconButton>
        <WatchingIcon />
        <Typography size="4">watching</Typography>
      </IconButton>
    ),
  },
  {
    id: "planned",
    element: (
      <IconButton>
        <PlannedIcon />
        <Typography size="4">planned</Typography>
      </IconButton>
    ),
  },
  {
    id: "watched",
    element: (
      <IconButton>
        <WatchedIcon />
        <Typography size="4">watched</Typography>
      </IconButton>
    ),
  },
  {
    id: "postponed",
    element: (
      <IconButton>
        <PostponedIcon />
        <Typography size="4">postponed</Typography>
      </IconButton>
    ),
  },
  {
    id: "dropped",
    element: (
      <IconButton>
        <DroppedIcon />
        <Typography size="4">dropped</Typography>
      </IconButton>
    ),
  },
];

export const ProfilePage = () => {
  const { loading, nickname, lastOnlineAt, avatarUrl } = useFetchCurrentUser();
  const { userRates } = useFetchUserRates();
  const [activePage, setActivePage] = useState<IPages>("watching");

  const onButtonGroupClick = (id: string) => {
    elements.forEach((element) => {
      if (element.id === id) {
        setActivePage(id);
      }
    });
  };

  // if (loading) return "loading...";

  return (
    <Box
      border="none"
      padding="none"
      width="100%"
      flexDirection="column"
      gap="1"
    >
      <Box width="100%">
        <Box width="100%" border="none" padding="none">
          <img src={avatarUrl} width={200} />
          <Divide orientation="vertical" width="170px" />
          <Box flexDirection="column" width="100%" border="none" padding="none">
            <Box justifyContent="space-between" width="100%" border="none">
              <Typography size="3">{nickname}</Typography>
              <Typography size="4">{lastOnlineAt}</Typography>
            </Box>
            <Box justifyContent="space-between" width="100%" border="none">
              <Typography>I love anime</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width="100%" flexDirection="column" gap="1">
        <Typography size="2" weight="bold">
          Watching
        </Typography>
        <ButtonGroup
          elements={elements}
          deafultActive="watching"
          onClick={(activeId) => {
            onButtonGroupClick(activeId);
          }}
        />
        <Box gap="1" border="none" padding="none">
          {/*  */}
          {/*  */}

          {userRates?.map((rate) => {
            return (
              <AnimeCard
                title={rate.anime.name}
                image={rate.anime.poster.main2xUrl}
                id={rate.anime.id}
              />
            );
          })}

          {/* {activePage === "watching" && (
            <AnimeCard
              id="1"
              title="Naruto"
              image="/naruto.png"
              link="naruto"
            />
          )}
          {activePage === "planned" && (
            <AnimeCard
              id="1"
              title="Naruto Ураганные хроники акатски итачи"
              image="/naruto.png"
              link="naruto_itachi"
            />
          )} */}
        </Box>
        <Button>123</Button>
      </Box>
      <Button>Subscribe</Button>
    </Box>
  );
};

import { useFetchAnimeById } from "@/shared/hooks/useFetchAnimeById";
import { Box } from "@ui/Box/Box";
import { Typography } from "@ui/Typography/Typography";
import { useParams } from "react-router-dom";

export const AnimePage = () => {
  const { animeId } = useParams();
  const { anime } = useFetchAnimeById(animeId || "1");

  return (
    <Box flexDirection="column">
      <span>AnimePage</span>
      <Box>
        <img src={anime?.poster.mainUrl} />
        <Typography>{anime?.name}</Typography>
      </Box>
    </Box>
  );
};

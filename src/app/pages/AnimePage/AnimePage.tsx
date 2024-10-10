import { useFetchAnimeById } from "@/shared/hooks/useFetchAnimeById";
import { useFetchSimilarAnime } from "@/shared/hooks/usеFetchSimilarAnime";
import { getPosterImage } from "@/shared/utils/getPosterImage";
import { AnimeCard } from "@features/AnimeCard/AnimeCard";
import { Box } from "@ui/Box/Box";
import { Divide } from "@ui/Divide/Divide";
import { ImageView } from "@ui/ImageView/ImageView";
import { Typography } from "@ui/Typography/Typography";
import { useParams } from "react-router-dom";

export const AnimePage = () => {
	const { animeId } = useParams();
	const { similarAnimes } = useFetchSimilarAnime(animeId || "1");
	const { anime } = useFetchAnimeById(animeId || "1");

	console.log(similarAnimes);
	return (
		<Box
			width="100%"
			height="100%"
			flexDirection="column"
			border="none"
			padding="none"
			gap="1"
		>
			<Box width="100%">
				<Box width="100%" border="none" gap="1" padding="none">
					<ImageView
						src={anime?.poster.mainUrl}
						radius="1"
						width="600px"
						height="100%"
					/>
					<Divide width="280px" orientation="vertical" />
					<Box width="100%" height="100%" flexDirection="column">
						<Typography size="4" weight="bold">
							{anime?.name}
						</Typography>
						<Typography>{anime?.status}</Typography>
						<Typography>{anime?.episodes}</Typography>
						<Typography>{anime?.score}</Typography>
						<Box padding="none" border="none">
							<Box>Genre</Box>
							<Box>Genre</Box>
						</Box>
					</Box>
					<Box width="100%" flexDirection="column">
						<Typography>{anime?.name}</Typography>
						<Typography>{anime?.status}</Typography>
					</Box>
				</Box>
			</Box>
			<Box flexDirection="column" width="100%">
				<Typography size="4" weight="bold">
					About
				</Typography>
				<Typography textColor="text-secondary">{anime?.description}</Typography>
			</Box>
			<Box flexDirection="column" width="100%">
				<Typography size="4" weight="bold">
					Screenshots
				</Typography>
				<Box>Add AnimeScreenshots component</Box>
			</Box>
			<Box flexDirection="column" width="100%">
				<Typography size="4" weight="bold">
					Similar
				</Typography>
				<Box gap="1">
					{similarAnimes?.map((similarAnime) => (
						<AnimeCard
							id={similarAnime.id}
							title={similarAnime.name}
							image={getPosterImage(similarAnime.image.original)}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};

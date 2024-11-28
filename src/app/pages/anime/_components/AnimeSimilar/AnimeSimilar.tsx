import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import styles from "./AnimeSimilar.module.scss";
import { FC } from "react";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { useSimilarAnimes } from "@/shared/services/anime/hooks/useAnimeSimilar.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";

interface IAnimeSimilarProps {
	anime: IAnime;
}

export const AnimeSimilar: FC<IAnimeSimilarProps> = ({ anime }) => {
	const { similarAnimes } = useSimilarAnimes(anime.id);
	let count = 0;

	if (!similarAnimes || !anime) return;
	return (
		<HeadingSection title="Similar">
			<AnimeList scroll="horizontal" className={styles.similar_list}>
				{similarAnimes.map((similar) => {
					count++;
					if (count <= 5) {
						return (
							<AnimeCard
								key={similar.id}
								variant="horizontal"
								anime={{
									id: similar.id,
									poster: getPosterImage(similar.image.x96),
									name: similar.name,
									russian: similar.russian,
									episodes: similar.episodes || similar.episodes_aired,
									airedOn: similar.aired_on,
									kind: similar.kind,
									score: Number(similar.score),
									userRate: {},
								}}
							/>
						);
					}
				})}
			</AnimeList>
		</HeadingSection>
	);
};

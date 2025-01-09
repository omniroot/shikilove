import { RightArrowIcon } from "@/shared/icons/index.tsx";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { ButtonLink } from "@ui/Button/Button.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { FC } from "react";
import styles from "./AnimeSimilar.module.scss";
import { IAnime } from "@pages/anime/_api/anime/anime.interface.ts";
import { useGetAnimeSimilars } from "@pages/anime/_api/anime/getAnimeSimilars/getAnimeSimilars.ts";

interface IAnimeSimilarProps {
	anime: IAnime;
}

export const AnimeSimilar: FC<IAnimeSimilarProps> = ({ anime }) => {
	const { data: similarAnimes } = useGetAnimeSimilars({ animeId: anime.id });
	console.log({ similarAnimes });

	let count = 0;

	if (!similarAnimes?.length || !anime) return;
	return (
		<HeadingSection
			title="Similar"
			actionsSlot={
				<ButtonLink variant="outline" from="/animes/$animeId" to="similars">
					More <RightArrowIcon />
				</ButtonLink>
			}
		>
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

import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { useAnimeFranchises } from "@/shared/services/anime/hooks/useAnimeFranchises.tsx";
import { Link } from "@tanstack/react-router";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { FC } from "react";
import styles from "./AnimeFranchises.module.scss";
interface IAnimeFranchisesProps {
	anime: IAnime;
}
export const AnimeFranchises: FC<IAnimeFranchisesProps> = ({ anime }) => {
	const { data: franchises } = useAnimeFranchises(anime.id);

	return (
		<HeadingSection title="Franchises">
			{franchises?.map((franchise, index) => (
				<Link
					key={franchise.id}
					className={styles.franchise}
					to="/animes/$animeId"
					params={{ animeId: String(franchise.id) }}
					data-iscurrent={franchise.id === Number(anime.id) ? true : false}
				>
					<span className={styles.index}>{Math.abs(index - franchises.length)}</span>
					<ImageView src={franchise.image_url} alt={franchise.name} className={styles.poster} />
					<div className={styles.info}>
						<span className={styles.name}>{franchise.name}</span>
						<span className={styles.kind}>{franchise.kind}</span>
					</div>
					<span className={styles.year}>{franchise.year}</span>
				</Link>
			))}
		</HeadingSection>
	);
};

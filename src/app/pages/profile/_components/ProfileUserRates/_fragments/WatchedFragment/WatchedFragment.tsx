import { useUserRate } from "@/shared/services/userRate/useUserRate";
import { AnimeCard } from "@features/AnimeCard/AnimeCard";
import { AnimeList } from "@features/AnimeList/AnimeList";
import { Button } from "@ui/Button/Button";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection";
import { Loader } from "@ui/Loader/Loader";
import styles from "./WatchedFragment.module.scss";

export const WatchedFragment = () => {
	const { userRates, fetchNextUserRatesPage } = useUserRate({
		userRateStatus: "completed",
	});

	const onMoreButtonClick = () => {
		fetchNextUserRatesPage();
	};

	if (!userRates) return <Loader fullscreen />;
	return (
		<HeadingSection title="Watched">
			<AnimeList>
				{userRates.pages.map((rates) => {
					return rates.map((userRate) => {
						return (
							<AnimeCard
								key={userRate.id}
								variant="horizontal"
								anime={{
									id: userRate.anime.id,
									poster: userRate.anime.poster?.main2xUrl || "/404.png",
									name: userRate.anime.name,
									episodes: userRate.anime.episodes || userRate.anime.episodesAired,
									userRate: userRate,
								}}
							/>
						);
					});
				})}
				<Button onClick={onMoreButtonClick} className={styles.more_button}>
					More
				</Button>
			</AnimeList>
		</HeadingSection>
	);
};

import { ICalendar } from "@/shared/services/calendar/calendar.interface.ts";
import { useCalendar } from "@/shared/services/calendar/useCalendar.tsx";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import styles from "./calendar.page.module.scss";
import { createLazyRoute } from "@tanstack/react-router";

const convertCalendar = (calendars: ICalendar[]) => {
	let days: { [key: string]: ICalendar[] } = {};

	calendars.map((item) => {
		const _dayOfTheWeek = new Date(item.next_episode_at).toLocaleString("ru", {
			weekday: "long",
			day: "numeric",
			month: "long",
		});
		days = {
			...days,
			[_dayOfTheWeek]: [...(days[_dayOfTheWeek] || []), item as ICalendar],
		};
	});

	return days;
};

export const CalendarPage = () => {
	const { calendar } = useCalendar();
	const days = convertCalendar(calendar || []);

	if (!calendar) return;
	return (
		<div className={styles.discovery_calendar_fragment}>
			{Object.keys(days).map((key) => (
				<HeadingSection title={key.toLocaleUpperCase()} key={key}>
					{days[key].map((anime) => {
						console.log({ anime });

						return (
							<AnimeCard
								key={anime.anime.id}
								variant="horizontal"
								anime={{
									id: String(anime.anime.id),
									poster: getPosterImage(anime.anime.image.x96),
									name: anime.anime.name,
									score: Number(anime.anime.score),
								}}
							/>
						);
					})}
				</HeadingSection>
			))}
		</div>
	);
};

export const Route = createLazyRoute("/discovery/calendar")({
	component: CalendarPage,
});

import { useCalendar } from "@/shared/services/calendar/useCalendar.tsx";
import styles from "./DiscoveryCalendarFragment.module.scss";
import { ICalendar } from "@/shared/services/calendar/calendar.interface.ts";
import { text } from "stream/consumers";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";

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

export const DiscoveryCalendarFragment = () => {
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
				// <div key={day}>
				// 	<h3>{day}</h3>
				// 	<ul>
				// 		{days[day].map((anime) => (
				// 			<li key={anime.anime.id}>
				// 				{anime.anime.name} - Next Episode:
				// 				{new Date(anime.next_episode_at).toLocaleString()}
				// 			</li>
				// 		))}
				// 	</ul>
				// </div>
			))}
		</div>
	);
};

import { IAnilibEpisode } from "@pages/anime/_api/anilib/anilib.interface";
import { useAnilibGetEpisodes } from "@pages/anime/_api/anilib/useAnilib";
import { Select, SelectContent, SelectItem } from "@ui/Select/Select.tsx";
import { Loader } from "lucide-react";
import { FC, useEffect, useState } from "react";

// const getEpisodesElements = (episodes: IAnilibEpisode[] | undefined) => {
// 	if (!episodes) return [];
// 	return episodes.map((episode) => ({
// 		value: String(episode.id),
// 		label: `Episode ${episode.number}`,
// 	}));
// };

interface IEpisode {
	anilibId: number;
	number: string;
	name?: string;
}

const getDefaultActiveEpisode = (episodes: IAnilibEpisode[], defaultEpisode: number) => {
	const episode = episodes.find((episode) => episode.number === String(defaultEpisode));
	if (episode) {
		return { anilibId: episode.id, number: episode.number, name: episode.name };
	}

	console.log("NOt found episode< use first");
	const firstEpisode = episodes[0];
	return {
		anilibId: firstEpisode.id,
		number: String(defaultEpisode),
		name: firstEpisode.name,
	};
};

interface IEpisodeSelectProps {
	animeSlugUrl: string;
	defaultEpisode: number;
	onEpisodeSelect: ({ episodeId, episode }: { episodeId: number; episode: number }) => void;
}
export const EpisodeSelect: FC<IEpisodeSelectProps> = ({
	animeSlugUrl,
	defaultEpisode,
	onEpisodeSelect,
}) => {
	const { anilibEpisodes } = useAnilibGetEpisodes(animeSlugUrl);

	const [episode, setEpisode] = useState<IEpisode | undefined>(undefined);

	const onItemSelect = (newValue: string) => {
		const newEpisode = anilibEpisodes?.find((episode) => episode.id === Number(newValue));
		if (newEpisode) {
			setEpisode({
				anilibId: newEpisode.id,
				number: newEpisode.number,
				name: newEpisode.name,
			});
			onEpisodeSelect({ episodeId: newEpisode.id, episode: Number(newEpisode.number) });
		}
	};

	console.log({ episode });

	useEffect(() => {
		if (anilibEpisodes && !episode) {
			setEpisode(getDefaultActiveEpisode(anilibEpisodes, defaultEpisode));
		}
	}, [anilibEpisodes]);

	if (!anilibEpisodes || !episode) return <Loader />;

	return (
		<Select
			defaultValue={{
				value: String(episode.anilibId),
				label: `${episode.number}: ${episode.name ?? ""}`,
			}}
			onActiveChange={onItemSelect}
			positionY="top"
			positionX="right"
		>
			<SelectContent>
				{anilibEpisodes.map((episode) => {
					return (
						<SelectItem key={episode.id} value={String(episode.id)}>
							{episode.number}: {episode.name ?? ""}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
};

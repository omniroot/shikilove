import { useAnilibGetVideo } from "@pages/anime/_api/anilib/useAnilib";
import { Select, SelectContent, SelectItem } from "@ui/Select/Select.tsx";
import { FC } from "react";

export interface IQuality {
	player: string;
	link: string;
	quality: string;
}

interface IQualitySelectProps {
	episodeId: number;
	team: string;
	onQualitySelect: (newValue: IQuality) => void;
	defaultQuality: string;
	defaultLink: string;
}
export const QualitySelect: FC<IQualitySelectProps> = ({
	episodeId: episode,
	team,
	onQualitySelect,
	defaultQuality,
	defaultLink,
}) => {
	const { anilibVideo } = useAnilibGetVideo(episode);
	let qualities: IQuality[] = [];
	if (anilibVideo) {
		qualities = anilibVideo.reduce<IQuality[]>((acc, video) => {
			if (video.team.name === team && video.player === "Animelib") {
				video.video.quality.map((quality) => {
					acc.push({
						player: video.player,
						link: `https://video1.anilib.me/.%D0%B0s/${quality.href}`,
						quality: `${quality.quality}p`,
					});
				});
			}
			return acc;
		}, []);
	}
	const defaultQualityValue = qualities.reduce<{ value: string; label: string }>(
		(acc, quality) => {
			if (quality.quality === defaultQuality && quality.link === defaultLink) {
				return {
					value: quality.link,
					label: quality.quality,
				};
			}
			return acc;
		},
		{
			value: qualities[0]?.link,
			label: qualities[0]?.quality,
		},
	);

	const _onQualitySelect = (newValue: string) => {
		const quality = qualities.filter((quality) => quality.link === newValue)[0];
		onQualitySelect(quality);
	};

	// if (video.player === "Kodik") {
	// 	// @ts-ignore
	// 	const quality = video.src.split("/").pop();
	// 	return {
	// 		// @ts-ignore
	// 		link: video.src,
	// 		player: video.player,
	// 		quality,
	// 	};
	// }
	// }).filter((ell) => ell !== undefined);

	console.log({ qualities });

	if (!anilibVideo || !qualities.length || !defaultQualityValue) return;
	return (
		<Select
			defaultValue={defaultQualityValue}
			positionY="top"
			positionX="right"
			onActiveChange={_onQualitySelect}
		>
			<SelectContent>
				{qualities.map((quality) => (
					<SelectItem value={quality.link} key={quality.link}>
						{quality.quality}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

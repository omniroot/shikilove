import { useAnilibGetVideo } from "@/shared/services/anilib/useAnilib.ts";
import { Select, SelectContent, SelectItem } from "@ui/Select/Select.tsx";
import { FC } from "react";
interface IDubTeamSelectProps {
	episodeId: number;
	onTeamSelect: (team: string) => void;
}
export const DubTeamSelect: FC<IDubTeamSelectProps> = ({ episodeId: episode, onTeamSelect }) => {
	const { anilibVideo } = useAnilibGetVideo(episode);
	const teams = Array.from(new Set(anilibVideo?.map((video) => video.team.name)));

	// const onItemClick = (newValue: string) => {
	// 	console.log({ newValue, anilibVideo, teams });

	// 	// onTeamSelect(newValue);
	// };

	if (!anilibVideo || !teams.length) return;
	console.log({ anilibVideo, teams });

	return (
		<Select
			defaultValue={{ value: teams[0], label: teams[0] }}
			positionY="top"
			onActiveChange={onTeamSelect}
		>
			<SelectContent>
				{teams.map((team) => (
					<SelectItem value={team} key={team}>
						{team}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

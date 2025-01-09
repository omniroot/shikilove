import { useAnilibGetVideo } from "@pages/anime/_api/anilib/useAnilib";
import { Select, SelectContent, SelectItem } from "@ui/Select/Select.tsx";
import { FC } from "react";

interface IDubTeamSelectProps {
	episodeId: number;
	defaultTeam: string;
	onTeamSelect: (team: string) => void;
}
export const DubTeamSelect: FC<IDubTeamSelectProps> = ({
	episodeId: episode,
	defaultTeam,
	onTeamSelect,
}) => {
	const { anilibVideo } = useAnilibGetVideo(episode);
	const teams = Array.from(new Set(anilibVideo?.map((video) => video.team.name)));
	const defaultTeamValue = defaultTeam
		? {
				value: defaultTeam,
				label: defaultTeam,
			}
		: { value: teams[0], label: teams[0] };

	if (!anilibVideo || !teams.length) return;
	console.log({ anilibVideo, teams });

	return (
		<Select defaultValue={defaultTeamValue} positionY="top" onActiveChange={onTeamSelect}>
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

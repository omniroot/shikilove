import { ReactNode, FC, useState } from "react";
import styles from "./UserRateEditBottomSheet.module.scss";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Input } from "@ui/Input/Input.tsx";
import { ISelectElement, Select } from "@ui/Select/Select.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { useUserRate } from "@/shared/services/userRate/useUserRate.tsx";

const getEpisodesSelectElements = (maxEpisodes: number) => {
	const elements = Array.from({ length: maxEpisodes }, (_, i) => ({
		value: String(i + 1),
		label: String(i + 1),
	}));

	return elements;
};

const statusSelectElements = [
	{ value: "watching", label: "Watching" },
	{ value: "completed", label: "Completed" },
	{ value: "on_hold", label: "On Hold" },
	{ value: "dropped", label: "Dropped" },
	{ value: "planned", label: "Planned" },
];

interface IUserRateEditBottomSheetProps {
	anime: IAnime | undefined;
	onOutsideClick: () => void;
}
export const UserRateEditBottomSheet: FC<IUserRateEditBottomSheetProps> = ({
	anime,
	onOutsideClick,
}) => {
	const { updateUserRate } = useUserRate(anime?.userRate.id);
	const episodesSelectElements = getEpisodesSelectElements(
		anime?.episodes || anime?.episodesAired || 0,
	);
	const [episodesElement, setEpisodesElement] = useState(String(anime?.userRate.episodes || 0));
	const [statusElement, setStatusElement] = useState(String(anime?.userRate?.status || "Watching"));

	const onEpisodesSelectChange = (newValue: string) => {
		setEpisodesElement(newValue);
	};

	const onStatusSelectChange = (newValue: string) => {
		setStatusElement(newValue);
	};

	const onSaveButtonClick = () => {
		updateUserRate({
			userRateId: anime?.userRate.id || 0,
			status: statusElement,
			episodes: Number(episodesElement),
		});
		alert("Updated");
	};

	if (!anime) return;
	return (
		<BottomSheet title="Edit user rate" onOutsideClick={onOutsideClick}>
			<div className={styles.user_rate_edit_container}>
				<div className={styles.selects}>
					<Select
						elements={episodesSelectElements}
						value={String(episodesElement)}
						onChange={onEpisodesSelectChange}
					/>
					<Select
						elements={statusSelectElements}
						value={statusElement}
						onChange={onStatusSelectChange}
					/>
				</div>
				<Button variant="primary" className={styles.save_button} onClick={onSaveButtonClick}>
					Save
				</Button>
			</div>
		</BottomSheet>
	);
};

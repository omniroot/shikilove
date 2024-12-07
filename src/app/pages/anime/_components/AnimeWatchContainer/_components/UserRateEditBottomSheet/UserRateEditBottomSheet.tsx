import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { useUserRate } from "@/shared/services/userRate/useUserRate.tsx";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Select } from "@ui/Select/Select.tsx";
import { FC, useState } from "react";
import styles from "./UserRateEditBottomSheet.module.scss";
import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface.ts";

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
	const { addUserRate, updateUserRate } = useUserRate("watching", anime?.userRate?.id || 0);
	const episodesSelectElements = getEpisodesSelectElements(
		anime?.episodes || anime?.episodesAired || 1,
	);
	const [episodesElement, setEpisodesElement] = useState(String(anime?.userRate?.episodes || 1));
	const [statusElement, setStatusElement] = useState(String(anime?.userRate?.status || "watching"));
	const isExistInUserRate = anime?.userRate ? true : false;

	const onEpisodesSelectChange = (newValue: string) => {
		setEpisodesElement(newValue);
	};

	const onStatusSelectChange = (newValue: string) => {
		setStatusElement(newValue);
	};

	const onSaveButtonClick = () => {
		// add new user rate
		if (!isExistInUserRate) {
			addUserRate({
				animeId: String(anime?.id || 0),
				episodes: episodesElement,
				status: statusElement as IUserRateAnimeStatus,
			});
			return;
		}
		updateUserRate({
			userRateId: anime?.userRate.id || 0,
			status: statusElement as IUserRateAnimeStatus,
			episodes: Number(episodesElement),
		});
		alert("Updated");
	};

	if (!anime) return;
	return (
		<BottomSheet
			title={isExistInUserRate ? "Edit user rate" : "Add user rate"}
			onOutsideClick={onOutsideClick}
		>
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
					{isExistInUserRate ? "Save" : "Add"}
				</Button>
			</div>
		</BottomSheet>
	);
};

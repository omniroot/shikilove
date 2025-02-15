import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { FC, useState } from "react";
import styles from "./UserRateEditBottomSheet.module.scss";
import { Select, SelectContent, SelectItem } from "@ui/Select/Select.tsx";
import { IUserRateStatus } from "@pages/user/_api/userRate/userRate.types";
import { IAnime } from "@pages/anime/_api/anime/anime.interface.ts";
import { useAddUserRate } from "@pages/user/_api/userRate/addUserRate/addUserRate.api.ts";
import { useUpdateUserRate } from "@pages/user/_api/userRate/updateUserRate/updateUserRate.api.ts";

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

const getLabel = (value: string) => {
	return statusSelectElements.find((el) => el.value === value)?.label ?? "";
};

interface IUserRateEditBottomSheetProps {
	anime: IAnime;
	onOutsideClick: () => void;
}
export const UserRateEditBottomSheet: FC<IUserRateEditBottomSheetProps> = ({
	anime,
	onOutsideClick,
}) => {
	const episodesSelectElements = getEpisodesSelectElements(
		anime.episodes || anime.episodesAired || 1,
	);
	const [episodesElement, setEpisodesElement] = useState(String(anime.userRate?.episodes || 1));
	const [statusElement, setStatusElement] = useState<IUserRateStatus>(
		String(anime.userRate?.status || "watching") as IUserRateStatus,
	);
	const { mutate: addUserRate } = useAddUserRate({
		animeId: Number(anime.id),
		episodes: String(episodesElement),
		status: statusElement,
	});
	const { mutate: updateUserRate } = useUpdateUserRate({
		userRateId: anime.userRate?.id || 0,
		episodes: Number(episodesElement),
		status: statusElement,
	});
	const isExistInUserRate = anime.userRate ? true : false;

	const onEpisodesSelectChange = (newValue: string) => {
		setEpisodesElement(newValue);
	};

	const onStatusSelectChange = (newValue: string) => {
		setStatusElement(newValue as IUserRateStatus);
	};

	const onSaveButtonClick = () => {
		// add new user rate
		if (!isExistInUserRate) {
			addUserRate();
			return;
		}
		updateUserRate();
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
						defaultValue={{ value: episodesElement, label: episodesElement }}
						onActiveChange={onEpisodesSelectChange}
						positionY="top"
						positionX="right"
					>
						<SelectContent>
							{episodesSelectElements.map((element) => (
								<SelectItem key={element.value} value={element.value}>
									{element.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select
						defaultValue={{ value: statusElement, label: getLabel(statusElement) }}
						onActiveChange={onStatusSelectChange}
						positionY="top"
					>
						<SelectContent>
							{statusSelectElements.map((element) => (
								<SelectItem key={element.value} value={element.value}>
									{element.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<Button variant="primary" className={styles.save_button} onClick={onSaveButtonClick}>
					{isExistInUserRate ? "Save" : "Add"}
				</Button>
			</div>
		</BottomSheet>
	);
};

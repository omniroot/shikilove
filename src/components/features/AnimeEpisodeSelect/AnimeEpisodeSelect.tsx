import Select, { SingleValue } from "react-select";
import styles from "./AnimeEpisodeSelect.module.scss";
import { type FC, useState } from "react";

export type IAnimeEpisodeSelectOption = {
	value: number;
	label: number;
};

export const animeStatusSelectOptions = [];

const getAnimeEpisodesSelectOptions = (episodesCount: number) => {
	const options: IAnimeEpisodeSelectOption[] = [];
	for (let i = 1; i <= episodesCount; i++) {
		options.push({ value: i, label: i });
	}
	return options;
};

interface IAnimeEpisodeSelectProps {
	defaultValue: IAnimeEpisodeSelectOption | null;
	eipsodesCount: number;
	onOptionSelected?: (episode: number) => void;
}
export const AnimeEpisodeSelect: FC<IAnimeEpisodeSelectProps> = ({
	defaultValue,
	eipsodesCount,
	onOptionSelected,
}) => {
	const [selectedOption, setSelectedOption] =
		useState<IAnimeEpisodeSelectOption | null>(defaultValue);
	const [isSelecteMenuOpen, setIsSelecteMenuOpen] = useState(false);

	const onSelectMenuOpen = () => {
		setIsSelecteMenuOpen(true);
	};
	console.log(selectedOption);
	const onSelectMenuClose = () => {
		setIsSelecteMenuOpen(false);
	};

	const onOptionSelect = (newValue: SingleValue<IAnimeEpisodeSelectOption>) => {
		setSelectedOption(newValue);
		if (newValue && onOptionSelected) {
			onOptionSelected(newValue?.value);
		}
	};

	return (
		<Select
			unstyled
			defaultValue={selectedOption}
			onChange={onOptionSelect}
			onMenuOpen={onSelectMenuOpen}
			onMenuClose={onSelectMenuClose}
			data-opened={isSelecteMenuOpen}
			placeholder={"Select"}
			isSearchable
			options={getAnimeEpisodesSelectOptions(eipsodesCount)}
			classNames={{
				container: () => styles.select_container,
				control: () =>
					isSelecteMenuOpen
						? styles.select_input_control_opened
						: styles.select_input_control_closed,
				menu: () => styles.select_menu,
				menuList: () => styles.select_menu_list,
				option: ({ isSelected }) =>
					isSelected
						? styles.select_menu_option_selected
						: styles.select_menu_option,
				placeholder: () => styles.placeholder,
			}}
		/>
	);
};

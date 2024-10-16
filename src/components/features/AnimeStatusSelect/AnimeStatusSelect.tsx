import Select from "react-select";
import styles from "./AnimeStatusSelect.module.scss";
import { type FC, useState } from "react";

type ISelectOption = {
	value: string;
	label: string;
};
export const animeStatusSelectOptions: ISelectOption[] = [
	{ value: "watching", label: "Watching" },
	{ value: "planned", label: "Planned" },
	{ value: "completed", label: "Completed" },
	{ value: "rewatching", label: "Rewatching" },
	{ value: "on_hold", label: "Postponed" },
	{ value: "dropped", label: "Dropped" },
];

interface IAnimeStatusSelectProps {
	defaultValue: ISelectOption | null;
}
export const AnimeStatusSelect: FC<IAnimeStatusSelectProps> = ({ defaultValue }) => {
	const [selectedOption, setSelectedOption] = useState<ISelectOption | null>(defaultValue);
	const [isSelecteMenuOpen, setIsSelecteMenuOpen] = useState(false);

	const onSelectMenuOpen = () => {
		setIsSelecteMenuOpen(true);
	};
	console.log(selectedOption);
	const onSelectMenuClose = () => {
		setIsSelecteMenuOpen(false);
	};
	return (
		<Select
			unstyled
			defaultValue={selectedOption}
			onChange={setSelectedOption}
			onMenuOpen={onSelectMenuOpen}
			onMenuClose={onSelectMenuClose}
			data-opened={isSelecteMenuOpen}
			placeholder={"Select"}
			isSearchable
			options={animeStatusSelectOptions}
			classNames={{
				container: () => styles.select_container,
				control: () => (isSelecteMenuOpen ? styles.select_input_control_opened : styles.select_input_control_closed),
				menu: () => styles.select_menu,
				menuList: () => styles.select_menu_list,
				option: ({ isSelected }) => (isSelected ? styles.select_menu_option_selected : styles.select_menu_option),
				placeholder: () => styles.placeholder,
			}}
		/>
	);
};

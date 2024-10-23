import Select, { SingleValue } from "react-select";
import styles from "./AnimeStatusSelect.module.scss";
import { type FC, useState } from "react";
import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface.ts";

export type IAnimeStatusSelectOption = {
	value: IUserRateAnimeStatus;
	label: string;
};
export const animeStatusSelectOptions: IAnimeStatusSelectOption[] = [
	{ value: "watching", label: "Watching" },
	{ value: "planned", label: "Planned" },
	{ value: "completed", label: "Completed" },
	{ value: "rewatching", label: "Rewatching" },
	{ value: "on_hold", label: "Postponed" },
	{ value: "dropped", label: "Dropped" },
];

interface IAnimeStatusSelectProps {
	defaultValue: IAnimeStatusSelectOption | null;
	onOptionSelected?: (item: IAnimeStatusSelectOption) => void;
}
export const AnimeStatusSelect: FC<IAnimeStatusSelectProps> = ({
	defaultValue,
	onOptionSelected,
}) => {
	const [selectedOption, setSelectedOption] =
		useState<IAnimeStatusSelectOption | null>(defaultValue);
	const [isSelecteMenuOpen, setIsSelecteMenuOpen] = useState(false);

	const onSelectMenuOpen = () => {
		setIsSelecteMenuOpen(true);
	};
	console.log(selectedOption);
	const onSelectMenuClose = () => {
		setIsSelecteMenuOpen(false);
	};

	const onOptionSelect = (newValue: SingleValue<IAnimeStatusSelectOption>) => {
		setSelectedOption(newValue);
		if (selectedOption && onOptionSelected) {
			onOptionSelected(newValue as IAnimeStatusSelectOption);
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
			options={animeStatusSelectOptions}
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

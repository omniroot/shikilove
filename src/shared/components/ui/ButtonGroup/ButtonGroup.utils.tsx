import { IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";

export const getButtonGroupElementById = (list: IButtonGroupElement[], id: string) => {
	return list.find((filter) => filter.id === id) || list[0];
};

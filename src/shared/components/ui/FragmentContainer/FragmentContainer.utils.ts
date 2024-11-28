import { IFragment } from "@ui/FragmentContainer/FragmentContainer.tsx";

export const getFragmentContainerElementById = (list: IFragment[], id: string) => {
	return list.find((filter) => filter.id === id) || list[0];
};

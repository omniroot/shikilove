import { ReactNode, FC } from "react";
import styles from "./FragmentContainer.module.scss";
import clsx from "clsx";

export interface IFragment {
	id: string;
	fragment?: ReactNode;
}

interface IFragmentContainerProps {
	className?: string;
	fragments: IFragment[];
	activeFragment: IFragment;
}
export const FragmentContainer: FC<IFragmentContainerProps> = ({
	className,
	fragments,
	activeFragment,
}) => {
	const _class = clsx(styles.fragment_container, className);
	return (
		<div className={_class}>
			{fragments.map((fragment) => {
				if (fragment.id === activeFragment.id) {
					return fragment.fragment;
				}
			})}
		</div>
	);
};

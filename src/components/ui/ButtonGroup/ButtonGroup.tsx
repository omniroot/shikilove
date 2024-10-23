import { type FC, type ReactNode, useState } from "react";
import styles from "./ButtonGroup.module.scss";
import clsx from "clsx";

interface IElement {
	id: string;
	element?: ReactNode;
}
interface IButtonGroupProps {
	elements?: IElement[];
	className?: string;
	deafultActive: string;
	onClick?: (activeId: string) => void;
}
export const ButtonGroup: FC<IButtonGroupProps> = ({
	className,
	elements,
	deafultActive,
	onClick = () => {},
}) => {
	const [active, setActive] = useState(deafultActive);

	const onGroupItemClick = (element: IElement) => {
		setActive(element.id);
		onClick(element.id);
	};

	const _class = clsx(styles.button_group, className);

	return (
		<div className={_class}>
			{elements?.map((element) => {
				return (
					<div
						className={clsx(styles.button, {
							[styles.active]: active === element.id,
						})}
						key={element.id}
						onClick={() => onGroupItemClick(element)}
					>
						{element.element}
					</div>
				);
			})}
		</div>
	);
};

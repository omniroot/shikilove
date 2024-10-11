import { type FC, type ReactNode, useState } from "react";
import styles from "./ButtonGroup.module.scss";
import clsx from "clsx";

interface IElement {
	id: string;
	element?: ReactNode;
}
interface IButtonGroupProps {
	elements?: IElement[];
	deafultActive: string;
	onClick?: (activeId: string) => void;
}
export const ButtonGroup: FC<IButtonGroupProps> = ({
	elements,
	deafultActive,
	onClick = () => {},
}) => {
	const [active, setActive] = useState(deafultActive);

	const onGroupItemClick = (element: IElement) => {
		setActive(element.id);
		onClick(element.id);
	};

	return (
		<div className={styles.button_group}>
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

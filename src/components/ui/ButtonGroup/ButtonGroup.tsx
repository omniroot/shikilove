import { BaseComponent } from "@ui/BaseComponent/BaseComponent";
import { FC, ReactElement, ReactNode, useState } from "react";

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
		<BaseComponent
			width="100%"
			flexWrap="wrap"
			gap="1"
			border="none"
			clickable={false}
		>
			{elements?.map((element) => {
				return (
					<BaseComponent
						key={element.id}
						border={active == element.id ? "active" : "default"}
						radius="1"
						clickable
						onClick={() => onGroupItemClick(element)}
					>
						{element.element}
					</BaseComponent>
				);
			})}
		</BaseComponent>
	);
};

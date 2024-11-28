import { FC } from "react";
import styles from "./Select.module.scss";
import clsx from "clsx";

interface ISelectElement {
	value: string;
	label: string;
}
interface ISelectProps {
	className?: string;
	elements: ISelectElement[];
	value: string;
	onChange: (newValue: string) => void;
}
export const Select: FC<ISelectProps> = ({ className, elements, value, onChange }) => {
	const _class = clsx(styles.select, className);

	const _onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value);
	};
	return (
		<select className={_class} value={value} onChange={_onSelectChange}>
			{elements.map((element) => {
				return (
					<option key={element.value} value={element.value}>
						{element.label}
					</option>
				);
			})}
		</select>
	);
};

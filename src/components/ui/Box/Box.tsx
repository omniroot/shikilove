import {
	BaseComponent,
	type IBaseComponent,
} from "@ui/BaseComponent/BaseComponent";
import type { FC } from "react";

interface IBoxProps extends IBaseComponent {}

export const Box: FC<IBoxProps> = ({
	children,
	border = "default",
	radius = "1",
	padding = "1",
	...rest
}) => {
	return (
		<BaseComponent {...rest} border={border} radius={radius} padding={padding}>
			{children}
		</BaseComponent>
	);
};

import { css } from "@emotion/css";
import { BaseComponent, IBaseComponent } from "@ui/BaseComponent/BaseComponent";
import { Box } from "@ui/Box/Box";
import clsx from "clsx";
import { FC } from "react";

interface ITypographyProps extends IBaseComponent {
	size?: "1" | "2" | "3" | "4" | "5" | "6";
	weight?: "normal" | "bold";
	clamp?: "none" | string;
	textAlign?: "none" | "left" | "center" | "right";
}

export const Typography: FC<ITypographyProps> = ({
	className,
	size = "5",
	weight = "normal",
	clamp = "none",
	textAlign = "none",
	children,
	...rest
}) => {
	const _style = css`
    ${`font-size: var(--text-size-h${size});`}
    ${`font-weight: ${weight};`}
    ${`text-align: ${textAlign};`}

    ${
			clamp !== "none" &&
			`display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${clamp};
    overflow: hidden;
    text-overflow: ellipsis;`
		}
  `;

	const _class = clsx(_style, className);
	return (
		<BaseComponent className={_class} {...rest} as="span">
			{children}
		</BaseComponent>
	);
};

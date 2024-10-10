import { css } from "@emotion/css";
import type { FC } from "react";

interface IImageViewProps {
	src?: string;
	alt?: string;
	width?: string;
	height?: string;
	radius?: "none" | "1" | "2";
}

export const ImageView: FC<IImageViewProps> = ({
	width = "100%",
	height = "100%",
	radius = "none",
	alt = "alt text",
	src,
}) => {
	const _style = css`
    width: ${width};
    height: ${height};

    ${`border-radius: var(--radius-${radius});`};
  `;

	return <img src={src} alt={alt} className={_style} />;
};

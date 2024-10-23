import { css } from "@emotion/css";
import clsx from "clsx";
import { useState, type FC } from "react";
import { createPortal } from "react-dom";

import styles from "./ImageView.module.scss";

interface IImageViewProps {
	className?: string;
	src?: string;
	full?: string;
	allowFullscreen?: boolean;
	alt?: string;
	width?: string;
	height?: string;
	radius?: "none" | "1" | "2";
}

export const ImageView: FC<IImageViewProps> = ({
	className,
	width = "100%",
	height = "100%",
	radius = "none",
	alt = "alt text",
	src,
	allowFullscreen = false,
	full,
}) => {
	const [isModal, setIsModal] = useState(false);

	const onImageClick = () => {
		if (allowFullscreen) {
			setIsModal((prev) => !prev);
		}
	};

	if (isModal === true) {
		const modal = document.getElementById("modal") || document.body;
		modal.style.display = "flex";
	} else {
		const modal = document.getElementById("modal") || document.body;
		modal.style.display = "none";
	}

	const _style = css`
		width: ${width};
		height: ${height};

		max-width: ${width};
		max-height: ${height};

		${`border-radius: var(--radius-${radius});`};
		${allowFullscreen && "cursor:pointer;"}
	`;

	const _class = clsx(_style, className);

	return (
		<>
			<img src={src} alt={alt} className={_class} onClick={onImageClick} />
			{allowFullscreen === true &&
				isModal === true &&
				createPortal(
					<div className={styles.image_view_modal_container} key={alt}>
						<span>Click on image to close</span>
						<img
							src={full}
							alt={alt}
							className={clsx(_style, styles.image_view_modal)}
							onClick={onImageClick}
						/>
					</div>,
					document.getElementById("modal") || document.body,
				)}
		</>
	);
};

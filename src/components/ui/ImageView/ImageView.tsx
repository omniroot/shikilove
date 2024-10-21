import { css } from "@emotion/css";
import clsx from "clsx";
import { useState, type FC } from "react";
import { createPortal } from "react-dom";

import styles from "./ImageView.module.scss";

interface IImageViewProps {
	src?: string;
	full?: string;
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
	full,
}) => {
	const [isModal, setIsModal] = useState(false);

	const onImageClick = () => {
		setIsModal((prev) => !prev);
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

		${`border-radius: var(--radius-${radius});`};
	`;

	return (
		<>
			<img src={src} alt={alt} className={_style} onClick={onImageClick} />
			{isModal &&
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

import clsx from "clsx";
import { useState, type FC } from "react";
import { createPortal } from "react-dom";

import styles from "./ImageView.module.scss";

interface IImageViewProps {
	className?: string;
	src?: string;
	full?: string;
	allowFullscreen?: boolean;
	loading?: "lazy" | "eager";
	alt?: string;
}
export const ImageView: FC<IImageViewProps> = ({
	className,
	alt = "alt text",
	loading = "lazy",
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
		const modal = document.getElementById("fullscreen_image") || document.body;
		modal.style.display = "flex";
	} else {
		const modal = document.getElementById("fullscreen_image") || document.body;
		modal.style.display = "none";
	}

	const _class = clsx(styles.image_view, className, {
		[styles.clickable]: allowFullscreen,
	});

	return (
		<>
			<img src={src} alt={alt} className={_class} onClick={onImageClick} loading={loading} />
			{allowFullscreen === true &&
				isModal === true &&
				createPortal(
					<div className={styles.image_view_modal_container} key={alt}>
						<span>Click on image to close</span>
						<img
							src={full}
							alt={alt}
							className={clsx(_class, styles.image_view_modal)}
							onClick={onImageClick}
						/>
					</div>,
					document.getElementById("fullscreen_image") || document.body,
				)}
		</>
	);
};

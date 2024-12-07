import clsx from "clsx";
import { useEffect, useRef, useState, type FC } from "react";
import { createPortal } from "react-dom";

import styles from "./ImageView.module.scss";

interface IImageViewProps {
	className?: string;
	src: string;
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
	const imageRef = useRef<HTMLImageElement>(null);
	const [imageSrc, setImageSrc] = useState(src);
	const [isModal, setIsModal] = useState(false);

	const onImageClick = () => {
		if (allowFullscreen) {
			setIsModal((prev) => !prev);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (!imageRef.current?.complete) {
				console.log("Attempt to refersh image");

				setImageSrc(`${src}?t=${new Date().getTime()}`);
				return;
			}
		}, 8000);

		return () => clearTimeout(timer);
	}, []);

	const _class = clsx(styles.image_view, className, {
		[styles.clickable]: allowFullscreen,
	});

	return (
		<>
			<img
				src={imageSrc}
				alt={alt}
				className={_class}
				onClick={onImageClick}
				loading={loading}
				ref={imageRef}
			/>
			{allowFullscreen === true &&
				isModal === true &&
				createPortal(
					<div className={styles.image_view_modal_container} key={alt} onClick={onImageClick}>
						<ImageView
							src={full || ""}
							alt={alt}
							className={clsx(_class, styles.image_view_modal)}
						/>
					</div>,
					document.body,
				)}
		</>
	);
};

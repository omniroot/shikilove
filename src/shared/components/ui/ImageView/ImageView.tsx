import clsx from "clsx";
import { useEffect, useRef, useState, type FC } from "react";

import { Portal } from "@ui/Portal/Portal.tsx";
import styles from "./ImageView.module.scss";
import { AnimatePresence } from "motion/react";

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
			<AnimatePresence>
				{allowFullscreen === true && isModal === true && (
					<Portal>
						<div className={styles.image_view_modal_container} key={alt} onClick={onImageClick}>
							<img
								src={full ? full : src}
								alt={alt}
								className={clsx(_class, styles.image_view_modal)}
								loading="eager"
							/>
						</div>
					</Portal>
				)}
			</AnimatePresence>
		</>
	);
};

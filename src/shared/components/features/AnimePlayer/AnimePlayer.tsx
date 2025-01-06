import { Button } from "@ui/Button/Button";
import clsx from "clsx";
import { Maximize2Icon, PauseIcon, PlayIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./AnimePlayer.module.scss";

const formatTime = (seconds: number) => {
	const totalSeconds = Math.floor(seconds);
	const minutes = Math.floor(totalSeconds / 60);
	const hours = Math.floor(minutes / 60);
	const displayMinutes = minutes % 60;
	const displaySeconds = totalSeconds % 60;

	if (hours > 0) {
		return `${hours}:${displayMinutes < 10 ? "0" : ""}${displayMinutes}:${
			displaySeconds < 10 ? "0" : ""
		}${displaySeconds}`;
	} else {
		return `${displayMinutes}:${displaySeconds < 10 ? "0" : ""}${displaySeconds}`;
	}
};

interface IAnimePlayerProps
	extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
	title?: string;
}

type IPlayerStatus = "playing" | "stoped";
export const AnimePlayer: FC<IAnimePlayerProps> = ({ className, title, src, ...rest }) => {
	const [isDrag, setIsDrag] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [isMouseHide, setIsMouseHide] = useState(false);
	const [overlayOpen, setOverlayOpen] = useState(false);
	const [playerStatus, setPlayerStatus] = useState<IPlayerStatus>("stoped");
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [newTime, setNewTime] = useState<number>(0);
	const [previewCoordinate, setPreviewCoordinate] = useState({ x: 0, y: 0 });
	const playerRef = useRef<HTMLVideoElement>(null);
	const positionRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<HTMLDivElement>(null);
	const previewContainerRef = useRef<HTMLDivElement>(null);
	const previewVideoRef = useRef<HTMLVideoElement>(null);

	const togglePlayerStatus = () => {
		const nextStatus = playerStatus === "playing" ? "stoped" : "playing";

		if (nextStatus === "playing") {
			playerRef.current?.play();
		} else {
			playerRef.current?.pause();
		}
		setPlayerStatus(nextStatus);
	};

	const toggleFullscreen = () => {
		console.log({ isFullscreen, docu: document.fullscreenElement });

		if (!isFullscreen) {
			const element = containerRef.current ?? null;
			if (!element) return;
			console.log("enable fullscreen");
			if (element.requestFullscreen) {
				element.requestFullscreen();
				// @ts-expect-error browsers support...
			} else if (element.mozRequestFullScreen) {
				// Firefox
				// @ts-expect-error browsers support...

				element.mozRequestFullScreen();
				// @ts-expect-error browsers support...
			} else if (element.webkitRequestFullscreen) {
				// Chrome, Safari и Opera
				// @ts-expect-error browsers support...

				element.webkitRequestFullscreen();
				// @ts-expect-error browsers support...
			} else if (element.msRequestFullscreen) {
				// IE/Edge
				// @ts-expect-error browsers support...
				element.msRequestFullscreen();
			}

			setIsFullscreen(true);
		} else {
			console.log("disable fullscreen");

			if (document.exitFullscreen) {
				document.exitFullscreen();
				// @ts-expect-error browsers support...
			} else if (document.mozCancelFullScreen) {
				// Firefox
				// @ts-expect-error browsers support...

				document.mozCancelFullScreen();
				// @ts-expect-error browsers support...
			} else if (document.webkitExitFullscreen) {
				// Chrome, Safari и Opera
				// @ts-expect-error browsers support...

				document.webkitExitFullscreen();
				// @ts-expect-error browsers support...
			} else if (document.msExitFullscreen) {
				// IE/Edge
				// @ts-expect-error browsers support...
				document.msExitFullscreen();
			}
			setIsFullscreen(false);
		}
		// setIsFullscreen(!);
		// if (document.fullscreenEnabled)
		// console.log(!!document.fullscreenElement);
	};

	const onPlayButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		togglePlayerStatus();
	};

	const onFullscreenButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		toggleFullscreen();
	};

	const onVideoLoaded = () => {
		if (playerRef.current) {
			playerRef.current.currentTime = 150;
			setDuration(playerRef.current?.duration);
		}
	};

	const onVideoPlaying = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
		setCurrentTime(event.currentTarget.currentTime);
	};

	const onTimelineClick = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		const rect = event.currentTarget.getBoundingClientRect();
		const offsetX = event.clientX - rect.left; // Позиция клика относительно таймлайна
		const newTime = (offsetX / rect.width) * duration; // Вычисляем новое время
		if (playerRef.current) {
			playerRef.current.currentTime = newTime;
		}
		setCurrentTime(newTime);
	};

	const onVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
		event.stopPropagation();
		event.preventDefault();

		// setOverlayOpen((prev) => !prev);
	};

	const onOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		event.preventDefault();

		setOverlayOpen((prev) => !prev);
	};

	const onContainerClick = () => {
		// setOverlayOpen((prev) => !prev);
	};

	useEffect(() => {
		console.log("mouse handler update");

		let timeout: any;

		const mouseHandler = () => {
			if (isMouseHide) {
				setIsMouseHide(false);
				if (containerRef.current) {
					containerRef.current.style.cursor = "auto";
				}
			}

			if (timeout) clearTimeout(timeout);
			// console.log(event);

			timeout = setTimeout(() => {
				if (containerRef.current) {
					containerRef.current.style.cursor = "none";
				}

				setIsMouseHide(true);
				setOverlayOpen(false);
			}, 1000);
		};

		// Устанавливаем новый таймер на 3 секунды

		if (isFullscreen) {
			document.addEventListener("mousemove", mouseHandler);
		}

		return () => {
			if (timeout) clearTimeout(timeout);
			document.removeEventListener("mousemove", mouseHandler);
		};
	}, [isFullscreen, overlayOpen]);

	useEffect(() => {
		const handleMouseEnter = () => {
			console.log("mouse enter");

			// if (!isMouseHide) {
			setOverlayOpen(true);
			// }
		};
		const handleMouseLeave = () => {
			console.log("mouse leave");

			setOverlayOpen(false);
		};

		// const handleFullscreenChange = () => {
		// 	console.log("handle fullscreen");

		// 	if (!document.fullscreenElement) {
		// 		setIsFullscreen(false);
		// 	}
		// };

		if (containerRef.current && playerRef.current) {
			containerRef.current.addEventListener("mouseenter", handleMouseEnter);
			containerRef.current.addEventListener("mouseleave", handleMouseLeave);
			// containerRef.current.addEventListener("fullscreenchange", handleFullscreenChange);
		}
		return () => {
			if (containerRef.current && playerRef.current) {
				containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
				containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
				// containerRef.current.removeEventListener("fullscreenchange", handleFullscreenChange);
			}
		};
	}, []);

	const onDragStart = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>,
	) => {
		event.preventDefault();
		setIsDrag(true);
		if ("clientX" in event) {
			setPreviewCoordinate({ x: event.clientX - 40, y: -70 });
		}
		document.addEventListener("mousemove", onDrag);
		document.addEventListener("mouseup", onDragEnd);
		document.addEventListener("touchmove", onDrag, { passive: false });
		document.addEventListener("touchend", onDragEnd);
	};

	const onDrag = (e: any) => {
		if (timelineRef.current && previewVideoRef.current && positionRef.current) {
			const rect = timelineRef.current.getBoundingClientRect();
			const offsetX = e.clientX ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
			const newTime = Math.max(0, Math.min((offsetX / rect.width) * duration, duration));

			positionRef.current.style.width = `${(newTime / duration) * 100}%`;
			// previewContainerRef.current.style.left = e.clientX;
			previewVideoRef.current.currentTime = newTime;
			setPreviewCoordinate({ x: e.clientX - 40, y: -70 });
			setNewTime(newTime);
		}
	};

	const onDragEnd = () => {
		console.log("drag end");

		setIsDrag(false);
		document.removeEventListener("mousemove", onDrag);
		document.removeEventListener("mouseup", onDragEnd);
		document.removeEventListener("touchmove", onDrag);
		document.removeEventListener("touchend", onDragEnd);
		if (playerRef.current) {
			playerRef.current.currentTime = newTime;
		}
		setCurrentTime(newTime);
	};

	const _class = clsx(styles.player, className, {
		// [styles.fullscreen]: isFullscreen,
	});
	return (
		<div className={styles.container} onClick={onContainerClick} ref={containerRef}>
			<video
				ref={playerRef}
				className={_class}
				onLoadedMetadata={onVideoLoaded}
				onClick={onVideoClick}
				onTimeUpdate={onVideoPlaying}
				src={src}
				{...rest}
			/>
			<AnimatePresence>
				{overlayOpen && !isMouseHide && (
					<motion.div
						className={styles.overlay}
						onClick={onOverlayClick}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<div className={styles.top}>{title}</div>
						<div className={styles.center}>
							<Button circle onClick={onPlayButtonClick}>
								{playerStatus === "playing" ? <PauseIcon /> : <PlayIcon />}
							</Button>
							{/* <span>{isMouseHide ? "true" : "false"}</span> */}
						</div>
						<div className={styles.bottom}>
							{isDrag && (
								<div
									ref={previewContainerRef}
									className={styles.preview_container}
									style={{ left: previewCoordinate.x, top: previewCoordinate.y }}
								>
									<video ref={previewVideoRef} src={src} className={styles.preview_video} />
								</div>
							)}
							<div className={styles.timeline_container}>
								<div className={styles.timeline} onClick={onTimelineClick} ref={timelineRef}>
									<div
										className={styles.position}
										onMouseDown={onDragStart}
										onTouchStart={onDragStart}
										ref={positionRef}
										// onClick={onTimelineClick}
										style={{ width: `${(currentTime / duration) * 100}%` }}
									/>
								</div>
							</div>
							<div className={styles.controls}>
								{formatTime(currentTime)} / {formatTime(duration)}
								<Button
									circle
									onClick={onFullscreenButtonClick}
									className={styles.fullscreen_button}
								>
									<Maximize2Icon />
								</Button>
							</div>
							{/* <input
								type="range"
								min="0"
								max={duration}
								value={currentTime}
								onChange={handleSeek}
								className={styles.seekbar}
							/> */}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

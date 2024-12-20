import clsx from "clsx";
import styles from "./AnimePlayer.module.scss";

import React, { FC, forwardRef, useEffect, useRef, useState } from "react";
import { useToggle } from "@uidotdev/usehooks";
import { Button } from "@ui/Button/Button";
import { PauseIcon, PlayIcon } from "lucide-react";

interface IAnimePlayerProps
	extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {}

type IPlayerStatus = "playing" | "stoped";
export const AnimePlayer = forwardRef<HTMLVideoElement, IAnimePlayerProps>(
	({ className, ...rest }, ref) => {
		const [overlayOpen, toggleOverlayOpen] = useToggle(false);
		const [playerStatus, setPlayerStatus] = useState<IPlayerStatus>("stoped");
		const [duration, setDuration] = useState(0);
		const [currentTime, setCurrentTime] = useState<number>(0);
		const playerRef = useRef<HTMLVideoElement>(null);

		const togglePlayerStatus = () => {
			const nextStatus = playerStatus === "playing" ? "stoped" : "playing";

			if (nextStatus === "playing") {
				playerRef.current?.play();
			} else {
				playerRef.current?.pause();
			}
			setPlayerStatus(nextStatus);
		};

		const onPlayButtonClick = () => {
			togglePlayerStatus();
		};

		const onVideoLoaded = () => {
			if (playerRef.current) setDuration(playerRef.current?.duration);
		};

		const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = Number(event.target.value);
			if (playerRef.current) {
				playerRef.current.currentTime = newValue;
			}
			setCurrentTime(newValue);
		};

		const onOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
			event.stopPropagation();
			// toggleOverlayOpen();
		};

		const onContainerClick = () => {
			toggleOverlayOpen();
		};

		const _class = clsx(styles.player, className);
		return (
			<div className={styles.container} onClick={onContainerClick}>
				<video
					{...rest}
					ref={playerRef}
					className={_class}
					onLoadedMetadata={onVideoLoaded}
					controls
				/>
				{overlayOpen && (
					<div className={styles.overlay} onClick={onOverlayClick}>
						<div className={styles.top}>Video name</div>
						<div className={styles.center}>
							<Button circle onClick={onPlayButtonClick}>
								{playerStatus === "playing" ? <PauseIcon /> : <PlayIcon />}
							</Button>
							<Button onClick={() => toggleOverlayOpen()}>Hide</Button>
						</div>
						<div className={styles.bottom}>
							<div className={styles.timeline_container}>
								<div className={styles.timeline} />
								<div
									className={styles.position}
									style={{ left: (playerRef.current?.currentTime / 60) % 60 }}
								/>
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
					</div>
				)}
			</div>
		);
	},
);

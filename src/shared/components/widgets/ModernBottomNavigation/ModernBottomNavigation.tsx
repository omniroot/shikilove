import { DiscoveryIcon, HomeIcon, SettingsIcon } from "@/shared/icons/index.tsx";
import { Link, useLocation } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./ModernBottomNavigation.module.scss";

export const ModernBottomNavigation = () => {
	const bottomNavigationRef = useRef<HTMLDivElement>(null);
	const activeIndicatorRef = useRef<HTMLDivElement>(null);
	const activeIndicatorStartRef = useRef<HTMLDivElement>(null);
	const activeIndicatorEndRef = useRef<HTMLDivElement>(null);
	const [prevActiveItem, setPrevActiveItem] = useState<HTMLLinkElement | null>(null);
	const currentUrl = useLocation().pathname;

	// pizdec eto rabotaet 6:00 am
	// ok it work on right direction but on left...
	// ok next day, left direction work to

	useEffect(() => {
		if (
			activeIndicatorRef.current &&
			activeIndicatorStartRef.current &&
			activeIndicatorEndRef.current &&
			bottomNavigationRef.current &&
			activeIndicatorStartRef &&
			activeIndicatorEndRef
		) {
			const activeItem = document.getElementById("active_bn") as HTMLLinkElement;
			if (activeItem) {
				const bottomNavgationWidth = bottomNavigationRef.current.offsetWidth;

				const previousItemLeftOffset = prevActiveItem?.offsetLeft ?? 4;
				const previousItemRightOffset =
					bottomNavgationWidth - (prevActiveItem?.offsetLeft || 0) || 4;

				const activeItemLeftOffset = activeItem.offsetLeft;
				const activeItemRightOffset = bottomNavgationWidth - (activeItem.offsetLeft || 0);

				const padding = Number(bottomNavigationRef.current.style.padding);

				// console.log({
				// 	activeItemLink: activeItem.href,
				// 	bottomNavgationLeftOffset,
				// 	bottomNavgationRightOffset,
				// 	previousItemLeftOffset,
				// 	previousItemRightOffset,
				// 	activeItemLeftOffset,
				// 	activeItemRightOffset,
				// });

				const direction =
					activeItem.offsetLeft > activeIndicatorRef.current.offsetLeft ? "right" : "left";

				// move active indicator (don`t touch it)
				activeIndicatorRef.current.style.left = activeItem.offsetLeft + "px";

				// initial
				activeIndicatorStartRef.current.style.left = "unset";
				activeIndicatorStartRef.current.style.right = "unset";
				activeIndicatorEndRef.current.style.left = "unset";
				activeIndicatorEndRef.current.style.right = "unset";

				activeIndicatorStartRef.current.style.visibility = "hidden";
				activeIndicatorStartRef.current.style.width = 50 + "px";
				activeIndicatorEndRef.current.style.visibility = "hidden";
				activeIndicatorEndRef.current.style.width = 50 + "px";
				activeIndicatorEndRef.current.style.transition = "none";

				if (direction === "right") {
					activeIndicatorStartRef.current.style.visibility = "visible";

					activeIndicatorStartRef.current.style.left = previousItemLeftOffset + "px";
					activeIndicatorStartRef.current.style.width =
						activeItemLeftOffset - previousItemLeftOffset - padding + 50 + "px";

					setTimeout(() => {
						if (!activeIndicatorStartRef.current || !activeIndicatorEndRef.current) return;

						console.log(activeItem.offsetLeft);
						activeIndicatorStartRef.current.style.visibility = "hidden";
						activeIndicatorEndRef.current.style.visibility = "visible";

						activeIndicatorEndRef.current.style.width =
							previousItemRightOffset - activeItemRightOffset + 50 + "px";
						activeIndicatorEndRef.current.style.right = activeItemRightOffset - 50 + "px";

						setTimeout(() => {
							if (!activeIndicatorStartRef.current || !activeIndicatorEndRef.current) return;
							activeIndicatorEndRef.current.style.transition = "width 350ms ease";
							activeIndicatorEndRef.current.style.width = "50px";

							// 	setTimeout(() => {
							// 		activeIndicatorEndRef.current.style.visibility = "hidden";
							// 	}, 350);
							// }, 350);
						}, 350);
					}, 350);
				} else {
					activeIndicatorStartRef.current.style.visibility = "visible";

					activeIndicatorStartRef.current.style.right = previousItemRightOffset - 50 + "px";
					activeIndicatorStartRef.current.style.width =
						activeItemRightOffset - previousItemRightOffset - padding + 50 + "px";
					setTimeout(() => {
						if (!activeIndicatorStartRef.current || !activeIndicatorEndRef.current) return;

						activeIndicatorStartRef.current.style.visibility = "hidden";
						activeIndicatorEndRef.current.style.visibility = "visible";

						activeIndicatorEndRef.current.style.width =
							previousItemLeftOffset - activeItemLeftOffset + 50 + "px";
						activeIndicatorEndRef.current.style.left = activeItemLeftOffset + "px";

						setTimeout(() => {
							if (!activeIndicatorStartRef.current || !activeIndicatorEndRef.current) return;

							activeIndicatorEndRef.current.style.transition = "width 350ms ease";
							activeIndicatorEndRef.current.style.width = "50px";
						}, 350);
					}, 350);
				}

				setPrevActiveItem(activeItem);
			}
		}
		1;
	}, [currentUrl]);

	return (
		<div className={styles.bottom_navigation} ref={bottomNavigationRef}>
			<div className={styles.active_indicator} ref={activeIndicatorRef}></div>
			<div className={styles.active_indicator_start} ref={activeIndicatorStartRef}></div>
			<div className={styles.active_indicator_end} ref={activeIndicatorEndRef}></div>
			<Link
				to="/"
				className={styles.bottom_navigation_item}
				activeProps={{ className: styles.active, id: "active_bn" }}
			>
				<HomeIcon />
			</Link>
			<Link
				to="/discovery"
				className={styles.bottom_navigation_item}
				activeProps={{ className: styles.active, id: "active_bn" }}
			>
				<DiscoveryIcon />
			</Link>
			<Link
				to="/settings"
				className={styles.bottom_navigation_item}
				activeProps={{ className: styles.active, id: "active_bn" }}
			>
				<SettingsIcon />
			</Link>
			<Link
				to="/about"
				className={styles.bottom_navigation_item}
				activeProps={{ className: styles.active, id: "active_bn" }}
			>
				<Info />
			</Link>
		</div>
	);
};

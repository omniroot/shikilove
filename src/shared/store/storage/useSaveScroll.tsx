import { useStorage } from "@/shared/store/storage/useStorage";
import { debounce } from "@/shared/utils/debounse.ts";
import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export const useSaveScroll = () => {
	const { addScrollPosition, getScrollPosition } = useStorage();
	const currentUrl = useLocation().pathname;

	useEffect(() => {
		const scroll = getScrollPosition(location.pathname);
		document.body.scrollTop = scroll;
	}, [currentUrl]);

	useEffect(() => {
		const handleScroll = () => {
			console.log("add scroll ", location.pathname, document.body.scrollTop);

			addScrollPosition(location.pathname, document.body.scrollTop);
		};
		document.body.addEventListener(
			"scroll",
			debounce(() => handleScroll(), 500),
		);
		return () => {
			document.body.removeEventListener("scroll", handleScroll);
		};
	}, []);
};

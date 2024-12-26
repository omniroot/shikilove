import { useStorage } from "@/shared/hooks/useStorage.tsx";
import { debounce } from "@/shared/utils/debounse.ts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollSave = () => {
	const { getScrollPosition, addScrollPosition } = useStorage();
	const path = useLocation().pathname;

	useEffect(() => {
		const scroll = getScrollPosition(location.pathname);
		document.body.scrollTop = scroll;
	}, [path]);

	useEffect(() => {
		const handleScroll = () => {
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

	return { scroll };
};

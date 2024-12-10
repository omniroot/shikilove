import { debounce } from "@/shared/utils/debounse.ts";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const useScrollSave = () => {
	const scroll = useRef(0);
	const path = useLocation().pathname;

	useEffect(() => {
		const scroll = Number(sessionStorage.getItem(location.pathname));

		if (!scroll) {
			document.body.scrollTop = 0;
			return;
		}
		document.body.scrollTop = scroll;
	}, [path]);

	useEffect(() => {
		const handleScroll = () => {
			scroll.current = document.body.scrollTop;
			sessionStorage.setItem(location.pathname, String(scroll.current));
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

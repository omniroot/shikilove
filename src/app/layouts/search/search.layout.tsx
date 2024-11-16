import { useFloatingSearchBarStore } from "@/shared/store/store.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import { FloatingSearchBar } from "@widgets/FloatingSearchBar/FloatingSearchBar.tsx";
import { AnimatePresence } from "framer-motion";

export const SearchLayout = () => {
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	const { isFloatingSearchBarOpened } = useFloatingSearchBarStore((state) => state);
	return (
		<>
			{/* {(isTablet || isDesktop) && <FloatingSearchButton />} */}
			<AnimatePresence>
				{isMobile && isFloatingSearchBarOpened && <FloatingSearchBar />}
			</AnimatePresence>
		</>
	);
};

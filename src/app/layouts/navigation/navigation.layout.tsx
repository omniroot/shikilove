import { BottomNavigation } from "@widgets/BottomNavigation/BottomNavigation";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Header } from "@widgets/Header/Header.tsx";

export const NavigationLayout = () => {
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	// const isTablet = useMediaQuery("only screen and (min-width: 769px) and (max-width: 1024px)");
	// const isDesktop = useMediaQuery("only screen and (min-width: 1025px)");
	return (
		<>
			{/* {(isTablet || isDesktop) && <Sidebar />} */}
			{/* {(isTablet || isDesktop) && <FloatingSearchButton />} */}
			{/* <FloatingSearchBar /> */}
			{isMobile && <Header />}
			{isMobile && <BottomNavigation />}
		</>
	);
};

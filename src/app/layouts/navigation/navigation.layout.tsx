import { BottomNavigation } from "@widgets/BottomNavigation/BottomNavigation";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Header } from "@widgets/Header/Header.tsx";
import { Sidebar } from "@widgets/Sidebar/Sidebar.tsx";
import { useSettings } from "@/shared/hooks/useSettings.tsx";

export const NavigationLayout = () => {
	const { showHeader } = useSettings();

	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	const isTablet = useMediaQuery("only screen and (min-width: 769px) and (max-width: 1024px)");
	const isDesktop = useMediaQuery("only screen and (min-width: 1025px)");
	return (
		<>
			{(isTablet || isDesktop) && <Sidebar />}
			{/* {(isTablet || isDesktop) && <FloatingSearchButton />} */}
			{/* <FloatingSearchBar /> */}
			{isMobile && showHeader && <Header />}
			{isMobile && <BottomNavigation />}
		</>
	);
};

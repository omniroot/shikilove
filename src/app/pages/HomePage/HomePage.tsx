import { useFloatingSearchBar } from "@/shared/store/store.tsx";
import { AnimeInfoSection } from "@features/AnimeInfoSection/AnimeInfoSection.tsx";
import { AnimeUserRates } from "@features/AnimeUserRates/AnimeUserRates.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const HomePage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { toggleFloatingSearchBar } = useFloatingSearchBar();

	const status = searchParams.get("status");

	useLayoutEffect(() => {
		setSearchParams({ status: "watching" }, { replace: true });
	}, [status]);
	if (!status) return null;
	return (
		<div>
			<Button onClick={toggleFloatingSearchBar}>Toggle Floating Search bar</Button>
			<AnimeInfoSection title="Watching">
				<AnimeUserRates />
			</AnimeInfoSection>
		</div>
	);
};

export default HomePage;

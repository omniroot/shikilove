import { AnimeInfoSection } from "@features/AnimeInfoSection/AnimeInfoSection.tsx";
import { AnimeUserRates } from "@features/AnimeUserRates/AnimeUserRates.tsx";
import { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const HomePage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const status = searchParams.get("status");

	useLayoutEffect(() => {
		setSearchParams({ status: "watching" }, { replace: true });
	}, [status]);
	if (!status) return null;
	return (
		<div>
			<AnimeInfoSection title="Watching">
				<AnimeUserRates />
			</AnimeInfoSection>
		</div>
	);
};

export default HomePage;

import { AnimeInfoSection } from "@features/AnimeInfoSection/AnimeInfoSection.tsx";
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
			<AnimeInfoSection title="HomePage">
				<span>WIP</span>
			</AnimeInfoSection>
		</div>
	);
};

export default HomePage;

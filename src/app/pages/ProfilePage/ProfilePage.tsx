import { AnimeUserRates } from "@features/AnimeUserRates/AnimeUserRates";
import { UserInfoCard } from "@features/UserInfoCard/UserInfoCard";
import { Box } from "@ui/Box/Box";
import { Typography } from "@ui/Typography/Typography";

export const ProfilePage = () => {
	// if (loading) return "loading...";

	return (
		<Box
			border="none"
			padding="none"
			width="100%"
			flexDirection="column"
			gap="1"
		>
			<Box width="100%">
				<UserInfoCard />
			</Box>
			<Box width="100%" flexDirection="column" gap="1">
				<Typography width="100%" size="2" weight="bold" padding="1">
					Watching
				</Typography>
				<AnimeUserRates />
			</Box>
		</Box>
	);
};

import { ProfileInfoCardSkeleton } from "@pages/user/_components/ProfileInfoCard/ProfileInfoCard.skeleton.tsx";
import { Skeleton } from "@ui/Skeleton/Skeleton.tsx";

export const UserPageSkeleton = () => {
	return (
		<Skeleton variant="container" style={{ height: "100dvh", width: "100%", borderRadius: "16px" }}>
			<ProfileInfoCardSkeleton />
		</Skeleton>
	);
};

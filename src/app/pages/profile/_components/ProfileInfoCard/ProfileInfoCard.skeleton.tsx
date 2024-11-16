import { Skeleton } from "@ui/Skeleton/Skeleton.tsx";

export const ProfileInfoCardSkeleton = () => {
	return (
		<Skeleton
			variant="container"
			style={{
				width: "100%",
				height: "120px",
				padding: "8px",
				gap: "16px",
				alignItems: "center",
				borderRadius: "16px",
			}}
		>
			<Skeleton
				variant="element"
				style={{
					height: "100%",
					width: "20%",
					borderRadius: "16px",
				}}
			/>
			<div style={{ height: "100%", gap: "4px", display: "flex", flexDirection: "column" }}>
				<Skeleton style={{ width: "100px", height: "20px", borderRadius: "4px" }} />
				<Skeleton style={{ width: "150px", height: "20px", borderRadius: "4px" }} />
			</div>
		</Skeleton>
	);
};

import { useFetchUserRates } from "@/shared/hooks/useFetchUserRates";
import {
	DroppedIcon,
	PlannedIcon,
	PostponedIcon,
	WatchedIcon,
	WatchingIcon,
} from "@/shared/icons";
import { AnimeCard } from "@features/AnimeCard/AnimeCard";
import { Box } from "@ui/Box/Box";
import { ButtonGroup } from "@ui/ButtonGroup/ButtonGroup";
import { IconButton } from "@ui/IconButton/IconButton";
import { Typography } from "@ui/Typography/Typography";
import { Repeat } from "lucide-react";
import { useState } from "react";

type IPages =
	| "watching"
	| "planned"
	| "completed"
	| "rewatching"
	| "on_hold"
	| "dropped";

const elements = [
	{
		id: "watching",
		element: (
			<IconButton>
				<WatchingIcon />
				<Typography size="4">watching</Typography>
			</IconButton>
		),
	},
	{
		id: "planned",
		element: (
			<IconButton>
				<PlannedIcon />
				<Typography size="4">planned</Typography>
			</IconButton>
		),
	},
	{
		id: "completed",
		element: (
			<IconButton>
				<WatchedIcon />
				<Typography size="4">watched</Typography>
			</IconButton>
		),
	},
	{
		id: "rewatching",
		element: (
			<IconButton>
				<Repeat />
				<Typography size="4">rewatching</Typography>
			</IconButton>
		),
	},
	{
		id: "on_hold",
		element: (
			<IconButton>
				<PostponedIcon />
				<Typography size="4">postponed</Typography>
			</IconButton>
		),
	},
	{
		id: "dropped",
		element: (
			<IconButton>
				<DroppedIcon />
				<Typography size="4">dropped</Typography>
			</IconButton>
		),
	},
];
export const AnimeUserRates = () => {
	const { userRates } = useFetchUserRates();
	const [activeFilter, setActiveFilter] = useState<IPages>("watching");

	const onButtonGroupClick = (id: IPages) => {
		for (const element of elements) {
			if (element.id === id) {
				setActiveFilter(id);
			}
		}
	};
	return (
		<Box
			width="100%"
			gap="1"
			border="none"
			padding="none"
			flexDirection="column"
		>
			<ButtonGroup
				elements={elements}
				deafultActive="watching"
				onClick={(activeId) => {
					onButtonGroupClick(activeId as IPages);
				}}
			/>
			<Box width="100%" gap="1" border="none" padding="none" flexWrap="wrap">
				{userRates?.map((rate) => {
					if (rate.status === activeFilter) {
						return (
							<AnimeCard
								title={rate.anime.name}
								image={rate.anime.poster.main2xUrl}
								id={rate.anime.id}
							/>
						);
					}
				})}
			</Box>
		</Box>
	);
};

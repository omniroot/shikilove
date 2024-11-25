import { forumApi } from "@/shared/services/forum/forum.api.ts";
import { ICollection } from "@/shared/services/forum/forum.interface.ts";
import { useQuery } from "@tanstack/react-query";

export const useForumCollections = () => {
	const {
		isFetching: isCollectionsLoading,
		data: collections,
		error: collectionsError,
	} = useQuery<ICollection[]>({
		queryKey: ["getCollections"],
		queryFn: forumApi.getCollections,
	});

	return {
		isCollectionsLoading,
		collections,
		collectionsError,
	};
};

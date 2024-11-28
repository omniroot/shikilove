import { forumApi } from "@/shared/services/forum/forum.api.ts";
import { ICritique } from "@/shared/services/forum/forum.interface.ts";
import { useQuery } from "@tanstack/react-query";

export const useForumCritiques = () => {
	const {
		isFetching: isCritiquesLoading,
		data: critiques,
		error: critiquesError,
	} = useQuery<ICritique[]>({
		queryKey: ["getCritiques"],
		queryFn: forumApi.getCritiques,
	});

	return {
		isCritiquesLoading,
		critiques,
		critiquesError,
	};
};

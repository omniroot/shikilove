// import { graphql } from "@/shared/services/graphql.ts";
// import { useQuery } from "@tanstack/react-query";

// interface IResponse {
// 	currentUser: ICurrentUser;
// }

// export const useFetchCurrentUser = () => {
// 	const { isLoading, data, error } = useQuery<IResponse>({
// 		queryKey: ["currentUser"],
// 		queryFn: () => graphql<IResponse>(GET_CURRENT_USER),
// 	});

// 	if (!data?.currentUser) return { data, isLoading, error: error };

// 	const saveUserToLocalStorage = (user: ICurrentUser) => {
// 		localStorage.setItem("user_id", user.id);
// 	};

// 	if (data) {
// 		saveUserToLocalStorage(data.currentUser);
// 		return {
// 			userId: data.currentUser.id,
// 			avatarUrl: data.currentUser.avatarUrl,
// 			nickname: data.currentUser.nickname,
// 			lastOnlineAt: data.currentUser.lastOnlineAt,
// 			isLoading,
// 			error: error,
// 		};
// 	}

// 	return { data, isLoading, error: error };
// };

import { gql, useQuery } from "@apollo/client";

const GET_CURRENT_USER = gql`
	{
		currentUser {
			id
			avatarUrl
			nickname
			lastOnlineAt
		}
	}
`;

interface ICurrentUser {
	id: string;
	avatarUrl: string;
	nickname: string;
	lastOnlineAt: string;
}

interface IResponse {
	currentUser: ICurrentUser;
}

export const useFetchCurrentUser = () => {
	const { loading, data, error } = useQuery<IResponse>(GET_CURRENT_USER);

	if (!data?.currentUser) return { data, loading: loading, error: error };

	const saveUserToLocalStorage = (user: ICurrentUser) => {
		localStorage.setItem("user_id", user.id);
	};

	if (data) {
		saveUserToLocalStorage(data.currentUser);
		return {
			userId: data.currentUser.id,
			avatarUrl: data.currentUser.avatarUrl,
			nickname: data.currentUser.nickname,
			lastOnlineAt: data.currentUser.lastOnlineAt,
			loading: loading,
			error: error,
		};
	}

	return { data, loading: loading, error: error };
};

import { api } from "@/shared/services/api.ts";
import { ICollection, ICritique } from "@/shared/services/forum/forum.interface.ts";

export const forumApi = {
	getCritiques: async () => {
		const { data } = await api.get<ICritique[]>("topics/?forum=critiques&limit=10");
		return data;
	},
	getCollections: async () => {
		const { data } = await api.get<ICollection[]>("topics/?forum=collections&limit=10");
		return data;
	},
};

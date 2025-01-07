import { api } from "@/shared/services/api.ts";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { ICalendar } from "./calendar.interface.ts";

interface IGetCalendar {
	config?: AxiosRequestConfig;
}

interface IUseGetCalendar {
	config?: UseQueryOptions<ICalendar[]>;
}

export const getCalendars = ({ config }: IGetCalendar = {}) => {
	return api.get<ICalendar[]>("calendar", config);
};

export const useGetCalendar = ({ config }: IUseGetCalendar = {}) => {
	return useQuery<ICalendar[]>({
		queryKey: ["calendar"],
		queryFn: async () => {
			const response = await getCalendars();
			return response.data;
		},
		...config,
	});
};

import { calendarApi } from "@/shared/services/calendar/calendar.api.ts";
import { ICalendar } from "@/shared/services/calendar/calendar.interface.ts";
import { useQuery } from "@tanstack/react-query";

export const useCalendar = () => {
	const {
		data: calendar,
		isFetching: calendarLoading,
		error: calendarError,
	} = useQuery<ICalendar[]>({
		queryKey: ["calendar"],
		queryFn: calendarApi.getCalendar,
	});

	return {
		calendar,
		calendarLoading,
		calendarError,
	};
};

import { api } from "@/shared/services/api.ts";
import { ICalendar } from "@/shared/services/calendar/calendar.interface.ts";

export const calendarApi = {
	getCalendar: async () => {
		const { data } = await api.get<ICalendar[]>("calendar");
		return data;
	},
};

import { create } from "zustand";

interface INotification {
	id: string;
	message: string;
}

interface IUseNotificationsStore {
	notifications: INotification[];
	addNotification: (notification: Omit<INotification, "id">) => void;
	removeNotification: (id: string) => void;
}

export const useNotificationsStore = create<IUseNotificationsStore>((set) => ({
	notifications: [],
	addNotification: (notification) => {
		set((state) => ({
			notifications: [...state.notifications, { id: crypto.randomUUID(), ...notification }],
		}));
	},
	removeNotification: (id) => {
		set((state) => ({
			notifications: state.notifications.filter((notification) => notification.id !== id),
		}));
	},
}));

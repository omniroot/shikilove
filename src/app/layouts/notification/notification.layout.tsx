import { useNotificationsStore } from "@/shared/store/notifications/notifications.store.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import styles from "./notification.layout.module.scss";

export const NotificationLayout = () => {
	const { notifications, removeNotification } = useNotificationsStore();

	useEffect(() => {
		if (!notifications.length) return;

		setTimeout(() => {
			removeNotification(notifications[0].id);
		}, 2000);
	}, [notifications]);

	return (
		<ul className={styles.notification_layout}>
			<AnimatePresence mode="popLayout">
				{notifications.length &&
					notifications.map((notification) => {
						return (
							<motion.li
								layout
								key={notification.id}
								initial={{ opacity: 0, x: -150 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 15 }}
								transition={{ duration: 0.6, type: "spring" }}
								className={styles.notification}
							>
								{notification.message}
								<Button
									variant="ghost"
									className={styles.close_button}
									onClick={() => removeNotification(notification.id)}
								>
									<XIcon size={20} />
								</Button>
							</motion.li>
						);
					})}
			</AnimatePresence>
		</ul>
	);
};

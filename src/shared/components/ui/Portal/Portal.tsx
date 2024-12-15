import { AnimatePresence, motion } from "motion/react";
import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
	children: ReactNode;
	show: boolean;
	zIndex?: number;
}

export const Portal: FC<IPortalProps> = ({ children, show, zIndex = 10000 }) => {
	const element = (
		<AnimatePresence>
			{show && (
				<motion.div initial={{ opacity: 0, zIndex }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
	return <>{createPortal(element, document.body)}</>;
};

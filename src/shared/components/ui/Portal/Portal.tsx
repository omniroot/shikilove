import { motion } from "motion/react";
import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
	children: ReactNode;
}
export const Portal: FC<IPortalProps> = ({ children }) => {
	return (
		<>
			{createPortal(
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					{children}
				</motion.div>,
				document.body,
			)}
		</>
	);
};

import { Divider } from "@ui/Divider/Divider.tsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, MouseEvent, ReactNode } from "react";
import styles from "./BottomSheet.module.scss";
import { createPortal } from "react-dom";
interface IBottomSheetProps {
	children?: ReactNode;
	className?: string;
	title?: string;
	onOutsideClick?: () => void;
}
export const BottomSheet: FC<IBottomSheetProps> = ({
	children,
	className,
	title,
	onOutsideClick = () => {},
}) => {
	const _onOutsideClick = () => {
		onOutsideClick();
	};

	const _onBottomSheetClick = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};
	const _class = clsx(styles.bottom_sheet, className);

	return (
		<>
			{createPortal(
				<motion.div
					className={styles.container}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					onClick={_onOutsideClick}
				>
					<motion.div
						initial={{ y: 50 }}
						animate={{ y: 0 }}
						exit={{ y: 50 }}
						transition={{ duration: 0.2 }}
						className={_class}
						onClick={_onBottomSheetClick}
					>
						{title && (
							<>
								<span className={styles.title}>{title}</span>
								<Divider />
							</>
						)}
						{children}
					</motion.div>
				</motion.div>,

				document.body,
			)}
		</>
	);
};

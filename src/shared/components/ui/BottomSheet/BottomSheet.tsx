import { Divider } from "@ui/Divider/Divider.tsx";
import clsx from "clsx";
import { motion } from "motion/react";
import { FC, MouseEvent, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./BottomSheet.module.scss";
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

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

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

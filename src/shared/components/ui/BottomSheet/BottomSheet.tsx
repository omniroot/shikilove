import { ReactNode, FC, MouseEvent } from "react";
import styles from "./BottomSheet.module.scss";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Divider } from "@ui/Divider/Divider.tsx";
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
	const _class = clsx(styles.bottom_sheet, className);

	const _onOutsideClick = () => {
		onOutsideClick();
	};

	const _onBottomSheetClick = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
	};

	return (
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
				<span className={styles.title}>{title}</span>
				<Divider />
				{children}
			</motion.div>
		</motion.div>
	);
};

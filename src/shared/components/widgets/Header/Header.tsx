import { ArrowLeftIcon, SearchIcon } from "@/shared/icons/index.tsx";
import { useFloatingSearchBarStore } from "@/shared/store/store.tsx";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import { motion } from "motion/react";
import styles from "./Header.module.scss";
export const Header = () => {
	const navigate = useNavigate();
	const { toggleFloatingSearchBar } = useFloatingSearchBarStore((state) => state);

	const currentLocation = useLocation().pathname;

	const isRootPage = currentLocation === "/";

	const onDevModeClick = () => {
		navigate({ to: "/about" });
	};

	// const { toggleFloatingSearchBar } = useFloatingSearchBar();
	const mode = import.meta.env.MODE === "development" ? "dev" : "prod";

	return (
		<div className={styles.header} id="header">
			<div id="header-left" className={styles.left}>
				{!isRootPage && (
					<motion.div
						initial={{ rotate: 90 }}
						animate={{ rotate: 0 }}
						exit={{ rotate: 90 }}
						whileTap={{ rotate: 45 }}
						transition={{ duration: 0.4, bounce: 0.25 }}
					>
						<Button
							onClick={() => window.history.back()}
							className={styles.navigate_back_button}
							variant="ghost"
						>
							<ArrowLeftIcon height={20} width={20} />
						</Button>
					</motion.div>
				)}
				<span className={styles.logo} id="header-logo">
					ShikiLove
				</span>
				<span className={styles.dev_mode} onClick={onDevModeClick}>
					{mode}
				</span>
			</div>
			<div id="header-right" className={styles.right}>
				<Button onClick={toggleFloatingSearchBar} variant="ghost">
					<SearchIcon />
				</Button>
			</div>
		</div>
	);
};

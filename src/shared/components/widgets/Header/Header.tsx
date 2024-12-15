// import { Button } from "@/shared/components/ui/Button/Button.tsx";
import { usePackageInfo } from "@/shared/hooks/usePackageInfo.tsx";
import { ArrowLeftIcon, SearchIcon } from "@/shared/icons/index.tsx";
import { useFloatingSearchBarStore } from "@/shared/store/store.tsx";
import { Tooltip } from "@ui/Tooltip/Tooltip.tsx";
import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { Button } from "@ui/Button/Button.tsx";
export const Header = () => {
	const { packageVersion } = usePackageInfo();
	const { toggleFloatingSearchBar } = useFloatingSearchBarStore((state) => state);

	const currentLocation = useLocation().pathname;
	const navigate = useNavigate();

	const isRootPage = currentLocation === "/";

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
							onClick={() => navigate(-1)}
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
				<span className={styles.dev_mode}>
					<Tooltip title={packageVersion} position="bottom">
						{mode}
					</Tooltip>
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

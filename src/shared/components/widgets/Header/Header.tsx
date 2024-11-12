import { ArrowLeftIcon, SearchIcon, SettingsIcon } from "@/shared/icons/index.tsx";
import { useFloatingSearchBar } from "@/shared/store/store.tsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { Button } from "@/shared/components/ui/Button/Button.tsx";
import { IconButton } from "@/shared/components/ui/IconButton/IconButton.tsx";
import { usePackageInfo } from "@/shared/hooks/usePackageInfo.tsx";
import { motion } from "framer-motion";
import { Tooltip } from "@ui/Tooltip/Tooltip.tsx";

export const Header = () => {
	const { packageVersion } = usePackageInfo();
	const currentLocation = useLocation().pathname;
	const navigate = useNavigate();

	const isRootPage = currentLocation === "/";

	const { toggleFloatingSearchBar } = useFloatingSearchBar();
	const mode = import.meta.env.MODE === "development" ? "dev" : "prod";

	return (
		<div className={styles.header}>
			<div className={styles.left}>
				{!isRootPage && (
					<motion.div
						initial={{ rotate: 90 }}
						animate={{ rotate: 0 }}
						exit={{ rotate: 90 }}
						whileTap={{ rotate: 45 }}
						transition={{ duration: 0.4, bounce: 0.25 }}
					>
						<Button onClick={() => navigate(-1)} className={styles.navigate_back_button}>
							<ArrowLeftIcon height={20} width={20} />
						</Button>
					</motion.div>
				)}
				<span className={styles.logo}>ShikiLove</span>
				<span className={styles.dev_mode}>
					<Tooltip title={packageVersion} position="bottom">
						{mode}
					</Tooltip>
				</span>
			</div>
			<div className={styles.right}>
				<Link to={"/settings"} className={styles.settings_button}>
					<IconButton>
						<SettingsIcon />
					</IconButton>
				</Link>

				<Button className={styles.search_button} onClick={toggleFloatingSearchBar}>
					<IconButton>
						<SearchIcon />
					</IconButton>
				</Button>
			</div>
		</div>
	);
};

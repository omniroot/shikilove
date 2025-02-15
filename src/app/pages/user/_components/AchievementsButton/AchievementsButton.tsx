import { AchievementsIcon } from "@/shared/icons/index.tsx";
import { Button } from "@ui/Button/Button.tsx";
import styles from "./AchievementsButton.module.scss";
import { Link } from "@tanstack/react-router";
// interface IAchievementsButtonProps {}
export const AchievementsButton = () => {
	return (
		<Button className={styles.achievements_button} variant="outline">
			<Link to="/">
				<AchievementsIcon />
				achievements
			</Link>
		</Button>
	);
};

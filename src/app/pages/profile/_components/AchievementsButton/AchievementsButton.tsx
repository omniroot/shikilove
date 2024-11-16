import { AchievementsIcon } from "@/shared/icons/index.tsx";
import { Button } from "@ui/Button/Button.tsx";
import styles from "./AchievementsButton.module.scss";
// interface IAchievementsButtonProps {}
export const AchievementsButton = () => {
	return (
		<Button className={styles.achievements_button} as="Link" to="achievements" variant="ternary">
			<AchievementsIcon />
			achievements
		</Button>
	);
};

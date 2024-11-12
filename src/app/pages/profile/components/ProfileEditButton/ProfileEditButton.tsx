import { ReactNode, FC } from "react";
import styles from "./ProfileEditButton.module.scss";
import { Button } from "@ui/Button/Button.tsx";

interface IProfileEditButtonProps {
	children?: ReactNode;
}

export const ProfileEditButton: FC<IProfileEditButtonProps> = ({ children }) => {
	return (
		<Button as="Link" to="edit" className={styles.profile_edit_button}>
			{children}
		</Button>
	);
};

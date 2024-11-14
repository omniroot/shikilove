import { ReactNode, FC } from "react";
import styles from "./ProfileEdit.module.scss";
interface IProfileEditProps {
	children?: ReactNode;
}
export const ProfileEditPage: FC<IProfileEditProps> = () => {
	return <div className={styles.profile_edit_page}>profile edit page</div>;
};

export default ProfileEditPage;

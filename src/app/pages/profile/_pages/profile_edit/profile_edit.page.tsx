import { ReactNode, FC } from "react";
import styles from "./profile_edit.page.module.scss";
import { useUser } from "@/shared/services/user/useUser.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";

interface IProfileEditProps {
	children?: ReactNode;
}

export const ProfileEditPage: FC<IProfileEditProps> = () => {
	const { currentUser } = useUser();

	return (
		<div className={styles.profile_edit_page}>
			<span>profile edit page1</span>
			<ImageView src={currentUser?.avatar} />
			<input />
		</div>
	);
};

export default ProfileEditPage;

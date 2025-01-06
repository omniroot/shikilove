import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { FC, ReactNode } from "react";
import styles from "./profile_edit.page.module.scss";
import { useUser } from "@pages/user/_api/user";

interface IProfileEditProps {
	children?: ReactNode;
}

export const ProfileEditPage: FC<IProfileEditProps> = () => {
	const { data: currentUser } = useUser();

	return (
		<div className={styles.profile_edit_page}>
			<span>profile edit page1</span>
			<ImageView src={currentUser?.avatar || ""} />
			<input />
		</div>
	);
};

export default ProfileEditPage;

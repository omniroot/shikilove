import { FC, ReactNode } from "react";
import styles from "./profile.page.module.scss";
import { useUser } from "@/shared/services/user/useUser.tsx";
import { ProfileInfoCard, ProfileEditButton } from "@pages/profile/components/index.ts";

interface IProfilePageProps {
	children?: ReactNode;
}

export const ProfilePage: FC<IProfilePageProps> = () => {
	const { currentUser } = useUser();

	return (
		<div className={styles.profile_page}>
			<ProfileInfoCard currentUser={currentUser} />
			<ProfileEditButton>Edit profile</ProfileEditButton>
		</div>
	);
};

export default ProfilePage;

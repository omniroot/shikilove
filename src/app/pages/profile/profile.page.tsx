import { useAuthorization } from "@/shared/services/auth/useAuthorization";
import { ProfileEditButton } from "@pages/profile/components/ProfileEditButton/ProfileEditButton.tsx";
import { ProfileInfoCard } from "@pages/profile/components/ProfileInfoCard/ProfileInfoCard.tsx";
import { FC, ReactNode } from "react";
import styles from "./profile.page.module.scss";

interface IProfilePageProps {
	children?: ReactNode;
}

export const ProfilePage: FC<IProfilePageProps> = () => {
	const { fullCurrentUser } = useAuthorization();

	return (
		<div className={styles.profile_page}>
			<ProfileInfoCard fullCurrentUser={fullCurrentUser} />
			<ProfileEditButton>Edit profile</ProfileEditButton>
		</div>
	);
};

export default ProfilePage;

import { useUser } from "@/shared/services/user/useUser.tsx";
import { ProfileInfoCard, ProfileUserRates } from "@pages/profile/_components";
import { FC, ReactNode, useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./profile.page.module.scss";

interface IProfilePageProps {
	children?: ReactNode;
}

export const ProfilePage: FC<IProfilePageProps> = () => {
	const { currentUser } = useUser();
	const [searchParams, setSearchParams] = useSearchParams();

	useLayoutEffect(() => {
		setSearchParams({ status: "watching" });
	}, [searchParams]);

	return (
		<div className={styles.profile_page}>
			<ProfileInfoCard currentUser={currentUser} />
			<ProfileUserRates />
		</div>
	);
};

export default ProfilePage;

import { MessageIcon, ProfileEditIcon } from "@/shared/icons/index.tsx";
import { ProfileInfoCardSkeleton } from "@pages/user/_components/ProfileInfoCard/ProfileInfoCard.skeleton";
import { Button } from "@ui/Button/Button.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Tooltip } from "@ui/Tooltip/Tooltip.tsx";
import clsx from "clsx";
import dayjs from "dayjs";
import { FC } from "react";
import styles from "./ProfileInfoCard.module.scss";
import { Link } from "@tanstack/react-router";
import { IUser } from "@/features/users/api/getUser/getUser.types";

interface IProfileInfoCardProps {
	className?: string;
	currentUser?: IUser;
}

export const ProfileInfoCard: FC<IProfileInfoCardProps> = ({ className, currentUser }) => {
	const _class = clsx(styles.profile_info_card, className);

	if (!currentUser) return <ProfileInfoCardSkeleton />;
	const _lastOnline = dayjs(currentUser.last_online_at).fromNow();
	const userOnline = currentUser?.last_online === "сейчас на сайте" ? "Online" : "Offline";

	return (
		<div className={_class}>
			<ImageView
				src={currentUser.image.x80}
				full={currentUser.image.x148}
				allowFullscreen
				className={styles.user_image}
			/>
			<div className={styles.info}>
				<div className={styles.first_line}>
					<span className={styles.nickname}>{currentUser.nickname}</span>
					<Tooltip title={_lastOnline} className={styles.tooltip}>
						<span className={styles.last_online_at}>{userOnline}</span>
					</Tooltip>
				</div>
				<div className={styles.second_line}>
					<span className={styles.about}>{currentUser?.about}</span>
				</div>
			</div>
			<div className={styles.user_actions}>
				<Button className={styles.message_button}>
					<Link to="/">
						<MessageIcon />
					</Link>
				</Button>
				<Button className={styles.profile_edit_button}>
					<Link to="/">
						<ProfileEditIcon />
					</Link>
				</Button>
			</div>
		</div>
	);
};

import { MessageIcon, MoreIcon } from "@/shared/icons/index.tsx";
import { IUser } from "@/shared/services/auth/auth.interface.ts";
import { ProfileInfoCardSkeleton } from "@pages/profile/components/ProfileInfoCard/ProfileInfoCard.skeleton.tsx";
import { IconButton } from "@ui/IconButton/IconButton.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Tooltip } from "@ui/Tooltip/Tooltip.tsx";
import clsx from "clsx";
import dayjs from "dayjs";
import { FC } from "react";
import styles from "./ProfileInfoCard.module.scss";

interface IProfileInfoCardProps {
	className?: string;
	fullCurrentUser?: IUser;
}

export const ProfileInfoCard: FC<IProfileInfoCardProps> = ({ className, fullCurrentUser }) => {
	const _class = clsx(styles.profile_info_card, className);

	if (!fullCurrentUser) return <ProfileInfoCardSkeleton />;
	const _lastOnline = dayjs(fullCurrentUser.last_online_at).fromNow();
	const userOnline = fullCurrentUser?.last_online === "сейчас на сайте" ? "Online" : "Offline";
	return (
		<div className={_class}>
			<ImageView
				src={fullCurrentUser.avatar}
				full={fullCurrentUser.avatar}
				allowFullscreen
				className={styles.user_image}
			/>
			<div className={styles.info}>
				<div className={styles.first_line}>
					<span className={styles.nickname}>{fullCurrentUser.nickname}</span>
					<Tooltip title={_lastOnline} className={styles.tooltip}>
						<span className={styles.last_online_at}>{userOnline}</span>
					</Tooltip>
				</div>
				<div className={styles.second_line}>
					<span className={styles.about}>{fullCurrentUser?.about}</span>
				</div>
			</div>
			<div className={styles.user_actions}>
				<IconButton className={styles.message_button}>
					<MessageIcon />
				</IconButton>
				<IconButton className={styles.more_button}>
					<MoreIcon />
				</IconButton>
			</div>
		</div>
	);
};

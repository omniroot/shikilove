import { ReactNode, FC } from "react";
import styles from "./UserRateEditBottomSheet.module.scss";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Input } from "@ui/Input/Input.tsx";
interface IUserRateEditBottomSheetProps {
	anime: IAnime | undefined;
	onOutsideClick: () => void;
}
export const UserRateEditBottomSheet: FC<IUserRateEditBottomSheetProps> = ({
	anime,
	onOutsideClick,
}) => {
	if (!anime) return;
	return (
		<BottomSheet title="Edit user rate" onOutsideClick={onOutsideClick}>
			<div className={styles.user_rate_edit_container}>
				<Input defaultValue={String(anime.userRate?.episodes || 0)} />
				<Input defaultValue={String(anime.userRate?.status || "Watching")} />
			</div>
		</BottomSheet>
	);
};

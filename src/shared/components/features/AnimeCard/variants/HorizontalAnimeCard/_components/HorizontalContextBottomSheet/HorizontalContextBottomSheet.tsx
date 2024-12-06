import { PlusIcon } from "@/shared/icons/index.tsx";
import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { ChevronRight } from "lucide-react";
import { FC, useState } from "react";
import styles from "./HorizontalContextBottomSheet.module.scss";

interface IHorizontalContextBottomSheetProps {
	anime: IAnimeCard;
	onOutsideClick: () => void;
}

export const HorizontalContextBottomSheet: FC<IHorizontalContextBottomSheetProps> = ({
	anime,
	onOutsideClick,
}) => {
	const [addToSubMenuVisible, setAddToSubMenuVisible] = useState(false);

	return (
		<BottomSheet title={anime.name} onOutsideClick={onOutsideClick}>
			<Button
				className={styles.context_button}
				onClick={() => setAddToSubMenuVisible((prev) => !prev)}
			>
				<PlusIcon />
				Add to
				<div className={styles.context_button_right}>
					<ChevronRight
						style={
							addToSubMenuVisible ? { transform: "rotate(90deg)" } : { transform: "rotate(0deg)" }
						}
					/>
				</div>
			</Button>
			{addToSubMenuVisible && (
				<div className={styles.add_to_submenu}>
					<Button className={styles.context_button}>watching</Button>
					<Button className={styles.context_button}>watched</Button>
				</div>
			)}
		</BottomSheet>
	);
};

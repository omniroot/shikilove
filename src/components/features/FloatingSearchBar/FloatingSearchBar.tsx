import { useFloatingSearchBar } from "@/shared/store/store.tsx";
import { createPortal } from "react-dom";
import styles from "./FloatingSearchBar.module.scss";
import { SearchIcon } from "@/shared/icons/index.tsx";
import { useState } from "react";
import { useSearchAnime } from "@/shared/hooks/useSearchAnime.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
export const FloatingSearchBar = () => {
	const { isFloatingSearchBarOpened, toggleFloatingSearchBar } = useFloatingSearchBar();
	const [searchValue, setSearchValue] = useState("");
	const { refetchSearchAnimes, searchAnimes, setSearchAnimesQuery } = useSearchAnime();

	const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
		setSearchAnimesQuery(event.target.value);
	};

	const onSearchFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		refetchSearchAnimes();
		// alert(`Search ${searchValue}`);
	};

	const onSearchButtonClick = () => {
		alert(`Search ${searchValue}`);
		refetchSearchAnimes();
		// searchAnime?.(searchValue);
	};

	if (isFloatingSearchBarOpened === true) {
		const modal = document.getElementById("modal") || document.body;
		modal.style.display = "flex";
	} else {
		const modal = document.getElementById("modal") || document.body;
		modal.style.display = "none";
	}

	return (
		<>
			{createPortal(
				<div className={styles.floating_search_bar_container} onClick={toggleFloatingSearchBar}>
					<div className={styles.floating_search_bar} onClick={(e) => e.stopPropagation()}>
						<form className={styles.search_form} onSubmit={onSearchFormSubmit}>
							<div className={styles.left}>
								<SearchIcon className={styles.search_icon} width={24} height={24} />
								{/* <div className={styles.placeholder}>Name:</div> */}
								<input
									type="text"
									className={styles.search_input}
									placeholder="Name:"
									onChange={onSearchInputChange}
								/>
							</div>
							<div className={styles.right}>
								<button
									type="button"
									onClick={onSearchButtonClick}
									className={styles.search_button}
								>
									<SearchIcon width={24} height={24} />
								</button>
							</div>
						</form>
						<div className={styles.search_results}>
							<AnimeList>
								{searchAnimes?.map((anime) => (
									<AnimeCard
										id={anime.id}
										image={anime.poster.main2xUrl}
										key={anime.id}
										title={anime.name}
										userEpisodes={anime.userRate?.episodes}
										userStatus={anime.userRate?.status}
									/>
								))}
							</AnimeList>
						</div>
					</div>
				</div>,
				document.getElementById("modal") || document.body,
			)}
		</>
	);
};

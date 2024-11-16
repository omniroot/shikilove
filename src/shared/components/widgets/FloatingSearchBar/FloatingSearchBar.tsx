import { useSearchAnime } from "@/shared/hooks/useSearchAnime.tsx";
import { SearchIcon } from "@/shared/icons/index.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { useDebounce } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import styles from "./FloatingSearchBar.module.scss";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { getAnimeCardData } from "@/shared/utils/getAnimeCardData.ts";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";

export const FloatingSearchBar = () => {
	const [searchInput, setSearchInput] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const debouncedSearchInput = useDebounce(searchInput, 700);
	const {
		searchAnimes,
		searchAnimesIsLoading,
		refetchSearchAnimes,
		searchAnimesQuery,
		setSearchAnimesQuery,
	} = useSearchAnime("");

	const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(event.target.value);
		setSearchAnimesQuery(searchInput);
	};

	useEffect(() => {
		if (debouncedSearchInput !== "" && searchAnimesQuery !== "") {
			console.log("SEARCHED", debouncedSearchInput);

			refetchSearchAnimes();
			localStorage.setItem("last_search", debouncedSearchInput);
		}
	}, [debouncedSearchInput]);

	useEffect(() => {
		inputRef.current?.focus();
	}, [searchAnimesIsLoading]);

	const onSearchSubmit = (event: FormEvent<HTMLFormElement> | null) => {
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}
		refetchSearchAnimes();
	};

	return (
		<motion.div
			className={styles.container}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<motion.div
				className={styles.floating_search_bar}
				initial={{ y: -50 }}
				animate={{ y: 0 }}
				exit={{ y: -50 }}
				transition={{ duration: 0.2 }}
			>
				<form className={styles.search_form} onSubmit={onSearchSubmit}>
					<input
						className={styles.search_input}
						value={searchInput}
						placeholder={localStorage.getItem("last_search") || "Search"}
						onChange={onSearchInputChange}
						disabled={searchAnimesIsLoading}
						ref={inputRef}
					/>
					<div className={styles.search_actions}>
						<Button className={styles.search_button} onClick={() => onSearchSubmit(null)}>
							<SearchIcon />
						</Button>
					</div>
				</form>
				{searchAnimesIsLoading ? (
					<div>Loading</div>
				) : (
					<AnimeList scroll="vertical" className={styles.results}>
						{searchAnimes?.map((anime) => {
							return <AnimeCard key={anime.id} animeCard={getAnimeCardData(anime)} />;
						})}
					</AnimeList>
				)}
			</motion.div>
		</motion.div>
	);
};

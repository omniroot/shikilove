import { useSearchAnime } from "@/shared/hooks/useSearchAnime.tsx";
import { SearchIcon } from "@/shared/icons/index.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { useDebounce } from "@uidotdev/usehooks";
import { motion } from "motion/react";
import { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import styles from "./FloatingSearchBar.module.scss";
import { useFloatingSearchBarStore } from "@/shared/store/store.tsx";

export const FloatingSearchBar = () => {
	const {
		searchAnimes,
		searchAnimesIsLoading,
		refetchSearchAnimes,
		searchAnimesQuery,
		setSearchAnimesQuery,
	} = useSearchAnime("");
	const debouncedSearchAnimesQuery = useDebounce(searchAnimesQuery, 700);
	const inputRef = useRef<HTMLInputElement>(null);
	const { toggleFloatingSearchBar } = useFloatingSearchBarStore();

	const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchAnimesQuery(event.target.value);
	};

	useEffect(() => {
		if (debouncedSearchAnimesQuery !== "") {
			console.log("SEARCHED", debouncedSearchAnimesQuery);

			refetchSearchAnimes();
			localStorage.setItem("last_search", debouncedSearchAnimesQuery);
		}
	}, [debouncedSearchAnimesQuery]);

	useEffect(() => {
		inputRef.current?.focus();
	}, [searchAnimesIsLoading]);

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

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
						value={searchAnimesQuery}
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
							return (
								<AnimeCard
									key={anime.id}
									variant="horizontal"
									anime={{ id: anime.id, poster: anime.poster.main2xUrl, name: anime.name }}
									onClick={toggleFloatingSearchBar}
								/>
							);
						})}
					</AnimeList>
				)}
			</motion.div>
		</motion.div>
	);
};

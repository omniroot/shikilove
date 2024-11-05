import { useSearchAnime } from "@/shared/hooks/useSearchAnime.tsx";
import { SearchIcon, FilterIcon } from "@/shared/icons/index.tsx";
import { useGlobalStore } from "@/shared/store/store.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { useState, useEffect } from "react";
import styles from "./SearchPage.module.scss";

export const SearchPage = () => {
	const { setRightSidebarContent, toggleRightSidebar } = useGlobalStore((state) => state);
	const [searchValue, setSearchValue] = useState("");
	const { refetchSearchAnimes, searchAnimes, setSearchAnimesQuery } = useSearchAnime();

	const rightSideBar = <div>sidebar</div>;

	const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
		setSearchAnimesQuery(event.target.value);
	};

	const onSearchFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		refetchSearchAnimes?.();
	};

	const onSearchButtonClick = () => {
		refetchSearchAnimes?.();
	};
	console.log("@", searchAnimes);

	useEffect(() => {
		setRightSidebarContent(rightSideBar);
	}, [setRightSidebarContent]);
	return (
		<div className={styles.search_page}>
			<span className={styles.title}>Search</span>
			<span className={styles.about}>Explore the world of anime</span>
			<form className={styles.search_form} onSubmit={onSearchFormSubmit}>
				<div className={styles.left}>
					<SearchIcon className={styles.search_icon} width={24} height={24} />
					{/* <div className={styles.placeholder}>Name:</div> */}
					<input
						type="text"
						className={styles.search_input}
						placeholder="Name:"
						value={searchValue}
						onChange={onSearchInputChange}
					/>
				</div>
				<div className={styles.right}>
					<button type="button" onClick={toggleRightSidebar} className={styles.filter_button}>
						<FilterIcon width={24} height={24} />
						filters
					</button>
					<button type="button" onClick={onSearchButtonClick} className={styles.search_button}>
						<SearchIcon width={24} height={24} />
					</button>
				</div>
			</form>
			<AnimeList>
				{!!searchAnimes &&
					searchAnimes.map((anime) => {
						return <AnimeCard key={anime.id} variant="search" searchAnime={anime} />;
					})}
			</AnimeList>
		</div>
	);
};

export default SearchPage;

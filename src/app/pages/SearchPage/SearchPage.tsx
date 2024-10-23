import { FilterIcon, SearchIcon } from "@/shared/icons";
import styles from "./SearchPage.module.scss";
import { useGlobalStore } from "@/shared/store/store";
import { useEffect, useState } from "react";
import { useSearchAnime } from "@/shared/hooks/useSearchAnime";
import { AnimeCard } from "@features/AnimeCard/AnimeCard";
import { AnimeList } from "@features/AnimeList/AnimeList";

export const SearchPage = () => {
	const { setRightSidebarContent, toggleRightSidebar } = useGlobalStore(
		(state) => state,
	);
	const [searchValue, setSearchValue] = useState("");
	const { searchAnime, animes } = useSearchAnime();

	const rightSideBar = <div>sidebar</div>;

	const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const onSearchFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		searchAnime?.(searchValue);
	};

	const onSearchButtonClick = () => {
		searchAnime?.(searchValue);
	};

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
						onChange={onSearchInputChange}
					/>
				</div>
				<div className={styles.right}>
					<button
						type="button"
						onClick={toggleRightSidebar}
						className={styles.filter_button}
					>
						<FilterIcon width={24} height={24} />
						filters
					</button>
					<button
						type="button"
						onClick={onSearchButtonClick}
						className={styles.search_button}
					>
						<SearchIcon width={24} height={24} />
					</button>
				</div>
			</form>
			<AnimeList>
				{!!animes &&
					animes.map((anime) => {
						console.log("@", anime);
						return (
							<AnimeCard
								key={anime.id}
								id={anime.id}
								image={anime.poster.main2xUrl}
								title={anime.name}
								userEpisodes={anime.userRate && anime.userRate.episodes}
								userStatus={anime.userRate && anime.userRate.status}
							/>
						);
					})}
			</AnimeList>
		</div>
	);
};

export default SearchPage;

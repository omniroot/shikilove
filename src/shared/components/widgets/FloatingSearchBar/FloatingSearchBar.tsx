import { useSearchAnime } from "@/shared/hooks/useSearchAnime.tsx";
import { SearchIcon } from "@/shared/icons/index.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { useDebounce } from "@uidotdev/usehooks";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import styles from "./FloatingSearchBar.module.scss";

export const FloatingSearchBar = () => {
	const [searchInput, setSearchInput] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const debouncedSearchInput = useDebounce(searchInput, 700);
	const { searchAnimes, searchAnimesIsLoading, refetchSearchAnimes, setSearchAnimesQuery } =
		useSearchAnime();

	const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(event.target.value);
		setSearchAnimesQuery(searchInput);
	};

	useEffect(() => {
		if (debouncedSearchInput !== "") {
			refetchSearchAnimes();
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
	};

	return (
		<div className={styles.container}>
			<div className={styles.floating_search_bar}>
				<form className={styles.search_form} onSubmit={onSearchSubmit}>
					<input
						className={styles.search_input}
						value={searchInput}
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
					<span>{searchAnimes?.map((anime) => anime.name)}</span>
				)}
			</div>
		</div>
	);
};

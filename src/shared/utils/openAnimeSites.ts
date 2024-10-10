type IAnimesSites = "hdrezka" | "anilibria" | "animego" | "anidub"
export const openAnimeExternal = (name: string, site: IAnimesSites) => {
	let link = ""

	if (site === "hdrezka") {
		link = `https://hdreskan7.kinomir.cam/search?q=${name}`
	}
	if (site === "anilibria") {
		link = `https://anilibria.best/index.php?do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=${name}`
	}
	if (site === "anidub") {
		link = `https://anidub.pro/index.php?do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=${name}`
	}
	if (site === "animego") {
		link = `https://animego.org/search/all?q=${name}`
	}

	window.open(link)
}

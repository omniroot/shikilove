import axios from "axios";

type IAnimesSites = "hdrezka" | "anilibria" | "animego" | "anidub" | "hanime" | "nhentai";

interface IHAnimeResponseJson {
	slug: string;
}
export const openAnimeExternal = async (name: string, site: IAnimesSites) => {
	let link = "";

	if (site === "hdrezka") {
		link = `https://hdreskan7.kinomir.cam/search?q=${name}`;
	}
	if (site === "anilibria") {
		link = `https://anilibria.best/index.php?do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=${name}`;
	}
	if (site === "anidub") {
		link = `https://anidub.pro/index.php?do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=${name}`;
	}
	if (site === "animego") {
		link = `https://animego.org/search/all?q=${name}`;
	}

	if (site === "hanime") {
		link = `https://search.htv-services.com/`;
		const response = await axios.post<{ hits: string }>("https://search.htv-services.com/", {
			search_text: name,
			blacklist: [],
			brands: [],
			order_by: "created_at_unix",
			ordering: "desc",
			page: 0,
			tags: [],
			tags_mode: "AND",
		});

		const { data } = response;
		if (!data) console.log(response);
		const jsonResponse = JSON.parse(data.hits) as IHAnimeResponseJson[];

		link = `https://hanime.tv/videos/hentai/${jsonResponse[0].slug}`;
	}

	if (site === "nhentai") {
		link = `https://nhentai.net/search/?q=${name}`;
	}
	console.log("@ open site ", link);
	window.open(link);
};

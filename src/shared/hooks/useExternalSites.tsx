import axios from "axios";

interface IAnilibData {
	id: number;
	name: string;
	rus_name: string;
	eng_name: string;
	slug: string;
	slug_url: string;
	cover: {
		filename: string;
		thumbnail: string;
		default: string;
		md: string;
	};
	ageRestriction: {
		id: number;
		label: string;
	};
	site: number;
	type: {
		id: number;
		label: string;
	};

	releaseDate: string;
	rating: {
		average: string;
		averageFormated: string;
		votes: number;
		votesFormated: string;
		user: number;
	};
	model: string;
	status: {
		id: number;
		label: string;
	};
	releaseDateString: string;
	shiki_rate: unknown | null;
}

export const useExternalSites = () => {
	const openAnilib = async (name: string = "Error in Shikilove?") => {
		const { data } = await axios.get<{ data: IAnilibData[] }>(
			`https://api.mangalib.me/api/anime?fields[]=rate_avg&fields[]=rate&fields[]=releaseDate&q=${name}`,
		);
		console.log(data.data);
		window.open(`https://anilib.me/ru/anime/${data.data[0].slug_url}`, "_blank");
		return data.data;
	};

	// HENTAI
	const openHentaiHaven = (name: string = "Error in Shikilove?") => {
		window.open(`https://nhentaihaven.org/?s=${name}&post_type=wp-manga`);
	};

	return { openAnilib, openHentaiHaven };
};

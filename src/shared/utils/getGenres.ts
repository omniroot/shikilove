export const getGenres = (genres: string[]) => {
	let result = "";
	genres.forEach((genre) => {
		result += " " + genre.russian;
	});
	return result;
};

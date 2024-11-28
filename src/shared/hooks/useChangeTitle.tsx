export const useChangeTitle = () => {
	const changeTitle = (title: string) => {
		if (title === "") {
			document.title = `ShikiLove`;
			return;
		}
		document.title = `${title} - ShikiLove`;
	};

	return { changeTitle };
};

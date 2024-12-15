interface IDescriptionItem {
	linkType: string;
	linkId: string;
	linkText: string;
	linkCloseTag: string;
}

function replaceTextInRange(originalText: string, start: number, end: number, newText: string) {
	// Проверяем, что позиции корректны
	if (start < 0 || end > originalText.length || start >= end) {
		throw new Error("Некорректные позиции");
	}

	// Заменяем текст
	return originalText.slice(0, start) + newText + originalText.slice(end);
}

export const parseShikimoriText = (description: string) => {
	const regex = /(\w+)=(\d+)\](.*?)\[(\/.*?)\]/gim;
	const regex2 = /\[\w+=\d+\].*?\[\/.*?\]/gim;
	const matches = description.matchAll(regex);
	const descriptionsMatches: IDescriptionItem[] = [];
	const coordinates = [];
	let match;
	let newText = "";

	for (const match of matches) {
		descriptionsMatches.push({
			linkType: match[1],
			linkId: match[2],
			linkText: match[3].trim(),
			linkCloseTag: match[4],
		});
	}

	while ((match = regex2.exec(description)) !== null) {
		coordinates.push({
			start: match.index,
			end: match.index + match[0].length,
		});
	}
	// console.log(coordinates);

	newText = description;

	let i = coordinates.length - 1;
	for (const coordinate of coordinates.reverse()) {
		newText = replaceTextInRange(
			newText,
			coordinate.start,
			coordinate.end,
			`<a href="https://shikimori.one/characters/${descriptionsMatches[i].linkId}" target="_blank">${descriptionsMatches[i].linkText}</a>`,
		);
		i = i - 1;
	}

	// console.log(newText);

	return newText;
};

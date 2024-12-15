export const debounce = <F extends (...args: unknown[]) => void>(
	func: F,
	timeout = 300,
): ((...args: Parameters<F>) => void) => {
	let timer: NodeJS.Timeout;
	return (...args: Parameters<F>) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args);
		}, timeout);
	};
};

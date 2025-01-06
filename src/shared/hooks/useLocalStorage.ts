import { useEffect, useState } from "react";

export const useLocalStorage = <T>(
	key: string,
	initialValue: T,
): [T, (newValue: T | ((prevState: T) => T)) => void] => {
	const [value, setNewValue] = useState<T>(() => {
		const storage = localStorage.getItem(key);
		if (!storage) {
			localStorage.setItem(key, JSON.stringify(initialValue));
		}
		return storage ? JSON.parse(storage) : initialValue;
	});

	const setValue = (newValue: T | ((prev: T) => T)) => {
		setNewValue((prevState) => {
			localStorage.setItem(key, JSON.stringify(newValue));
			if (typeof newValue === "function") {
				return (newValue as (prevState: T) => T)(prevState);
			}
			return newValue;
		});
		window.dispatchEvent(new CustomEvent("storage_change", { detail: { newValue } }));
	};

	useEffect(() => {
		const handleStorageChange = (event: CustomEvent<{ newValue: T }>) => {
			const newValue = event.detail.newValue;

			setNewValue(newValue);
		};

		window.addEventListener("storage_change", handleStorageChange as EventListener);
		return () => window.removeEventListener("storage_change", handleStorageChange as EventListener);
	}, []);

	console.log(value);

	return [value, setValue];
};

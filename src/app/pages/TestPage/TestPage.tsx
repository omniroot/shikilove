import { useEffect } from "react";
import styles from "./TestPage.module.scss";
import axios from "axios";

export const TestPage = () => {

	useEffect(() => {
		const fetchData = async () => {
			const data = await axios.get("https://www.anilibria.tv/release/make-heroine-ga-oosugiru.html", {})
			console.log(data)
		}
		fetchData()
	}, [])

	return <div className={styles.test}>
		<iframe src="https://kodik.info/seria/1331355/e03d43d6288c6acdca1dfae4b6f6a882/720p?translations=false&min_age=16" allowFullScreen></iframe>
	</div>;
};

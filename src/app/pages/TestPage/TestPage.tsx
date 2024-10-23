import { ProfileIcon, SettingsIcon } from "@/shared/icons/index.tsx";
import { IconButton } from "@ui/IconButton/IconButton.tsx";
import { Tooltip } from "@ui/Tooltip/Tooltip.tsx";
import styles from "./TestPage.module.scss";

export const TestPage = () => {
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await axios.get("https://www.anilibria.tv/release/make-heroine-ga-oosugiru.html", {})
	// 		console.log(data)
	// 	}
	// 	fetchData()
	// }, [])

	return (
		<div className={styles.test}>
			<Tooltip title="Profile button">
				<IconButton>
					<ProfileIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title="Profile button" position="bottom">
				<IconButton>
					<SettingsIcon />
				</IconButton>
			</Tooltip>
		</div>
	);
};

export default TestPage;
// {/* <iframe src="https://kodik.info/seria/1331355/e03d43d6288c6acdca1dfae4b6f6a882/720p?translations=false&min_age=16" allowFullScreen></iframe> */}

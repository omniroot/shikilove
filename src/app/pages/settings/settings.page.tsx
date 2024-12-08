import { THEMES, useSettings } from "@/shared/store/settings.store.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { Select } from "@ui/Select/Select.tsx";
import styles from "./settings.page.module.scss";

export const SettingsPage = () => {
	const { theme, setTheme } = useSettings();
	const themeSelectElements = THEMES.map((theme) => {
		return {
			label: theme,
			value: theme,
		};
	});

	return (
		<div className={styles.settings_page}>
			<span className={styles.settings_heading}>Settings</span>
			<Select
				elements={themeSelectElements}
				value={theme}
				onChange={(newTheme) => setTheme(newTheme as typeof theme)}
			/>
			<HeadingSection title="Preview theme">
				<Button variant="primary">Primary Button</Button>
				<Button variant="secondary">Secondary Button</Button>
				<Button variant="ternary">Ternary Button</Button>
				<Select elements={[{ label: "test", value: "test" }]} value="test" onChange={() => {}} />
			</HeadingSection>
		</div>
	);
};

export default SettingsPage;

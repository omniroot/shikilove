import { THEMES, useSettings } from "@/shared/store/settings.store.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { Select, SelectContent, SelectItem } from "@ui/Select/Select.tsx";
import styles from "./settings.page.module.scss";
import { Divider } from "@ui/Divider/Divider.tsx";

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
				defaultValue={{ value: theme, label: theme }}
				onActiveChange={(newTheme) => setTheme(newTheme as typeof theme)}
				positionX="right"
			>
				<SelectContent>
					{themeSelectElements.map((element) => {
						return (
							<SelectItem key={element.value} value={element.value}>
								{element.label}
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
			<HeadingSection title="Preview theme">
				<div className={styles.preview_colors}>
					<section>
						<span>Background:</span>
						<Button circle className={styles.preview_primary}></Button>
						<Button circle className={styles.preview_secondary}></Button>
						<Button circle className={styles.preview_ternary}></Button>

						<Divider orientation="vertical" className={styles.divider} />
					</section>
					<section>
						<span>Text:</span>
						<Button circle className={styles.preview_text}></Button>
						<Button circle className={styles.preview_subtext}></Button>
						<Button circle className={styles.preview_alttext}></Button>
					</section>
				</div>
				<Divider />
				<Button variant="primary">Primary Button</Button>
				<Button variant="secondary">Secondary Button</Button>
				<Button variant="outline">Outline Button</Button>
				<Button variant="gradient">Gradient Button</Button>
				<Button variant="ghost">Ghost Button</Button>
			</HeadingSection>
		</div>
	);
};

export default SettingsPage;

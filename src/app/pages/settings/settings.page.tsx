import { Button } from "@ui/Button/Button.tsx";
import { Divider } from "@ui/Divider/Divider.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { Select, SelectContent, SelectItem } from "@ui/Select/Select.tsx";
import styles from "./settings.page.module.scss";
import { useSettings } from "@/shared/store/settings/useSettings";
import { THEMES } from "@/shared/store/settings/settings.store.ts";
import { createLazyRoute } from "@tanstack/react-router";

export const SettingsPage = () => {
	const { theme, changeTheme } = useSettings();

	const onToggleHeaderClick = () => {
		// toggleShowHeader();
	};

	return (
		<div className={styles.settings_page}>
			<span className={styles.settings_heading}>Settings</span>
			<Button onClick={onToggleHeaderClick}>Toggle Header</Button>
			<Select
				defaultValue={{ value: theme, label: theme }}
				onActiveChange={(newTheme) => changeTheme(newTheme as typeof theme)}
				positionX="right"
			>
				<SelectContent>
					{THEMES.map((theme) => {
						return (
							<SelectItem key={theme} value={theme}>
								{theme}
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
				<Button variant="outline" loading>
					Outline Button
				</Button>
				<Button variant="gradient">Gradient Button</Button>
				<Button variant="ghost">Ghost Button</Button>
			</HeadingSection>
		</div>
	);
};

export const Route = createLazyRoute("/settings")({
	component: SettingsPage,
});

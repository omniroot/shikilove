import { THEMES, useSettings } from "@/shared/store/settings.store.tsx";
import { Button } from "@ui/Button/Button.tsx";

export const SettingsPage = () => {
	const { theme, setTheme } = useSettings();
	return (
		<div>
			<span>Settings</span>
			<span>Theme: {theme}</span>
			<div>
				{THEMES.map((theme) => {
					return (
						<Button key={theme} onClick={() => setTheme(theme)}>
							{theme}
						</Button>
					);
				})}
			</div>
			<Button variant="primary">123</Button>
		</div>
	);
};

export default SettingsPage;

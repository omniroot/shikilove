import { useSettings } from "@/shared/hooks/useSettings.tsx";
import { Button } from "@ui/Button/Button.tsx";

export const SettingsPage = () => {
	const { theme, setTheme } = useSettings();
	return (
		<div>
			<span>Settings</span>
			<span>Theme: {theme}</span>
			<div>
				<Button onClick={() => setTheme("default")}>default</Button>
				<Button onClick={() => setTheme("catppuccin")}>catppuccin</Button>
			</div>
			<Button variant="primary">123</Button>
		</div>
	);
};

export default SettingsPage;

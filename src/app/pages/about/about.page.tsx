import { usePackageInfo } from "@/shared/hooks/usePackageInfo.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import { Divider } from "@ui/Divider/Divider.tsx";
import styles from "./about.page.module.scss";

export const AboutPage = () => {
	const { packageVersion, packageManagerVersion, dependencies, devDependencies } = usePackageInfo();

	return (
		<div className={styles.page}>
			<div className={styles.general}>
				<h2>ShikiLove</h2>
			</div>
			<div className={styles.secondary}>
				<div className={styles.author}>Author: @omniroot</div>
				<div className={styles.version}>
					v{packageVersion} | {packageManagerVersion}
				</div>
			</div>

			<div className={styles.dependencies}>
				<h2>Dependencies</h2>
				{Object.entries(dependencies).map(([name, version]) => (
					<div key={name} className={styles.dependency}>
						<span>{name}</span>
						<Divider orientation="horizontal" className={styles.divider} />
						<span>{version}</span>
					</div>
				))}
			</div>
			<div className={styles.dependencies}>
				<h2>DevDependencies</h2>
				{Object.entries(devDependencies).map(([name, version]) => (
					<div key={name} className={styles.dependency}>
						<span>{name}</span>
						<Divider orientation="horizontal" className={styles.divider} />
						<span>{version}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export const Route = createLazyRoute("/about")({
	component: AboutPage,
});

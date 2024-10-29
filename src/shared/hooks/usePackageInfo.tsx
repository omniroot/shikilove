import PackageRaw from "/package.json?raw";
const info = JSON.parse(PackageRaw);

export const usePackageInfo = () => {
	const packageVersion = info.version;
	const dependencies = info.dependencies;
	const devDependencies = info.devDependencies;
	const packageManagerVersion = info.packageManager;

	return {
		packageVersion,
		dependencies,
		devDependencies,
		packageManagerVersion,
	};
};

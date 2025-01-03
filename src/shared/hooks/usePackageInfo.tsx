import PackageRaw from "/package.json?raw";
const info = JSON.parse(PackageRaw);

interface IDependency {
	[key: string]: string;
}

export const usePackageInfo = () => {
	const packageVersion: string = info.version;
	const dependencies: IDependency = info.dependencies;
	const devDependencies: IDependency = info.devDependencies;
	const packageManagerVersion: string = info.packageManager;

	return {
		packageVersion,
		dependencies,
		devDependencies,
		packageManagerVersion,
	};
};

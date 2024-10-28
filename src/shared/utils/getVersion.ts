import PackageRaw from "/package.json?raw";

const info = JSON.parse(PackageRaw);

export const getVersion = () => info.version;

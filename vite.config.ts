import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [
		react(),
		svgr({
			// svgrOptions: {
			// 	plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
			// 	svgoConfig: {
			// 		floatPrecision: 5,
			// 	},
			// },
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/app/styles/global.scss";`,
			},
		},
	},
	build: {
		cssMinify: "lightningcss",
		minify: "esbuild",
		rollupOptions: {
			treeshake: {
				preset: "recommended",
			},
		},
	},
	resolve: {
		alias: {
			"@features": path.resolve(__dirname, "src", "components", "features"),
			"@widgets": path.resolve(__dirname, "src", "components", "widgets"),
			"@ui": path.resolve(__dirname, "src", "components", "ui"),
			"@": path.resolve(__dirname, "src"),
			"/": path.resolve(__dirname),
		},
	},
});

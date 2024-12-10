import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
import { optimizeCssModules } from "vite-plugin-optimize-css-modules";

export default defineConfig({
	plugins: [
		react(),
		visualizer({
			open: true,
		}) as PluginOption,
		optimizeCssModules(),
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
			// scss: {
			// 	additionalData: `@import "./src/app/styles/global.scss";`,
			// },
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
			"@pages": path.resolve(__dirname, "src", "app", "pages"),
			"@features": path.resolve(__dirname, "src", "shared", "components", "features"),
			"@widgets": path.resolve(__dirname, "src", "shared", "components", "widgets"),
			"@ui": path.resolve(__dirname, "src", "shared", "components", "ui"),
			"@": path.resolve(__dirname, "src"),
			"~": path.resolve(__dirname),
		},
	},
});

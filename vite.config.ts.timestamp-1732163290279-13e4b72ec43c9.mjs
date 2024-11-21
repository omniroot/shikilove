// vite.config.ts
import { defineConfig } from "file:///home/omniroot/omni/github/shikilove/node_modules/vite/dist/node/index.js";
import react from "file:///home/omniroot/omni/github/shikilove/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import svgr from "file:///home/omniroot/omni/github/shikilove/node_modules/vite-plugin-svgr/dist/index.js";
import { visualizer } from "file:///home/omniroot/omni/github/shikilove/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "/home/omniroot/omni/github/shikilove";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
    svgr({
      // svgrOptions: {
      // 	plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      // 	svgoConfig: {
      // 		floatPrecision: 5,
      // 	},
      // },
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/app/styles/global.scss";`
      }
    }
  },
  build: {
    cssMinify: "lightningcss",
    minify: "esbuild",
    rollupOptions: {
      treeshake: {
        preset: "recommended"
      }
    }
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__vite_injected_original_dirname, "src", "app", "pages"),
      "@features": path.resolve(__vite_injected_original_dirname, "src", "shared", "components", "features"),
      "@widgets": path.resolve(__vite_injected_original_dirname, "src", "shared", "components", "widgets"),
      "@ui": path.resolve(__vite_injected_original_dirname, "src", "shared", "components", "ui"),
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "/": path.resolve(__vite_injected_original_dirname)
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9vbW5pcm9vdC9vbW5pL2dpdGh1Yi9zaGlraWxvdmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL29tbmlyb290L29tbmkvZ2l0aHViL3NoaWtpbG92ZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9vbW5pcm9vdC9vbW5pL2dpdGh1Yi9zaGlraWxvdmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbXG5cdFx0cmVhY3QoKSxcblx0XHR2aXN1YWxpemVyKHsgb3BlbjogdHJ1ZSB9KSxcblx0XHRzdmdyKHtcblx0XHRcdC8vIHN2Z3JPcHRpb25zOiB7XG5cdFx0XHQvLyBcdHBsdWdpbnM6IFtcIkBzdmdyL3BsdWdpbi1zdmdvXCIsIFwiQHN2Z3IvcGx1Z2luLWpzeFwiXSxcblx0XHRcdC8vIFx0c3Znb0NvbmZpZzoge1xuXHRcdFx0Ly8gXHRcdGZsb2F0UHJlY2lzaW9uOiA1LFxuXHRcdFx0Ly8gXHR9LFxuXHRcdFx0Ly8gfSxcblx0XHR9KSxcblx0XSxcblx0Y3NzOiB7XG5cdFx0cHJlcHJvY2Vzc29yT3B0aW9uczoge1xuXHRcdFx0c2Nzczoge1xuXHRcdFx0XHRhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCIuL3NyYy9hcHAvc3R5bGVzL2dsb2JhbC5zY3NzXCI7YCxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0YnVpbGQ6IHtcblx0XHRjc3NNaW5pZnk6IFwibGlnaHRuaW5nY3NzXCIsXG5cdFx0bWluaWZ5OiBcImVzYnVpbGRcIixcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHR0cmVlc2hha2U6IHtcblx0XHRcdFx0cHJlc2V0OiBcInJlY29tbWVuZGVkXCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczoge1xuXHRcdFx0XCJAcGFnZXNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJhcHBcIiwgXCJwYWdlc1wiKSxcblx0XHRcdFwiQGZlYXR1cmVzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIsIFwic2hhcmVkXCIsIFwiY29tcG9uZW50c1wiLCBcImZlYXR1cmVzXCIpLFxuXHRcdFx0XCJAd2lkZ2V0c1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiLCBcInNoYXJlZFwiLCBcImNvbXBvbmVudHNcIiwgXCJ3aWRnZXRzXCIpLFxuXHRcdFx0XCJAdWlcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJzaGFyZWRcIiwgXCJjb21wb25lbnRzXCIsIFwidWlcIiksXG5cdFx0XHRcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG5cdFx0XHRcIi9cIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSksXG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UixTQUFTLG9CQUFvQjtBQUMzVCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sVUFBVTtBQUNqQixTQUFTLGtCQUFrQjtBQUozQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixXQUFXLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxJQUN6QixLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFPTCxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0oscUJBQXFCO0FBQUEsTUFDcEIsTUFBTTtBQUFBLFFBQ0wsZ0JBQWdCO0FBQUEsTUFDakI7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2QsV0FBVztBQUFBLFFBQ1YsUUFBUTtBQUFBLE1BQ1Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sVUFBVSxLQUFLLFFBQVEsa0NBQVcsT0FBTyxPQUFPLE9BQU87QUFBQSxNQUN2RCxhQUFhLEtBQUssUUFBUSxrQ0FBVyxPQUFPLFVBQVUsY0FBYyxVQUFVO0FBQUEsTUFDOUUsWUFBWSxLQUFLLFFBQVEsa0NBQVcsT0FBTyxVQUFVLGNBQWMsU0FBUztBQUFBLE1BQzVFLE9BQU8sS0FBSyxRQUFRLGtDQUFXLE9BQU8sVUFBVSxjQUFjLElBQUk7QUFBQSxNQUNsRSxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDbEMsS0FBSyxLQUFLLFFBQVEsZ0NBQVM7QUFBQSxJQUM1QjtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

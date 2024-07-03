import { fileURLToPath, URL } from 'url';
import { defineConfig, splitVendorChunkPlugin, type PluginOption } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import eslint from 'vite-plugin-eslint';
import { PORT, IMAGE_EXTENSIONS } from './vite.constants';

interface AliasInterface {
	find: string;
	replacement: string;
}

export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				entryFileNames: '[name].bundle.[hash].js',
				chunkFileNames: '[name].chunk.bundle.[hash].js',
				assetFileNames: assetInfo => {
					if (assetInfo.name?.endsWith('.css')) {
						// Output CSS files directly to the root 'dist' folder,
						// otherwise the CSS files will be placed in the images folder
						return '[name].[hash].css';
					} else if (
						IMAGE_EXTENSIONS.some(ext =>
							assetInfo.name?.endsWith(ext),
						)
					) {
						// Output image files to the 'images' folder
						return `images/[name].[ext]`;
					} else {
						// For other assets (fonts, etc.), keep the original folder structure
						return `[name].[ext]`;
					}
				},
				dir: 'dist',
			},
		},
	},
	server: {
		port: PORT,
		open: true,
	},
	plugins: [
		nodePolyfills({
			protocolImports: true,
		}),
		eslint({
			include: ['src/**/*.ts', 'src/**/*.tsx'],
			exclude: ['node_modules/**', 'dist/**'],
		}),
	],
});



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@lib', replacement: path.resolve(__dirname, 'src/lib') },
			{ find: '@ui-kit', replacement: path.resolve(__dirname, 'src/ui-kit') }
		]
	}
});

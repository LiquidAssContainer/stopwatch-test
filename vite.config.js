import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '',
  plugins: [vue(), vueJsx(), tsconfigPaths()],
});

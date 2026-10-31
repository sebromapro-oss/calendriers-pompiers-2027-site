import { defineConfig } from 'vite';

// L'interface publique GitHub Pages sera publiée sous ce sous-dossier.
// Cloudflare et le développement local restent accessibles depuis /.
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/calendriers-pompiers-2027-site/' : '/',
  build: { outDir: 'dist' }
});

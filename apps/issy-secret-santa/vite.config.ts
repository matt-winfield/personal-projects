import {
    vitePlugin as remix,
    cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { flatRoutes } from 'remix-flat-routes';
import svgr from 'vite-plugin-svgr';

declare module '@remix-run/cloudflare' {
    interface Future {
        v3_singleFetch: true;
    }
}

export default defineConfig({
    plugins: [
        remixCloudflareDevProxy(),
        remix({
            // We're using https://github.com/kiliman/remix-flat-routes so disable the Remix routing
            ignoredRouteFiles: ['**/.*'],
            routes: async (defineRoutes) => {
                return flatRoutes('routes', defineRoutes);
            },
            future: {
                v3_fetcherPersist: true,
                v3_relativeSplatPath: true,
                v3_throwAbortReason: true,
                v3_singleFetch: true,
            },
        }),
        tsconfigPaths(),
        svgr(),
    ],
});

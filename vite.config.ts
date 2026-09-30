import { defineConfig, type ConfigEnv, type PluginOption, type UserConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig(async ({ mode }: ConfigEnv): Promise<UserConfig> => {
  const isDevelopmentMode = mode === "development";
  const isPagesBuild = process.env["GITHUB_PAGES"] === "true";
  const repoName = process.env["GITHUB_REPOSITORY"]?.split("/")[1];
  const githubPagesBase = repoName && !repoName.endsWith(".github.io") ? `/${repoName}/` : "/";
  const routes = ["/", "/projetos", "/apoiar", "/apoiadores", "/enviar-projeto", "/contato"];
  const plugins: PluginOption[] = [];

  if (isDevelopmentMode) {
    const { devtools } = await import("@tanstack/devtools-vite");
    plugins.push(
      devtools({
        logging: false,
        eventBusConfig: { enabled: false },
        enhancedLogs: { enabled: false },
        consolePiping: { enabled: false },
        removeDevtoolsOnBuild: false,
        injectSource: { enabled: true },
      }),
    );
  }

  plugins.push(
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      server: { entry: "server" },
      ...(isPagesBuild
        ? {
            pages: routes.map((path) => ({ path })),
            prerender: { enabled: true, crawlLinks: false, failOnError: true },
          }
        : {}),
    }),
    nitro(),
    react(),
  );

  return {
    ...(isPagesBuild ? { base: githubPagesBase } : {}),
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": resolve(process.cwd(), "src") },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    plugins,
    ...(isDevelopmentMode
      ? {
          environments: {
            client: { define: { "process.env.NODE_ENV": JSON.stringify("development") } },
          },
        }
      : {}),
    server: {
      host: "::",
      port: 8080,
      strictPort: true,
      watch: { awaitWriteFinish: { stabilityThreshold: 1000, pollInterval: 100 } },
    },
  };
});

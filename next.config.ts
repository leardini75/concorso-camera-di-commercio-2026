import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Next 16 usa Turbopack di default: serve dichiararlo se c'è anche webpack.
  turbopack: {},
  // Evita che il typecheck di build legga .next/dev/types (path ../../../…)
  typescript: {
    tsconfigPath: "tsconfig.build.json",
  },
  // Evita che Watchpack su Windows provi a leggere file di sistema in C:\
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/DumpStack.log.tmp",
          "**/hiberfil.sys",
          "**/pagefile.sys",
          "**/swapfile.sys",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;

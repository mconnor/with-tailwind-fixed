import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*.tsx"],
  format: ["esm"],
  external: ["react"],
  dts: true,
  banner: {
    js: "'use client'",
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
});

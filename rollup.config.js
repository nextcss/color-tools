import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

const configTerser = { format: { comments: false } };
const configCopy = { targets: [{ src: "src/index.d.ts", dest: "dist" }] };

const modulePlugins = [
  resolve(),
  commonjs(),
  terser(configTerser),
  copy(configCopy),
];

export default [
  {
    input: "src/index.js",
    output: [
      { name: "node-esm", file: "dist/index.js", format: "es" },
      { name: "node-cjs", file: "dist/index.cjs", format: "cjs" },
    ],
    plugins: modulePlugins,
  },
];

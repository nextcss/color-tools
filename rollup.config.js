import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const configTerser = { format: { comments: false } };
const modulePlugins = [resolve(), commonjs(), terser(configTerser)];

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

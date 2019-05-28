import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      include: ["src/**/*"]
    })
  ],
  external: ["react", "styled-components"],
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" }
  ]
};

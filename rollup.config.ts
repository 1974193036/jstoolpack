import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import clear from "rollup-plugin-clear";

// 配置选项数组
const outputConfigs = [
  {
    // 打包为 commonjs 模块
    file: "dist/index.common.js", // 类似于 webpack 的 output
    format: "cjs", // 打包为 commonjs 模块
    exports: "auto", // default
  },
  {
    // 打包为 ESM 模块
    file: "dist/index.esm.js", // 类似于 webpack 的 output
    format: "es", // 打包为 ESM 模块
    exports: "auto", // named
  },
  {
    // 打包为 umd 模块，方便在浏览器里面使用
    file: "dist/index.js",
    format: "umd",
    name: "jstp",
    exports: "auto", // default
  },
];

export default outputConfigs.map((config) => ({
  input: "src/index.ts", // 入口文件，类似于 webpack 的 input
  output: {
    ...config,
  },
  plugins: [typescript(), resolve(), commonjs(), terser(), clear({ targets: ["dist"] })],
}));

import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "Button.tsx",
    output: {
      file: "dist/button.js",
    },
  },
  {
    input: "MyButton.tsx",
    output: {
      file: "dist/my-button.js",
    },
  },
  {
    input: "MyLabel.tsx",
    output: {
      file: "dist/my-label.js",
    },
  },
  {
    input: "Header.tsx",
    output: {
      file: "dist/header.js",
    },
  },
].map((entry) => ({
  ...entry,
  external: ["react/jsx-runtime"],
  plugins: [typescript()],
}));

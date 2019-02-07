module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 2,
        helpers: true,
        regenerator: true,
        useESModules: true,
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ],
  presets: [
    [
      "@babel/preset-env"
    ],
    "@babel/preset-react",
  ]
}
module.exports = {
  presets: [['@babel/preset-env']],
  plugins: [['@babel/plugin-transform-for-of', { assumeArray: true }]],
};

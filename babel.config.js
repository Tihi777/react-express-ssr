module.exports = {
  presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: [
    [ '@babel/plugin-transform-runtime', { regenerator: true }],
    [ '@loadable/babel-plugin' ]
  ]
};
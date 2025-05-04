module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: '16',
        browsers: [
          'last 2 Chrome versions',
          'last 2 Firefox versions',
          'last 2 Safari versions',
          'last 2 Edge versions'
        ]
      },
      modules: 'commonjs',
      useBuiltIns: 'usage',
      corejs: 3
    }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}; 
const withPlugins = require('next-compose-plugins')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

const nextConfig = {
  webpack: (config, options) => {
    // bundle analyzer
    if (ANALYZE) {
      const { isServer } = options
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '0.0.0.0',
        analyzerPort: isServer ? '8881' : '8882',
        openAnalyzer: false
      }))
    }
    // css loader
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'babel-loader',
        'raw-loader',
        { loader: 'postcss-loader', options: { path: './postcss.config.js' } }
      ]
    })
    // markdown loader
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/', query: { id: 'index' } },
      '/other': { page: '/', query: { id: 'other' } }
    }
  }

}

module.exports = withPlugins([], nextConfig)

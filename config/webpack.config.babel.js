import { join } from 'path'
import nodeExternals from 'webpack-node-externals'

const paths = {
  root: join(__dirname, '..'),
  publicSrc: join(__dirname, '..', 'src', 'app'),
  publicDist: join(__dirname, '..', 'src', 'dist'),
  serverSrc: join(__dirname, '..', 'src', 'server'),
  serverDist: join(__dirname, '..', 'src', 'server', 'dist')
}

const server = {
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals({
    modulesFromFile: true
  })],
  entry: {
    js: join(paths.serverSrc, 'server.js')
  },
  output: {
    path: paths.serverDist,
    filename: 'www',
    libraryTarget: 'commonjs2'
  },
  module: {
    exprContextCritical: false,
    rules: [
      { // Standard Linter
        enforce: 'pre',
        test: /\.js$/,
        include: paths.serverSrc,
        exclude: [/node_modules/],
        use: 'standard-loader'
      },
      { // Babel Transpile ESLatest for ES5
        test: join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache'
        }
      }
    ]
  }
}

export default server

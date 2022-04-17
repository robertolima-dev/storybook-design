import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import image from 'rollup-plugin-img'
import pkg from './package.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: './index.tsx',
  output: {
    file: pkg.main,
    format: 'cjs'
  },
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [typescript(), postcss({ plugins: [] }), image({ limit: 10000 })]
}

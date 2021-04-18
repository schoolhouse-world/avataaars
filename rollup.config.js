import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index-cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index-esm.js',
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [typescript()],
  external: ['lodash/uniqueId', 'react', 'prop-types'],
}

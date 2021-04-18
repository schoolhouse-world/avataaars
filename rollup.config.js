import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/es/index.js',
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [typescript()],
  external: ['lodash/uniqueId', 'react', 'prop-types'],
}

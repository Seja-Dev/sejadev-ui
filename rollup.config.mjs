import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import prefixer from 'postcss-prefixer'

import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs'
      },
      {
        file: packageJson.module,
        format: 'esm'
      }
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        plugins: [prefixer({ prefix: 'sejadevui-' })],
        extensions: ['.css', '.module.css']
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', outDir: 'dist' })
    ],
    external: ['react', 'react-dom']
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()]
  }
]

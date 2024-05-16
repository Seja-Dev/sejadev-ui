import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import tailwindcss from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'

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
      postcss({
        extensions: ['.css', '.module.css'],
        plugins: [tailwindcss(tailwindConfig)]
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', outDir: 'dist' })
    ]
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()]
  }
]

import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs";
import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/hooks/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'wrench-hooks'
  },
  external: ['react', 'react-dom'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.types.json'
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss(),
    terser(),
  ]
}
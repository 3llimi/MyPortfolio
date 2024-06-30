import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
    },
    plugins: [
        typescript(),
        terser(),
        resolve(),
    ],
};
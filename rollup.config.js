// @ts-check

import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';

const isProd = !process.env.ROLLUP_WATCH;
const pluginFn = (iife) => [
  isProd && tslint({
    throwError: true,
    configuration: `tslint${isProd ? '.prod' : ''}.json`,
  }),
  typescript({ tsconfig: `./tsconfig${iife ? '.iife' : ''}.json` }),
  isProd && terser(),
  isProd && filesize({ showBrotliSize: true }),
];

const multiBuild = [
  {
    input: ['src/index.ts'],
    file: 'dist/index.mjs',
    format: 'esm',
  },
  {
    input: ['src/index.ts'],
    file: 'dist/index.js',
    format: 'cjs',
  },
  {
    input: ['src/index.ts'],
    file: 'dist/utc-date.js',
    format: 'esm',
  },
  {
    input: ['src/index.ts'],
    file: 'dist/utc-date.iife.js',
    name: 'UTCDate',
    format: 'iife',
  }
].map(({ input, ...n }) => ({ input, output: n, plugins: pluginFn('iife' === n.format) }));

export default multiBuild;

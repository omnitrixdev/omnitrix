const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
import { buildConfig } from '../../utils/src/tailwind.config';

export default buildConfig(__dirname);

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     join(
//       __dirname,
//       '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
//     ),
//     ...createGlobPatternsForDependencies(__dirname),
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

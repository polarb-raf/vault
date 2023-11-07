/** @type {import('tailwindcss').Config} */

import designPreset from '@vault/design-system/preset';
export default {
  presets: [designPreset],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

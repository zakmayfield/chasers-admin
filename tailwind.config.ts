import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        chasers: {
          primary: '#1e293b', // slate-800
          secondary: '#334155', // slate-700
          tertiary: '#64748b', // slate-500
          green: {
            lightest: '#1c9f49',
            light: '#168D3F',
            DEFAULT: '#118037',
            dark: '#0B6E2D',
          },
        },
        error: {
          light: '#fca5a5', // red-300
          DEFAULT: '#f87171', // red-400
          dark: '#ef4444', // red-500
        },
      },
    },
  },
  plugins: [],
};
export default config;

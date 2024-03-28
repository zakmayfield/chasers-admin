import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        chasers: {
          primary: '',
          secondary: '',
          tertiary: '',
          accent: '',
          green: {
            lightest: '#2DB55C',
            light: '#24AB52',
            DEFAULT: '#1c9f49',
            dark: '#168D3F',
            darkest: '#118037',
          },
        },
        error: {
          light: '#fca5a5',
          DEFAULT: '#f87171',
          dark: '#ef4444',
        },
      },
    },
  },
  plugins: [],
};
export default config;

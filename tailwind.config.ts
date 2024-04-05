import type { Config } from 'tailwindcss';
import { PartialConfig, TailwindKeyValue } from '@/types';

export const colors: PartialConfig = {
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
};

export const padding: TailwindKeyValue = {
  'comfy-xs': '1rem',
  'comfy-sm': '1.5rem',
  'comfy-md': '3rem',
  'comfy-lg': '4rem',
  'comfy-xl': '6rem',
  'comfy-x-sm': '0.75rem',
  'comfy-x-md': '1.5rem',
  'comfy-x-lg': '3rem',
  'comfy-x-xl': '6rem',
  'comfy-y-sm': '0.75rem',
  'comfy-y-md': '1.5rem',
  'comfy-y-lg': '3rem',
  'comfy-y-xl': '6rem',
};

export const borderRadius: TailwindKeyValue = {
  smooth: '0.375rem',
  smoother: '0.5rem',
  smoothest: ' 0.75rem',
};

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
      padding,
      borderRadius,
      minWidth: {
        xs: '12rem',
        sm: '24rem',
        md: '36rem',
        lg: '48rem',
      },
    },
  },
  plugins: [],
};
export default config;

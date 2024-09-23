import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient-animation 3s ease infinite',
        'block-ani': 'block-ani 5s ease-in-out infinite',
        'block-ani-half': 'block-ani-half 5s ease-in-out infinite',
        'gradient-slow': 'gradient-animation 8s ease infinite',
      },
      keyframes: {
        'block-ani': {
          '50%': { width: '100%' },
          '70%': { width: '0' },
          '80%': { width: '0' },
          'to': { width: '100%' },
        },
        'block-ani-half': {
          '50%': { width: '50%' },
          '70%': { width: '0' },
          '80%': { width: '0' },
          'to': { width: '50%' },
        },
        'gradient-animation': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animationDelay: {
        '0': '0s',
        '05': '0.5s',
        '1': '1s',
        '15': '1.5s',
      },
      backgroundColor: {
        'soft-1': 'rgb(236 237 238 / <alpha-value>)', // Opacity support
      },
      backgroundImage: {
        
      }
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.animation-delay-0': {
          'animation-delay': '0s',
        },
        '.animation-delay-05': {
          'animation-delay': '0.5s',
        },
        '.animation-delay-1': {
          'animation-delay': '1s',
        },
        '.animation-delay-15': {
          'animation-delay': '1.5s',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
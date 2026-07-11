import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07090c',
        panel: '#0e1117',
        line: '#20242d',
        signal: '#f4b400',
        muted: '#9da4af',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(244,180,0,.16), 0 24px 90px rgba(0,0,0,.55)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at 70% 20%, rgba(244,180,0,.12), transparent 28%)',
      },
    },
  },
  plugins: [],
};
export default config;

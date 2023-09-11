import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        sans: ['var(--font-karla)'],
        mono: ['var(--font-roboto)'],
      },
      fontSize: {
        '4xl': '2.5rem',
        '6xl': '4.2rem'
      }
    },
  },
  plugins: [],
}
export default config

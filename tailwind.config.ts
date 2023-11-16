import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main': {
          '50': '#f8f8f8',
          '100': '#f0efef',
          '200': '#e5e3e3',
          '300': '#d2cfcf',
          '400': '#b7b2b2',
          '500': '#9c9797',
          '600': '#847e7e',
          '700': '#6d6868',
          '800': '#5c5858',
          '900': '#504c4c',
          '950': '#292626',
        },
        'secondary': {
          '50': '#eff4ff',
          '100': '#dbe6fe',
          '200': '#bed4ff',
          '300': '#92bafe',
          '400': '#6d9efc',
          '500': '#396ef8',
          '600': '#234ded',
          '700': '#1b39da',
          '800': '#1c2fb1',
          '900': '#1d2d8b',
          '950': '#161e55',
        },
        screen:{
          sm: "400px"
        } 


      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        abhaya: ['Abhaya Libre', 'serif'],
        alegreya: ['Alegreya', 'serif'],
        spectral: ['Spectral', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        anekbg: ['Anek Bangla', 'sans-serif'],
        notosanbg: ['Noto Sans Bengali', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
  // darkMode: ["class", ":global(.dark)"],
}
export default config

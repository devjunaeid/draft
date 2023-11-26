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
      },
      screen:{
        sm: "400px"
      },
      colors: {
        // 'txt': '#030302',
        'txtdrk': '#FDFDFC',
        'pri': '#445F74',
        'pridrk': '#8BA6BB',
        'sec': '#DFE0EC',
        'secdrk': '#131420',
        'acc': '#1BC023',
        'accdrk': '#81EE87',
        'txt': 'hsl(var(--text) / <alpha-value>)',
        'background': 'hsl(var(--background) / <alpha-value>)',
        'primary': 'hsl(var(--primary) / <alpha-value>)',
        'secondary': 'hsl(var(--secondary) / <alpha-value>)',
        'accent': 'hsl(var(--accent) / <alpha-value>)',
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

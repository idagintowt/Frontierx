module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: {
      xs: [
        '0.875rem', '1.195rem'
      ],
      sm: [
        '0.938rem', '1.25rem'
      ],
      xl: ['2.813rem', '3.842rem']
    },
    extend: {
      gridTemplateColumns: {
        'nav': '20% 80%'
      },
      screens: {
        'grid-break': {
          'max': '1300px'
        },
        'm': {
          'max': '1550px'
        },
        'xs': {
          'max': '640px'
        }
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-in'
      },
      fontSize: {
        xxs: "0.813rem"
      },
      colors: {
        'dark-grey': '#0D0D0D',
        'grey': '#1F1F1F',
        'light-grey': '#a2a2a2',
        'dark-violet': 'rgba(13, 13, 13, 0.5)',
        'link': '#FC364C',
        'hover-btn': '#382E3D'
      },
      borderRadius: {
        'sm': `0.313rem`,
        'md': '0.625rem'
      },
      backgroundImage: {
        'header-gradient': 'linear-gradient(95.91deg, #665AEF 6.04%, #FC364C 88.42%)',
        'main-gradient': 'linear-gradient(15.74deg, rgba(46, 45, 102, 0.6) -2.5%, rgba(58, 39, 63, 0.6) 47.55%, #181818 90.7%);'
      }
    }
  },
  plugins: []
}

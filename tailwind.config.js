/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB !important',
        iconColor:'#5667FF',
        secondary: '#2C224C',
        primaryNeutal: '#FAFAFF',
        textColorHeading: '#303A45',
        textColor: '#445164',
        borderColor:'#e0e0e0',
        secondaryColor:'#B40041',
        secondaryColorSecond:"#00791B",
        secondaryColorThird:"#1A2041",
      },

      animation: {
        "loop-scroll-left": 'loop-scroll-left 50s linear infinite',
        "loop-scroll-right": 'loop-scroll-right 50s linear infinite',
      },
      keyframes: {
        "loop-scroll-left": {
          '0%': { transform: 'translateX(0)' },
          '60%': { transform: 'translateX(-60%)' },
          '100%': { transform: 'translateX(0%)' },
      
        },
        "loop-scroll-right": {
          '0%': { transform: 'translateX(0)' },
          '60%': { transform: 'translateX(60%)' },
          '100%': { transform: 'translateX(0%)' },

        },
      },

    },


    // button: {
    //   primary: {
    //     backgroundColor: 'var(--color-primary)', // Use custom CSS variable or directly specify color
    //     color: 'white',
    //     '&:hover': {
    //       backgroundColor: 'rgba(34, 31, 183, 1)', // Use rgba directly without template literal
    //     },
    //   },
    //   secondary: {
    //     color: 'white',
    //     border: '1px solid white',
    //     backgroundColor: 'transparent',
    //     '&:hover': {
    //       backgroundColor: '#221fb7', // Use the defined primary color here
    //       border: 'none', // Ensure border style is reset on hover
    //     },
    //   },
    // }
  },
  plugins: [],
}
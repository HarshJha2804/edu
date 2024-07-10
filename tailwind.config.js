/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0019FF !important',
        secondary:'#2C224C',
        primaryNeutal:'#FAFAFF',
        textColorHeading:'#303A45', 
        textColor:'#445164',
      }
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
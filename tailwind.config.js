/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#161E4A !important',
        iconColor:'#5667FF',
        secondary: '#2C224C',
        primaryNeutal: '#FAFAFF',
        textColorHeading: '#303A45',
        textColor: '#445164',
        borderColor:'#e0e0e0',
        footerColor:'#F8F8F8',
        secondaryColor:'#F8AE00',
        tertiaryColor:'#B40041',
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

      fontSize: {
        'h1': '3rem', 
        'h1-md': '3.5rem',
        'h1-lg': '4rem', 

        'h2': '2.1rem', 
        'h2-md': '2.25rem',
        'h2-lg': '2.65rem',

        'h3': '1.5rem', 
        'h3-md': '2rem',
        'h3-lg': '2.25rem', 

        'p': '1rem', 
        'p-md': '1rem', 
        'p-lg': '1.1rem', 

        'p2': '1rem', 
        'p2-md': '1.25rem', 
        'p2-lg': '1.35rem', 

        'display': '3.25rem', 
        'display-md': '3.5rem', 
        'display-lg': '3.75rem', 

        'title': '1.5rem', 
        'title-md': '1.5rem', 
        'title-lg': '1.5rem', 
        
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
  plugins: [
    function({addUtilities}){
      const newUtilities={
        'h1':{
          '@apply text-h1 font-bold md:text-h1-md lg:text-h1-lg leading-[3rem] md:leading-[3.5rem] lg:leading-[4.5rem] lg:tracking-[-0.05rem]':{},
        },
        'h2':{
          '@apply text-h2 font-[600] md:text-h2-md lg:text-h2-lg leading-[2rem] md:leading-[1.75rem] lg:leading-[2.7rem] lg:tracking-[-0.05rem]':{}
        },
        'h3':{
          '@apply text-h3 md:text-h3-md lg:text-h3-lg leading-[1.75rem] md:leading-[2.35rem] lg:leading-[2.5rem] lg:tracking-[-0.05rem]':{}
        },
        'p':{
          '@apply text-p md:text-p-md lg:text-p-lg leading-tight':{}
        },
        '.p2':{
          '@apply text-p2 font-light md:text-p2-md lg:text-p2-lg leading-tight md:leading-[1.65rem] lg:leading-[1.75rem]':{},
        },
        '.display':{
          '@apply text-display md:text-display-md lg:text-display-lg leading-[2.75rem] md:leading-[3rem] lg:leading-[4rem] lg:tracking-[-0.05rem]':{},
        },
 
        '.title':{
          '@apply text-title font-medium md:text-title-md lg:text-title-lg leading-[1.5rem] md:leading-[1.65rem] lg:leading-[1.65rem] lg:tracking-[-0.05rem]':{},
        },

        // 'h4':{
        //   '@apply sm:text-h4 md:text-h4-md lg:text-h4-lg lg:leading-[3.75rem] lg:tracking-[-0.05rem]':{}
        // },
        // 'h5':{
        //   '@apply sm:text-h5 md:text-h5-md lg:text-h5-lg lg:leading-[3.75rem] lg:tracking-[-0.05rem]':{}
        // }, 
        // 'h6':{
        //   '@apply sm:text-h6 md:text-h6-md lg:text-h6-lg lg:leading-[3.75rem] lg:tracking-[-0.05rem]':{}
        // },
        
      };
      addUtilities(newUtilities,['responsive','hover']);

    },
  ],
}
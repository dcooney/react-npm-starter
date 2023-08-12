/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{html,js,tsx}'],
   theme: {
      container: {
         center: true,
         margin: 'auto',
         padding: '1.5rem',
         screens: {
            lg: '100%',
            limit: '1270px'
         }
      },
      extend: {
         screens: {
            xs: '480px',
            md_max: {max: '767px'},
            lg_max: {max: '1023px'},
            xl_max: {max: '1219px'},
            xl: '1270px'
         }
      }
   },
   plugins: []
}

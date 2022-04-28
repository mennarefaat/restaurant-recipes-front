
import { amber, deepOrange,blue, pink, grey, teal } from '@mui/material/colors';


const getDesignTokens = (mode) => ({
 palette: {
   mode,
   primary: {
     ...amber,
     ...(mode === 'dark' && {
       main: teal[300],
     }),
   },
   ...(mode === 'dark' && {
     background: {
       paper: grey[400],
     },
   }),
   ...(mode === 'dark' && {
     primary: blue[900],
     secondary: pink,
   }),
   
   text: {
     ...(mode === 'light'
       ? {
           primary: grey[900],
           secondary: grey[800],
         }
       : {
           primary: '#fff',
           secondary: grey[500],
         }),
   },
 },
});

export default getDesignTokens

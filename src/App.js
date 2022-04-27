import { ThemeProvider, createTheme } from '@mui/material/styles';
import getDesignTokens from './components/them'
import Box from '@mui/material/Box';
import './App.css';
// import NavBar from "./components/navbar/Navbar"
import Router from "./Routes/routes"



const darkModeTheme = createTheme(getDesignTokens('dark'));


function App() {
  return (
    <ThemeProvider theme={darkModeTheme}>
      <Box sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        minHeight:"100vh"
      }}>

      <Router />
        

      </Box>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider, createTheme } from '@mui/material/styles';
import getDesignTokens from './components/them'
import Box from '@mui/material/Box';
import './App.css';


const darkModeTheme = createTheme(getDesignTokens('dark'));


function App() {
  return (
    <ThemeProvider theme={darkModeTheme}>
      <Box sx={{

        bgcolor: 'background.default',
        color: 'text.primary',
      }}>

        <div className="App">
        
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;

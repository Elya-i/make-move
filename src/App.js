import { Layout } from './containers/layout/layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeLight } from './theme'

const theme = createTheme(themeLight);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  );
}

export default App;

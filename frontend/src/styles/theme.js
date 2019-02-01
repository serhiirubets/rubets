import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#48d1a9',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});
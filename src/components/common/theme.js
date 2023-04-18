import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    body1_medium: {
      fontFamily: 'Roboto Condensed',
      fontSize: 20,
      fontWeight: 600,
      textAlign: 'left',
    },
    body2_medium: {
      fontFamily: 'Roboto Condensed',
      lineHeight: 1.6,
      fontSize: 14,
      fontWeight: 400,
    },
  },
});

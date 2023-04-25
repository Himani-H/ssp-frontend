import { AppBar, Toolbar } from "@mui/material";
import styles from "./Header.module.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <AppBar position="sticky">
        <Toolbar>
          <img src="/ssp-logo.svg" alt="SIXT" className={styles.responsive} />
        </Toolbar>
      </AppBar>
      </Box>
    </ThemeProvider>
  );
}

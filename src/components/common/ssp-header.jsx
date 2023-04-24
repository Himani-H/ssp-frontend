import { AppBar, Toolbar } from "@mui/material";
import styles from "./Header.module.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <img src="/ssp-logo.svg" alt="SIXT" className={styles.responsive} />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

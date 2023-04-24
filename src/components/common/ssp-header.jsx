import { AppBar, Toolbar } from "@mui/material";
import styles from "./Header.module.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <ThemeProvider theme={theme}>
        <Toolbar>
          <img src="/ssp-logo.svg" alt="SIXT" className={styles.responsive} />
        </Toolbar>
      </ThemeProvider>
    </AppBar>
  );
}

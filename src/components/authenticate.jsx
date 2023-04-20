import Header from "./common/ssp-header";
import Footer from "./common/ssp-footer";
import Card from "./common/ssp-card";
import Guide from "./common/ssp-guide";
import SideImage from "./common/ssp-image";
import OtpUi from "./common/ssp-otp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, CssBaseline, Stack } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

export default function Authenticate() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <CssBaseline />
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <SideImage />
            <OtpUi />
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
}

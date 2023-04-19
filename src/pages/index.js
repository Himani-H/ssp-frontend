import Header from "../components/common/ssp-header";
import SideImage from "../components/common/ssp-image";
import OtpUi from "../components/common/ssp-otp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Stack } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Condensed"].join(","),
  },
});

export default function Home() {
  return (
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
  );
}

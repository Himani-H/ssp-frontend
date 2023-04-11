import Header from "../components/common/ssp-header";
import Footer from "../components/common/ssp-footer";
import Card from "../components/common/ssp-card";
import Stepper from "../components/common/ssp-stepper";
import SideImage from "../components/common/ssp-image";
import OtpUi from "../components/common/ssp-otp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, CssBaseline, Stack } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <CssBaseline />
        {/* <Box sx={{ padding: 2 }}>
          <Stepper />
        </Box> */}
        <Box>
          {/* <Card /> */}
          <Box>
              <Stack direction="row"  justifyContent="space-between">
                <SideImage />
                <OtpUi />
              </Stack>
            </Box>
        </Box>

        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
}

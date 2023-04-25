import Header from "./common/ssp-header";
import SideImage from "./common/ssp-image";
import OtpUi from "./common/ssp-otp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, CssBaseline, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

export default function Authenticate() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container direction="column"></Grid>
        <Grid item>
          <Header />
          <CssBaseline />
        </Grid>
        <Grid item sx={{ height: "100%", position: "fixed", width: "100%" }}>
          {" "}
          <Box sx={{ height: "100%" }}>
            <Grid container sx={{ height: "100%" }}>
              <Grid
                item
                xs={8}
                sx={{
                  height: "100%",
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <div className={"image-container"}>
                  <Image
                    src="/home_logo.png"
                    layout="fill"
                    className={"image"}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} xm={4} md={4}>
                <OtpUi />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </ThemeProvider>
    </>
  );
}

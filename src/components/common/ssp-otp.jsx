import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import OtpTimer from "otp-timer";
import { Box, Button, Typography, Grid } from "@mui/material";
import Loader from "./ssp-loader";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "./ssp-footer";
import styles from "./Loader.module.css";

import { theme } from "./theme";

export function matchIsNumeric(text) {
  const isNumber = typeof text === "number";
  console.log(isNumber);
  const isString = matchIsString(text)
  return isNumber && !isNaN(Text(text));
}

const validateChar = (value, index) => {
  return matchIsNumeric(value);
};

export default function OtpUI() {
  const [otp, setOtp] = React.useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const verifyOTP = () => {
    setIsLoading(true);
  };
  const handleClick = () => {
    //desired function to be performed on clicking resend button
  };
  return (
    <>
    <Box  sx={{display:"flex",flexDirection:"column"}}>
      <Grid sx={{ padding: 5, height: "100%" }}>
        <Box>
          <ThemeProvider theme={theme}>
            <Typography variant="heading" component="div" sx={{ flexGrow: 1 }}>
              Enter One Time Password
            </Typography>
            <br></br>

            <Typography
              variant="subHeading"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Enter a 6-digit OTP sent to your mobile “XXXXXXX999”
            </Typography>

            <Box marginTop={10}>
              <MuiOtpInput
                TextFieldsProps={{
                  size: "small",
                  variant: "standard",
                  color: "warning"
                }}
                length={6}
                value={otp}
                onChange={handleChange}
                validateChar={validateChar}
              />
            </Box>

            <Box marginTop={10} textAlign="center">
              <Button
                variant="contained"
                fullWidth={true}
                disabled={otp.length < 6}
                component="div"
                onClick={verifyOTP}
              >
                {isLoading ? <Loader /> : "Verify and Proceed"}
              </Button>
            </Box>

            <Box
              component="div"
              sx={{
                display: "flex",
                m: 1,
                p: 1,
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              <Typography variant="subHeading1">Didn’t receive OTP?</Typography>
              &nbsp;
              <Box className={styles.otp}>
                <OtpTimer
                  seconds={30}
                  minutes={1}
                  resend={handleClick}
                  text="Retry in"
                  ButtonText="Resend OTP"
                  buttonColor="#FF5F00"
                  background="white"
                />
              </Box>
            </Box>
          </ThemeProvider>
          <Footer />
        </Box>
        {/* <Footer /> */}
      </Grid>
      </Box>
     
    </>
  );
}

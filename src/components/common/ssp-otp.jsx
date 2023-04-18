import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import OtpTimer from "otp-timer";
import { Box, Button, Typography, Grid,Stack } from "@mui/material";
import Loader from "./ssp-loader";
import { styled,ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Footer from "./ssp-footer";

import { theme } from "./theme";

const ColorButton = styled(Button)(() => ({
  backgroundColor: "rgba(255, 95, 0, 1)",
  "&:hover": {
    backgroundColor: "rgba(255, 95, 0, 0.8)",
  },
  "&.Mui-disabled": {
    color: "rgba(255, 255, 255, 1)",
    boxShadow: "none",
    backgroundColor: "rgba(255, 95, 0, 0.5)",
  },
  borderRadius: 0,
  height: 52,
  fontFamily:'Roboto Condensed',
  fontSize:16,
  fontWeight:700
}));


export default function OtpUI() {
  const [otp, setOtp] = React.useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const verifyOTP = () => {
    setIsLoading(true);
    console.log('Hello');
  };
  const handleClick = () => {
    //desired function to be performed on clicking resend button
  };
  return (
    <Grid>
      <Box sx={{ padding: 5 }}>
      <ThemeProvider theme={theme}>
        <Typography variant="body1_medium" component="div" sx={{ flexGrow: 1 }}>
          Enter One Time Password
        </Typography>
        <br></br>
        <Typography variant="body2_medium" component="div" sx={{ flexGrow: 1 }}>
          Enter a 6-digit OTP sent to your mobile “XXXXXXX999”
        </Typography>
        </ThemeProvider>
        <Box marginTop={10}>
          <MuiOtpInput
            TextFieldsProps={{
              size: "small",
              variant: "standard",
              color: "warning",
            }}
            length={6}
            value={otp}
            onChange={handleChange}
          />
        </Box>
        <Box marginTop={10} textAlign="center">
          <ColorButton
            variant="contained"
            color="warning"
            fullWidth={true}
            disabled={!otp}
            component="div"
            onClick={verifyOTP}
          >
            {isLoading ? <Loader /> : "Verify and Proceed"}
          </ColorButton>
        </Box>
        <Box component="div" sx={{ display: "inline-flex", m: 1, p: 1, justifyContent:"center"}}>
          <Typography sx={{ flexGrow: 1, fontSize: 16 }}>
            Didn’t receive OTP?
          </Typography>
          &nbsp;
          <OtpTimer
            sx={{ m: 1, p: 1 }}
            seconds={30}
            minutes={1}
            resend={handleClick}
            text="Retry in"
            ButtonText="Resend OTP"
            buttonColor="#FF5F00"
            background='white'
            fontSize='16px'
          />
        </Box>
      </Box>
      <Footer/>
    </Grid>
  );
}

import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, Button, Typography, Container, Grid } from "@mui/material";

export default function OtpUI() {
  const [otp, setOtp] = React.useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  return (
    <Grid>
      <Box sx={{padding: 5}}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Enter One Time Password
        </Typography>
        <br></br>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Enter a 6-digit OTP sent to your mobile “XXXXXXX999”
        </Typography>
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
          <Button
            variant="contained"
            color="warning"
            fullWidth={true}
            disabled={!otp}
            component="div"
            sx={{ borderRadius: 0, height: 56 }}
          >
            Verify and Proceed
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Reservation Details",
  "Driver License Validation",
  "Rental Agreement e-Signature",
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1} alternativeLabel connector={<></>}>
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
                color: "#FF5F00",
              },
              // "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
              //   color: "#FF5F00",
              // },
              "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
                color: "#FF5F00",
                borderRadius: 30,
                border: "2px solid white",
                width: 30,
                height: 30,
                backgroundColor: "#FF5F00",
                outline: "1px solid #FF5F00",
              },
              "& .css-15rsn54-MuiStepLabel-label.Mui-active": {
                color: "#FF5F00",
              },
              "& .css-15rsn54-MuiStepLabel-label.Mui-completed": {
                color: "#FF5F00",
              },
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

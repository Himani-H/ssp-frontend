import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Loader from "./ssp-loader";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
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
}));

const ResuableButton = (props) => {
  return (
    <ColorButton
      variant={props.buttonVariant}
      disabled={props.buttonDisabled}
      fullWidth={props.buttonWidth}
      onClick={props.buttonClick}
    >{props.buttonText}</ColorButton>
  );
};
export default ResuableButton;

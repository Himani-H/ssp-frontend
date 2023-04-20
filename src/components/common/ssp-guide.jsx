import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6} md={12} container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography variant="subtitle1" component="div">
              <b> 1. Upload/Capture DL front image</b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <ButtonBase sx={{ width: 100, height: 100 }}>
          <Img alt="complex" src="/dl_logo.svg" />
        </ButtonBase>
      </Grid>
    </Grid>
  );
}

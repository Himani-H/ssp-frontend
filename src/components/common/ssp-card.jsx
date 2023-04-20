import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function BasicCard() {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(249, 249, 249, 1)",
        borderRadius: 0,
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <CardContent>
          <Box sx={{ display: "inline-flex", mt: 3 }}>
            <img src="/check-circle.svg" />
            &nbsp;&nbsp;&nbsp;
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.25rem",
                fontFamily: "Roboto Condensed",
              }}
            >
              DL Verified
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(3)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Typography sx={{ color: "#5C5B5B", fontSize: 12 }}>
                    Name
                  </Typography>
                  <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                    John Smith
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Typography sx={{ fontSize: 14, fontWeight: 500, mb: 3, mt: 5 }}>
            "Great news! Your license is verified, and we're generating your
            rental agreement.
          </Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
            We'll notify you once it's ready for review and e-signature.”
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
}

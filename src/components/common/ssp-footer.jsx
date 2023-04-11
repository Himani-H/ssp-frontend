import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "black",
            fontSize: 10,
            position: "fixed",
            bottom: 0,
            padding: 2,
          }}
        >
          Copyright © 2023 SIXT Australia
        </Typography>
      </Box>
    </>
  );
}

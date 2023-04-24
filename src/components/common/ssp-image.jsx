import Box from "@mui/material/Box";

export default function SideImage() {
  return (
    <Box  sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <img src="/home_logo.png" />
    </Box>
  );
}

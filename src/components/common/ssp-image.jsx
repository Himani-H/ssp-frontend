import Box from "@mui/material/Box";

export default function SideImage() {
  return (
    <Box flex={4} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <img src="/home.svg" />
    </Box>
  );
}

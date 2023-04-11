import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <img src="/logo.svg" alt="SIXT" style={{ height: 20 }} />
        <Box sx={{ display: "flex", marginLeft: "auto" }}>
          <Typography variant="h6" sx={{ color: "black", fontSize : 13, fontWeight : 500 }}>
            Hi,John
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

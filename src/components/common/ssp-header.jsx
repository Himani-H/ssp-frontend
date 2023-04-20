import Image from 'next/image';

import { AppBar, Box, Toolbar, Typography  } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        {/* <img src="/logo.svg" alt="SIXT" style={{ height: 20 }} /> */}
        <Image src="/ssp-logo.svg" alt="SIXT" width="50" height="20"  />
      </Toolbar>
    </AppBar>
  );
}

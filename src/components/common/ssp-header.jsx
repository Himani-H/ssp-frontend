import Image from "next/image";

import { AppBar, Toolbar } from "@mui/material";
import styles from "./header.module.css";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <div className={styles.custome_size } style={{ position: "relative" }}>
          <Image
            src="/logo.svg"
            alt="SIXT"
            layout="fill"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

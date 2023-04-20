// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

export default function ImageSample() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

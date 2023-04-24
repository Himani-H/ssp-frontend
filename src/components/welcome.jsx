import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Loader from "./common/ssp-loader";
import Grid from "@mui/material/Grid";

export default function Welcome() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          {" "}
          <img
            src="/ssp-logo.svg"
            width="120"
            height="50"
            alt="Paris"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "40vh",
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Loader isprimary="true" style={{ marginBottom: "40vh" }} />
        </Grid>
      </Grid>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Loader from "./common/ssp-loader";


export default function Welcome() {
  return (
    <>
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
      <Loader isprimary="true" style={{marginTop:"2%"}} />
    </>
  );
}

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Footer from "../components/Footer";


export default function Home() {

return (
    <div>
      <Head>
        <title>Crypto Devs</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Header />
      <Footer />
        
    </div>
  );
}
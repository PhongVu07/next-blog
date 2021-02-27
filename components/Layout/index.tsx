import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import styles from "./layout.module.scss";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>PV Blog</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;

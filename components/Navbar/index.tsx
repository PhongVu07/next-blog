import React from "react";
import Link from "next/link";
import Container from "../Container";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container className={styles.contentContainer}>
        <div className={styles.logo}>
          <Link href="/"> PV's Blog</Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

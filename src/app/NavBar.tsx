"use client";

import Link from "next/link";
import styles from "@/styles/_NavBars.module.scss";
import Image from "next/image";
import fzt_logo from "../../public/FozirTex_logo.svg";
import ham_icon from "../../public/hamberger.svg";
import { useState } from "react";
import { Console } from "console";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // state to control nav nisibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the state value
    console.log("hi");
  };

  return (
    <header className={styles["navbar-body"]}>
      <Link href="/about-us" className={styles["logo-link"]}>
        <div className={styles["logo-border"]}>
          <Image src={fzt_logo} alt={"FozirTex Logo"} />
        </div>
      </Link>
      <div
        className={`${styles["navs"]} ${isNavOpen ? styles["nav-open"] : ""}`}
      >
        <Link href="/" className={styles["nav-links"]}>
          首頁
        </Link>
        <Link href="/about-us" className={styles["nav-links"]}>
          About Us
        </Link>
        <Link href="/startup-records" className={styles["nav-links"]}>
          創業里程紀錄
        </Link>
      </div>
      <div className={styles["hamberger-toggle"]}>
        <button onClick={toggleNav} className={styles["ham-toggle-btn"]}>
          <Image src={ham_icon} alt="hamberger-icon" />
        </button>
      </div>
    </header>
  );
}

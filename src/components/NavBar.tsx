"use client";

import Link from "next/link";
import styles from "@/styles/_NavBars.module.scss";
import Image from "next/image";
import fzt_logo from "../../public/FozirTex_logo.svg";
import ham_icon from "../../public/hamberger.svg";
import lan_switch_icon from "../../public/language-switcher.svg";
import { useState } from "react";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(true); // state to control nav visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the state value
    console.log("menu opened !");
  };

  // dropdown menu text
  const menuNames = [
    "晝夜切換",
    "語言切換",
    "跳轉",
    "首頁",
    "關於我們",
    "創業里程紀錄",
    "會員",
    "登入",
    "註冊",
  ];

  return (
    <>
      <header className={styles["header-body"]}>
        <Link href="/" className={styles["logo-link"]}>
          <div className={styles["logo-border"]}>
            <Image src={fzt_logo} alt={"FozirTex Logo"} />
          </div>
        </Link>
        <div className={styles["hamberger-toggle"]}>
          <button onClick={toggleNav} className={styles["ham-toggle-btn"]}>
            <Image src={ham_icon} alt="hamberger-icon" />
          </button>
        </div>
      </header>

      <div
        className={`${styles["navs"]} ${isNavOpen ? styles["nav-open"] : ""}`}
      >
        <div className={styles["nav-links"]}>{menuNames[0]}</div>
        <div className={`${styles["nav-links"]} ${styles["lan-switch"]}`}>
          {menuNames[1]}
          <Image
            src={lan_switch_icon}
            alt="lauguage switcher"
            title="Switch language"
            className={styles["lan-switch-icon"]}
          />
        </div>
        <div className={styles["nav-links"]}>
          <h2>{menuNames[2]}</h2>
          <hr className={`${styles["solid"]} ${styles["divider"]}`} />
        </div>
        <div className={styles["nav-links"]}>
          <Link href="/">{menuNames[3]}</Link>
          <hr className={`${styles["solid"]} ${styles["divider"]}`} />
        </div>
        <div className={styles["nav-links"]}>
          <Link href="/about-us">{menuNames[4]}</Link>
          <hr className={`${styles["solid"]} ${styles["divider"]}`} />
        </div>
        <div className={styles["nav-links"]}>
          <Link href="/startup-records">{menuNames[5]}</Link>
          <hr className={`${styles["solid"]} ${styles["divider"]}`} />
        </div>
        <div className={styles["nav-links"]}>
          <h2>{menuNames[6]}</h2>
          <hr className={`${styles["solid"]} ${styles["divider"]}`} />
        </div>
        <div className={styles["nav-links"]}>
          <Link href="/about-us">{menuNames[7]}</Link>
          <hr className={`${styles["solid"]} ${styles["divider"]}`} />
        </div>
        <div className={styles["nav-links"]}>
          <Link href="/about-us">{menuNames[8]}</Link>
        </div>
      </div>
    </>
  );
}

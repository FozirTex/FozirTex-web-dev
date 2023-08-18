"use client";

import React from "react";
import styles from "../styles/_Footer.module.scss";
import Image from "next/image";
import fzt_landscape_logo from "../../public/FZT_logo_landscape.svg";

export default function Footer() {
  const ftrTitles = ["探索", "協助", "關於", "聯絡我們"];

  return (
    <div className={styles["footer-body"]}>
      
      <div className={styles["footer-left"]}>
        <div className={styles["fzt-logo-div"]}>
          <Image
            src={fzt_landscape_logo}
            alt="Fozirtex-logo"
            title="FozirTex"
          />
        </div>
      </div>

      <div className={styles["footer-right"]}>
        <div className={styles["sub-sections"]}>{ftrTitles[0]}</div>
        <div className={styles["sub-sections"]}>{ftrTitles[1]}</div>
        <div className={styles["sub-sections"]}>{ftrTitles[2]}</div>
        <div className={styles["sub-sections"]}>{ftrTitles[3]}</div>
      </div>
    </div>
  );
}

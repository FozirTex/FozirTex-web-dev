"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/_Footer.module.scss";
import fb_icon from "../../public/Facebook.svg";
import ins_icon from "../../public/Instagram.svg";
import x_icon from "../../public/X.svg";
import email_icon from "../../public/Email.svg";
import fzt_landscape_logo from "../../public/FZT_logo_landscape.svg";

export default function Footer() {
  const ftrTitles = ["探索", "協助", "關於", "聯絡我們"];
  const ftrSubLinks = [
    "產品功能",
    "付費方案",
    "Blog",
    "隱私權政策",
    "常見問題",
    "關於我們",
    "創業里程紀錄",
  ];

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
        <div className={styles["cata-sections"]}> {/* 探索 */}
          <div className={styles["cata-titles"]}>{ftrTitles[0]}</div>
          <div className={styles["sub-links"]}>
            <div>
              <Link href="/">{ftrSubLinks[0]}</Link>
            </div>
            <div>
              <Link href="/">{ftrSubLinks[1]}</Link>
            </div>
            <div>
              <Link href="/">{ftrSubLinks[2]}</Link>
            </div>
          </div>
        </div>
        <div className={styles["cata-sections"]}> {/* 協助 */}
          <div className={styles["cata-titles"]}>{ftrTitles[1]}</div>
          <div className={styles["sub-links"]}>
            <div>
              <Link href="/">{ftrSubLinks[3]}</Link>
            </div>
            <div>
              <Link href="/">{ftrSubLinks[4]}</Link>
            </div>
          </div>
        </div>
        <div className={styles["cata-sections"]}> {/* 關於 */}
          <div className={styles["cata-titles"]}>{ftrTitles[2]}</div>
          <div className={styles["sub-links"]}>
            <div>
              <Link href="/">{ftrSubLinks[5]}</Link>
            </div>
            <div>
              <Link href="/">{ftrSubLinks[6]}</Link>
            </div>
          </div>
        </div>
        <div className={styles["cata-sections"]}> {/* 聯絡我們 */}
          <div className={styles["cata-titles"]}>{ftrTitles[3]}</div>
          <div className={styles["sub-links"]}>
            <div>
              <Link href="/">
                <Image src={fb_icon} alt="FozirTex Facebook" width={20} height={20} />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image src={ins_icon} alt="FozirTex Instagram" width={20} height={20} />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image src={x_icon} alt="FozirTex Email" width={20} height={20} />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image src={email_icon} alt="FozirTex X" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

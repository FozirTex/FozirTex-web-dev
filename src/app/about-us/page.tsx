// "use client" // determines it's a client component (server component by default)

import { Breadcrumb, Col, Row } from "antd";
import styles from "./_AboutUs.module.scss";
import titleImage from "./title.png";
import Image from "next/image";
import quotationImage from "./quotation.svg";
import { MyTimeline } from "@/app/about-us/MyTimeline";
import { Avatar } from "@mui/material";

const teams = [
  {
    avatar: "https://i.imgur.com/3Gz9xXe.jpeg",
    name: "Matrix 蘇柏瑋",
    head: "COO 營運長",
    duty: "網頁開發、團隊文化塑造、市場洞悉",
    description:
      "Reprehenderit do adipisicing commodo sint consectetur Non ullamco commodo nostrud cillum consectetur.",
  },
  {
    avatar: "https://i.imgur.com/qTQUHdQ.jpg",
    name: "Yu Hao 范育豪",
    head: "CEO 執行長",
    duty: "專案管理、資源整合、對外公關",
    description:
      "Reprehenderit do adipisicing commodo sint consectetur Non ullamco commodo nostrud cillum consectetur.",
  },
  {
    avatar: "https://i.imgur.com/KC2IBEM.jpg",
    name: "Ian 鄭子嘉",
    head: "CTO 技術長",
    duty: "App 開發、次系統整合、行銷策略規劃",
    description:
      "Reprehenderit do adipisicing commodo sint consectetur Non ullamco commodo nostrud cillum consectetur.",
  },
];

export default function AboutUs() {
  // add async in between "default" & "function" to activate await
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // useEffect(() => {}, [])
  // throw Error("Bazinga"); // set to make error for invoke error.tsx
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.banner_breadcrumb}>
          <Breadcrumb
            separator={">"}
            items={[{ title: "首頁" }, { title: "關於我們" }]}
          />
        </div>
        <div className={styles.banner_title}>
          <h1>
            <Image
              src={titleImage}
              alt={"FozirTex"}
              style={{ marginRight: 24 }}
            />
            的核心價值
          </h1>
        </div>
        <div className={styles.banner_content}>
          <Image
            src={quotationImage}
            alt={
              "Non deserunt in consequat minim tempor. Ad aute laboris voluptate. Nostrud do cillum dolor in officia cupidatat do amet ex irure. Mollit sunt eu pariatur nisi mollit commodo eu veniam irure."
            }
          />
          {/*<p>*/}
          {/*  Non deserunt in consequat minim tempor. Ad aute laboris voluptate. Nostrud do cillum dolor in officia cupidatat do amet ex irure. Mollit sunt eu pariatur nisi mollit commodo eu veniam irure.*/}
          {/*</p>*/}
        </div>
      </div>

      <section className={styles.court}>
        <main>
          <div className={styles.court_inner}>
            <div className={styles.court_inner_title}>
              讓球友、場主、私人球館業者、公家單位都能獲益的羽球場地管理、預約平台
            </div>
            <div className={styles.court_inner_content}>
              我們希望透過 BadX
              App，整合所有羽球圈生態的資訊，包含業者的場地管理、場主的出租球場管理、球友們的羽球權益，都包含在這個App裡。以這樣的方式去...Tempor
              anim eiusmod nostrud ipsum.
            </div>
          </div>
        </main>
      </section>

      <section className={styles.milestone}>
        <main>
          <h2>里程碑</h2>
          <div className={styles.milestone_image}>
            {/*<Image src={require('./milestone.svg')} alt={''} />*/}
            <MyTimeline />
          </div>
        </main>
      </section>

      <section className={styles.team}>
        <main>
          <h2>團隊介紹</h2>
          <Row gutter={[32, 32]}>
            {teams.map((value) => (
              <Col key={value.name} md={8} sm={24}>
                <div className={styles.team_item}>
                  <div className={styles.team_item_avatar}>
                    <Avatar
                      alt={value.name}
                      src={value.avatar}
                      sx={{ width: 225, height: 225 }}
                      />
                  </div>
                  <div className={styles.team_item_name}>{value.name}</div>
                  <div className={styles.team_item_head}>{value.head}</div>
                  <div className={styles.team_item_duty}>{value.duty}</div>
                  <div className={styles.team_item_duty}>
                    {value.description}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </main>
      </section>
    </div>
  );
}

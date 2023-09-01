import styles from "@/styles/_Home.module.scss";
import appstoreSVG from './appstore.svg'
import bannerSVG from './banner.svg'
import Image from "next/image";

import calendarImage from './calendar.png'
import {Col, Row} from "antd";

const coreFunctions = [
  {
    imageUrl: calendarImage,
    title: '持有場地管理',
    description: '透過場地管理系統，管理系統場地管理系統系統',
  },
  {
    imageUrl: calendarImage,
    title: '零打報隊',
    description: 'Amet non eu elit occaecat commodo excepteur fugiat veniam enim enim ex.',
  },
  {
    imageUrl: calendarImage,
    title: '快速查找場地',
    description: 'Tempor labore et magna laborum eiusmod consectetur est cillum.',
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.banner}>
          <div className={styles.banner_inner}>
            <div className={styles.banner_start}>
              <h1><span>B</span>ad<span>X</span> App</h1>
              <div className={styles.banner_start_summary}>Ea ea fugiat id proident. Cupidatat excepteur non ullamco fugiat cillum quis id aliquip pariatur duis aute commodo.</div>
              <div className={styles.banner_start_download}>
                <Image src={appstoreSVG} alt={'Download on the AppStore'} />
              </div>
            </div>
            <div className={styles.banner_end}>
              <Image src={bannerSVG} alt={''} />
            </div>
          </div>
        </div>

        <div className={styles.core}>
          <h2><span>B</span>ad<span>X</span> 核心功能</h2>
          <div className={styles.core_list}>
            <Row gutter={[64, 32]}>
              {coreFunctions.map((value) => (
                <Col key={value.title} sm={24} md={8}>
                  <div className={styles.core_list_item}>
                    <div className={styles.core_list_item_image}><Image src={value.imageUrl} alt={''} /></div>
                    <div className={styles.core_list_item_title}>{value.title}</div>
                    <div className={styles.core_list_item_description}>{value.description}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className={styles.download}>
          <div className={styles.download_text}>
            立即免費使用 <span>B</span>ad<span>X</span>，<br/>
            以最輕鬆的方式<br/>
            管理、預約、享受羽球運動！
          </div>
          <div className={styles.download_button}>
            <Image src={appstoreSVG} alt={'Download on the AppStore'} />
          </div>
        </div>
      </main>
    </div>
  );
}

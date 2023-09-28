'use client'

import React, {useRef} from "react";
import styles from "@/app/page.module.scss";
import googleplaySVG from './google-play.svg'
import bannerSVG from './banner.svg'
import Image from "next/image";
import calendarImage from './calendar.png'
import {Carousel, Col, Row, Space} from "antd";
import OutLink from "@/components/Link/OutLink";
import leftButtonImage from './left-button.svg'
import rightButtonImage from './right-button.svg'
import carouselImage from './carousel.png'

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

const googleplayDownloadUrl = ''

export default function Home() {
  const carouselRef = useRef<any>()
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.banner}>
          <div className={styles.banner_inner}>
            <div className={styles.banner_start}>
              <h1><span>B</span>ad<span>X</span> App</h1>
              <div className={styles.banner_start_summary}>Ea ea fugiat id proident. Cupidatat excepteur non ullamco fugiat cillum quis id aliquip pariatur duis aute commodo.</div>
              <div className={styles.banner_start_download}>
                <OutLink href={googleplayDownloadUrl}><Image src={googleplaySVG} alt={'Download on the GooglePlay'} height={256} /></OutLink>
              </div>
            </div>
            <div className={styles.banner_end}>
              <Image src={bannerSVG} alt={''} />
            </div>
          </div>
        </section>

        <section className={styles.carousel}>
          <div className={styles.carousel_inner}>
            <Carousel autoplay ref={carouselRef}>
              {[0,1,2,3].map((value) => (
                <div key={value}>
                  <div className={styles.carousel_item}>
                    <Image src={carouselImage} alt={''} />
                  </div>
                </div>
              ))}
            </Carousel>
            <div className={styles.carousel_control}>
              <Space>
                <div onClick={() => carouselRef.current.prev()}>
                  <Image src={leftButtonImage} alt={'<'} />
                </div>
                <div onClick={() => carouselRef.current.next()}>
                  <Image src={rightButtonImage} alt={'>'} />
                </div>
              </Space>
            </div>
          </div>
        </section>

        <section className={styles.core}>
          <h2><span>B</span>ad<span>X</span> 核心功能</h2>
          <div className={styles.core_list}>
            <Row gutter={[32, 32]}>
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
        </section>

        <section className={styles.download}>
          <div className={styles.download_text}>
            立即免費使用 <span>B</span>ad<span>X</span>，<br/>
            以最輕鬆的方式<br/>
            管理、預約、享受羽球運動！
          </div>
          <div className={styles.download_button}>
            <OutLink href={googleplayDownloadUrl}><Image src={googleplaySVG} alt={'Download on the GooglePlay'} height={256} /></OutLink>
          </div>
        </section>
      </main>
    </div>
  );
}

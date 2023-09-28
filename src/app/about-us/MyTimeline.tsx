import React from "react"

import styles from './MyTimeline.module.sass'
import {ConfigProvider, Timeline} from "antd";
import icon1Image from './milestone-icon-1.png'
import icon2Image from './milestone-icon-2.png'
import icon3Image from './milestone-icon-3.png'
import Image from "next/image";
import {ArrowDownOutlined} from "@ant-design/icons";

export interface IProps {

}

export const MyTimeline: React.FC<IProps> = (props) => {
  return (
    <div className={styles.container}>
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              /* here is your component tokens */
              itemPaddingBottom: 96,
              dotBg: 'rgba(0,0,0,0)',
              tailWidth: 4,
            },
          },
        }}
      >
        <Timeline
          mode="alternate"
          pending
          pendingDot={<ArrowDownOutlined className={styles.last} />}
          items={[
            {
              dot: <Dot index={'01'} color={'#1D9DD0'} />,
              children: (
                <div className={styles.item}>
                  <div className={styles.item_line} style={{backgroundColor: '#1D9DD0'}} />
                  <div className={styles.item_icon}>
                    <Image src={icon1Image} alt={''} />
                  </div>
                  <div className={styles.item_text}>
                    <div className={styles.item_text_header}>
                      公司成立！
                    </div>
                    <div className={styles.item_text_body}>
                      賦喆運動科技有限公司成立，正式為民服務！
                    </div>
                  </div>
                </div>
              ),
            },
            {
              dot: <Dot index={'02'} color={'#1D7AD0'} />,
              children: (
                <div className={styles.item} style={{flexDirection: 'row-reverse'}}>
                  <div className={styles.item_line} style={{backgroundColor: '#1D9DD0'}} />
                  <div className={styles.item_icon}>
                    <Image src={icon2Image} alt={''} />
                  </div>
                  <div className={styles.item_text}>
                    <div className={styles.item_text_header}>
                      網頁正式上線
                    </div>
                    <div className={styles.item_text_body}>
                      推出最小可行性產品，<br/>
                      試試市場水溫與接受度如何，在看狀況進行改良。
                    </div>
                  </div>
                </div>
              ),
            },
            {
              dot: <Dot index={'03'} color={'#1D44D0'} />,
              children: (
                <div className={styles.item}>
                  <div className={styles.item_line} style={{backgroundColor: '#1D9DD0'}} />
                  <div className={styles.item_icon}>
                    <Image src={icon3Image} alt={''} />
                  </div>
                  <div className={styles.item_text}>
                    <div className={styles.item_text_header}>
                      公司成立！
                    </div>
                    <div className={styles.item_text_body}>
                      推出最小可行性產品，<br/>
                      試試市場水溫與接受度如何，在看狀況進行改良。
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </ConfigProvider>
    </div>
  )
}

const Dot: React.FC<{
  index: string|number,
  color: string
}> = (props) => {
  const {index, color} = props
  return (
    <div className={styles.dot}>
      <div className={styles.dot_inner} style={{backgroundColor: color}}>
        {index}
      </div>
    </div>
  )
}

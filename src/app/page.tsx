import styles from "@/styles/_Home.module.scss";
import appstoreSVG from './appstore.svg'
import bannerSVG from './banner.svg'
import Image from "next/image";

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

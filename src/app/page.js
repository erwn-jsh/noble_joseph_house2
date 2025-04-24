'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { useScroll, useTransform } from 'framer-motion';
import ReactLenis from '@studio-freight/react-lenis';
import Landing from './components/Landing/Landing';
import About from './components/Landing/About';
import AboutV2 from './components/Landing/AboutV2';
import Serving from './components/Landing/Serving';
import ServingV2 from './components/Landing/ServingV2';
import Why from './components/Landing/Why';
import Donate from './components/Landing/Donate';
import Footer from './components/Footer';

export default function Home() {
  const videoEl1 = useRef(null);

  const attemptPlay = (videoEl) => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error);
      });
  };

  useEffect(() => {
    attemptPlay(videoEl1);
  }, []);

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <div ref={container} className={styles.page}>
        {/* <div className={styles.landing}>
        <div className={styles.landing_content_wrapper}>
          <video
            playsInline
            loop
            muted
            alt="All the devices"
            src="/Landing_Placeholder.mp4"
            ref={videoEl1}
          />
          <div className={styles.landing_content}>
            <div className={styles.landing_logo}>
              <Image src="/Saints/Joseph_White.png" width={500} height={500} />
              <p>Give me the Stranger</p>
            </div>
          </div>
        </div>
      </div> */}

        {/* <div className={styles.landingv2}>
        <div className={styles.bannerv2}>
          <h1 className={styles.banner__contentv2}>
            Orthodox Mission in the Heart of Toronto
          </h1>
        </div>
        <div className={styles.landing_content_wrapperv2}>
          <video
            // playsInline
            // loop
            // muted
            alt="All the devices"
            src="/Landing_Placeholder.mp4"
            ref={videoEl1}
          />
          <div className={styles.landing_contentv2}>
            <p>We Teach, We Heal, We Bring the Light of Christ to All</p>
            <div className={styles.landing_donatev2}>
              <Link href="/donate">Donate</Link>
            </div>
          </div>
        </div>
      </div> */}

        {/* <div className={styles.about}>
        <Image
          className={styles.about_logo}
          src="/Saints/Joseph_Red.png"
          width={350}
          height={350}
        />
        <div className={styles.about_text}>
          <h2>About</h2>
          <p>
            Like the first churches of early Christianity, which welcomed and
            served their communities with open arms, we offer 'hospitality'
            regularly to the Regent Park community every Monday.
          </p>
          <p>
            We invite all to <span>"taste and see"</span> the warmth and love
            of community, where everyone is welcome to join in. Our gatherings
            are a time to relax, unwind, and connect with others over cards,
            conversation, and music - someone often plays the piano to set the
            tone. We also take time to celebrate birthdays and anniversaries,
            making sure everyone feels seen and valued. Whether you're a
            long-time resident or just passing through, our Monday gatherings
            are a great way to catch up with friends, make new ones, and feel a
            sense of belonging in the community.
          </p>
        </div>
      </div>
      <div className={styles.activities}>
        <h1>Activities</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          aperiam, quasi doloribus quo dolorum distinctio ratione saepe quis
          earum quidem nam illum exercitationem dolores aspernatur odio
          obcaecati asperiores rerum error?
        </p>
      </div>
      <div className={styles.callToAction}>
        <h1>Want to Get Involved?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel
          pariatur est natus numquam deserunt sed mollitia, dolore ad
          voluptatem. Quo nobis non ad, debitis reiciendis adipisci ducimus iure
          officiis.
        </p>
      </div> */}

        <Landing scrollYProgress={scrollYProgress} />
        {/* <About scrollYProgress={scrollYProgress} /> */}
        <AboutV2 />
        <ServingV2 />
        <Why />
        {/* <Serving /> */}
        <Donate />
        <Footer />

        {/* <motion.div style={{ scale }} className={styles.aboutv2}></motion.div> */}
      </div>
    </ReactLenis>
  );
}

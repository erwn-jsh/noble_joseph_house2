'use client';
import { useRef, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { useInView, motion } from 'framer-motion';

const index = () => {
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

  const phrases = ['Orthodox Mission in the', 'Heart of Toronto'];
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: '75%' });

  const animation = {
    initial: { y: '100%' },

    enter: (i) => ({
      y: '0',
      transition: {
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={body} className={styles.landingv2}>
      <div className={styles.bannerv2}>
        <h1 className={styles.banner__contentv2}>
          {phrases.map((phrase, index) => {
            return (
              <div key={index} className={styles.lineMask}>
                <motion.p
                  custom={index}
                  variants={animation}
                  initial="initial"
                  animate={isInView ? 'enter' : ''}
                >
                  {phrase}
                </motion.p>
              </div>
            );
          })}
        </h1>
        {/* <h1 className={styles.banner__contentv2}>
          Orthodox Mission in the Heart of Toronto
        </h1> */}
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
          <p>We Serve, We Heal, We Bring the Light of Christ to All</p>
          <div className={styles.landing_donatev2}>
            <Link href="/donate">Donate</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

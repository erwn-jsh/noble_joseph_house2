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

  return (
    <div className={styles.container}>
      <div className={styles.video_wrapper}>
        <video
          // playsInline
          // loop
          // muted
          alt="All the devices"
          src="/Landing_Placeholder.mp4"
          ref={videoEl1}
        />
        <div className={styles.hero_content}>
          <h2 className={styles.lead_text}>Give me the Stranger</h2>
          <div className={styles.donate}>
            <Link href="/donate">Donate</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

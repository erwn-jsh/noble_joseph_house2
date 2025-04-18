import React from 'react';
import styles from './styles.module.css';
import { motion, useTransform } from 'framer-motion';
import Image from 'next/image';

const index = () => {
  return (
    <div className={styles.about}>
      {/* <div className={styles.logo_container}>
        <Image
          className={styles.about_logo}
          src="/Saints/Joseph_Red.png"
          width={350}
          height={350}
        />
      </div> */}
      <div className={styles.about_text}>
        <h2>What We Do</h2>
        <div className={styles.quote_container}>
          <p className={styles.quote}>Give me the Stranger</p>
          <p className={styles.joseph}>St. Joseph of Arimathea</p>
        </div>
        <p className={styles.paragraph_one}>
          Like the first churches of early Christianity, we offer ‘hospitality’
          regularly to the Regent Park community every Monday, inviting all to
          「taste and see」.
        </p>
        <p className={styles.paragraph_two}>
          Open to anyone, we play cards, chat, someone plays the piano,
          birthdays and anniversaries are celebrated, we catch-up and connect.
        </p>
      </div>
    </div>
  );
};

export default index;

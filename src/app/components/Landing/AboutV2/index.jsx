import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const index = () => {
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.intro}>
        <div className={styles.who}>[ Who We Are ]</div>
        <h2 className={styles.lead}>
          Noble Joseph House is a volunteer-run community hub, bringing people
          together through hospitality, connection, and celebration. We offer a
          vibrant space for individuals to gather, share moments, and build
          meaningful relationships in Regent Park.
        </h2>
      </div>

      <div className={styles.about_content}>
        <div className={styles.about_text}>
          <div className={styles.quote_container}>
            <p className={styles.quote}>Give me the Stranger</p>
            <p className={styles.joseph}>St. Joseph of Arimathea</p>
          </div>
          <p className={styles.paragraph_one}>
            Like the first churches of early Christianity, we offer
            ‘hospitality’ regularly to the Regent Park community every Monday,
            inviting all to 「taste and see」.
          </p>
          <p className={styles.paragraph_two}>
            Open to anyone, we play cards, chat, someone plays the piano,
            birthdays and anniversaries are celebrated, we catch-up and connect.
          </p>
        </div>
        <div className={styles.about_image}>
          <div className={styles.image_wrapper}>
            <Image
              src={`/Serving/lead3.jpg`}
              // objectFit="cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

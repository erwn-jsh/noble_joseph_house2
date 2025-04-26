import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const index = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.lead_text}>About Us</h2>
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
      </div>

      <div className={`${styles.image_1}`}>
        <Image
          src={`/placeholders/1.jpg`}
          // objectFit="cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="placeholder"
        />
      </div>

      <div className={`${styles.image_2}`}>
        <Image
          src={`/placeholders/2.jpg`}
          // objectFit="cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="placeholder"
        />
      </div>

      <div className={`${styles.image_3}`}>
        <Image
          src={`/placeholders/3.jpg`}
          // objectFit="cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="placeholder"
        />
      </div>

      <div className={`${styles.image_4}`}>
        <Image
          src={`/placeholders/4.jpg`}
          // objectFit="cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export default index;

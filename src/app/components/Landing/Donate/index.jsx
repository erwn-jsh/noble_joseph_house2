import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

const index = () => {
  return (
    <div className={styles.donate}>
      <div className={styles.call_to_action}>
        <h2 className={styles.cta}>
          Support our Community Hub with a gift today
        </h2>
        <p className={styles.cta_support}>
          every contribution helps sustain and grow this vital space
          for our community.
        </p>
        <div className={styles.link_wrapper}>
          <Link href="/donate">
            <strong>Donate</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;

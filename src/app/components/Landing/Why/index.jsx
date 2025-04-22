import React from 'react';
import styles from './styles.module.css';
import ImageGallery from '../../ImageGallery';
const index = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.why}>[ Our Raison d'être ]</span>
      <h2 className={styles.lead}>
        Sure, but why build community? Because community changes everything.
      </h2>
      <div className={styles.gallery_wrapper}>
        <ImageGallery />
      </div>
    </div>
  );
};

export default index;

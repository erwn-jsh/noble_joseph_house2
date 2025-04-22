import React from 'react';
import styles from './styles.module.css';
import ImageGallery from '../../ImageGallery';
const index = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.why}>[ Our Raison d'être ]</span>
      <h2 className={styles.lead}>
        Sure, but why start a hub? Because giving people community&nbsp;
        <span className={styles.highlight}>changes everything.</span>
      </h2>
      <div className={styles.gallery_wrapper}>
        <ImageGallery />
      </div>
    </div>
  );
};

export default index;

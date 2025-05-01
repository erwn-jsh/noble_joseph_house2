import React, { useEffect } from 'react';
import styles from './styles.module.css';
import ImageGallery from '../../ImageGallery';
import { useAnimate, useInView } from 'framer-motion';

const index = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {}, [isInView]);

  return (
    <div className={styles.wrapper}>
      <span className={styles.why}>[ Why does it matter? ]</span>
      <h2 className={styles.lead}>
        Sure, but why run a hub? Because giving people community&nbsp;
        <span
          ref={scope}
          className={`${styles.anim_highlight} ${
            isInView ? styles.active : ''
          }`}
        >
          changes everything.
        </span>
      </h2>
      <div className={styles.gallery_wrapper}>
        <ImageGallery />
      </div>
    </div>
  );
};

export default index;

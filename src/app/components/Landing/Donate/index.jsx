'use client';
import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { useAnimate, useInView } from 'framer-motion';
const index = () => {
  const highlight = useRef(null);

  useEffect(() => {
    if (highlight.current) {
      highlight.current.style.width = '100%';
    }
  }, []);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { width: '100%', opacity: 1 });
    }
  }, [isInView]);

  return (
    <div className={styles.donate}>
      <div className={styles.call_to_action}>
        <p className={styles.cta_support1}>
          <span
            ref={scope}
            className={`${styles.anim_highlight} ${
              isInView ? styles.active : ''
            }`}
          >
            rising costs
          </span>{' '}
          hasn't made it easy
        </p>
        <h2 className={styles.cta}>Support us with a gift today</h2>
        <p className={styles.cta_support2}>
          every contribution sustains and grows our community.
        </p>
        <div className={styles.link_wrapper}>
          <Link href="/donate">
            <strong>Donate</strong>
            <div className={styles.svg_wrapper}>
              <CurrencyDollarIcon className="size-2 text-blue-500" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;

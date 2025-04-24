'use client';
import React, { useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { useAnimate, useInView } from 'framer-motion';
const index = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {}, [isInView]);

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
          </span>
          &nbsp;hasn't made it easy
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

'use client';
import React from 'react';
import Link from 'next/link';
import { useTransitionRouter } from 'next-view-transitions';
import styles from './styles.module.css';

const Nav = () => {
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: 'translateY(0)',
        },
        {
          opacity: 0.2,
          transform: 'translateY(-35%)',
        },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13,1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)',
        },

        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0, 0 0)',
        },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13,1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  }

  return (
    <nav className={styles.nav}>
      <div>
        <div>
          <Link
            className={styles.index}
            href="/"
            onClick={(e) => {
              e.preventDefault();
              router.push('/', {
                onTransitionReady: slideInOut,
              });
            }}
          >
            Noble Joseph House
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div>
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              router.push('/', {
                onTransitionReady: slideInOut,
              });
            }}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              router.push('/about', {
                onTransitionReady: slideInOut,
              });
            }}
          >
            About
          </Link>
        </div>
        <div>
          <Link
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              router.push('/contact', {
                onTransitionReady: slideInOut,
              });
            }}
          >
            Contact
          </Link>
        </div>
        <div className={styles.donate}>
          <Link
            href="/donate"
            onClick={(e) => {
              e.preventDefault();
              router.push('/donate', {
                onTransitionReady: slideInOut,
              });
            }}
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

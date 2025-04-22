'use client';
import Link from 'next/link';
import { useTransitionRouter } from 'next-view-transitions';
import styles from './styles.module.css';
import Image from 'next/image';

const Footer = () => {
  const router = useTransitionRouter();
  const currentYear = new Date().getFullYear();

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
    // <div className={styles.wrapper}>
    // <div className={styles.logo_container}>
    //   <Image
    //     src={`/Saints/Joseph_white.png`}
    //     // objectFit="cover"
    //     width={0}
    //     height={0}
    //     sizes="100vw"
    //     style={{ width: '100%', height: 'auto' }}
    //   />
    // </div>
    //   <div className={styles.footer_content}>
    // <div>
    //   <Link
    //     className={styles.index}
    //     href="/"
    //     onClick={(e) => {
    //       e.preventDefault();
    //       router.push('/', {
    //         onTransitionReady: slideInOut,
    //       });
    //     }}
    //   >
    //     Noble Joseph House
    //   </Link>
    // </div>
    // <div className={styles.links}>
    //   <div>
    //     <Link
    //       href="/"
    //       onClick={(e) => {
    //         e.preventDefault();
    //         router.push('/', {
    //           onTransitionReady: slideInOut,
    //         });
    //       }}
    //     >
    //       Home
    //     </Link>
    //   </div>
    //   <div>
    //     <Link
    //       href="/about"
    //       onClick={(e) => {
    //         e.preventDefault();
    //         router.push('/about', {
    //           onTransitionReady: slideInOut,
    //         });
    //       }}
    //     >
    //       About
    //     </Link>
    //   </div>
    //   <div>
    //     <Link
    //       href="/contact"
    //       onClick={(e) => {
    //         e.preventDefault();
    //         router.push('/contact', {
    //           onTransitionReady: slideInOut,
    //         });
    //       }}
    //     >
    //       Contact
    //     </Link>
    //   </div>
    //   <div className={styles.donate}>
    //     <Link
    //       href="/donate"
    //       onClick={(e) => {
    //         e.preventDefault();
    //         router.push('/donate', {
    //           onTransitionReady: slideInOut,
    //         });
    //       }}
    //     >
    //       Donate
    //     </Link>
    //   </div>
    // </div>
    //   </div>
    //   <div>
    //     <p>237 Sackville St Lower Level, Toronto, ON M5A 3G1</p>
    //     <p>Open every Monday 6:00PM - 8:00PM</p>
    //   </div>
    //   <div>CC Copyright 2025 Noble Joseph House. All rights reserved.</div>
    // </div>
    <div className={styles.wrapper}>
      <div className={styles.footer_content}>
        <div className={styles.logo_container}>
          <Image
            src={`/Saints/Joseph_white.png`}
            // objectFit="cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className={styles.navigation}>
          <div className={styles.index}>
            <Link
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
        </div>
        <div className={styles.contact}>
          <p className={styles.reach}>Reach out to us</p>
          <p>Phone No: (416) 703-1111</p>
          <p>Email: info@st.silouan.ca</p>
          <p>Address: 237 Sackville St Lower Level, Toronto, ON M5A 3G1</p>
          <p>Hours: Monday 6:00PM - 8:00PM</p>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; Copyright {currentYear} Noble Joseph House
      </p>
    </div>
  );
};

export default Footer;

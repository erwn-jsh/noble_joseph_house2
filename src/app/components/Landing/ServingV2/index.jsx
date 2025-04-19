import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const index = () => {
  return (
    <div className={styles.serving_wrapper}>
      <div className={styles.grid}>
        <div className={styles.item}>
          <h2>How We Serve</h2>
          <div className={styles.logo_container}>
            <Image
              className={styles.about_logo}
              src="/Saints/Joseph_Red.png"
              width={350}
              height={350}
            />
          </div>
        </div>
        <div className={styles.item}>
          <p className={styles.activity}>Meals</p>
          <p className={styles.activity_subtitle}>We feed</p>
          <p className={styles.activity_content}>
            Savor home-cooked meals, lovingly prepared by church volunteers,
            every Monday night. Come taste the love and community that brings
            people together from all over Toronto.
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.activity}>Memorial</p>
          <p className={styles.activity_subtitle}>We remember</p>
          <p className={styles.activity_content}>
            Honor a loved one with a memorial meal, where community comes
            together in prayer and remembrance.
          </p>
          <p className={styles.activity_content}>
            Sponsor a meal and share in the tradition of koliva, a sweet dish of
            boiled wheat, while we pray and celebrate the lives of those dear to
            you.
          </p>
          <p className={styles.activity_content}>
            Email <strong>info@st.silouan.ca</strong> to learn more.
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.activity}>Homework Club</p>
          <p className={styles.activity_subtitle}>We teach</p>
          <p className={styles.activity_content}>
            Get your child the support they need with our math and writing
            tutoring, led by certified teachers and supported by young volunteer
            tutors. Plus, enjoy fun contests, celebrations, and playtime with
            friends - all while enjoying good food and a sense of community!
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.activity}>Knitting Club</p>
          <p className={styles.activity_subtitle}>We create</p>
          <p className={styles.activity_content}>
            Join our cozy knitting group, led by Fran, where community and
            creativity come together in a warm and welcoming space. Knit with
            us, using donated yarn, as we share fellowship and prepare for our
            evening meals together.
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.activity}>Compline</p>
          <p className={styles.activity_subtitle}>We pray</p>
          <p className={styles.activity_content}>
            Wrap up the evening with a peaceful prayer service, where community
            and reflection come together in a warm and intimate setting. Stay
            and connect with others, as this quiet moment often sparks a deeper
            connection to faith and community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;

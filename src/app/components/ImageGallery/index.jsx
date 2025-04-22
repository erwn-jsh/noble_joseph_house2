import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
const index = () => {
  const data = [
    {
      title: 'Impact 1',
      src: '1.jpg',
      description:
        '1 Many of our meals are sponsored or cooked by a parishioner in memory of a loved one.  Before it is served, memorial prayers are offered, candles lit and Memory Eternal is sung.  Often koliva, (aka   kollyva, kollyba, kolyvo, kutya or colivă) -- a traditional sweet dish of boiled wheat -- is served. This is an opportunity for community members and visitors alike to remember those dear to them, whom they have lost. <br> <br>If you would like us to serve a meal in memory of a loved one, reach out to find out how you can sponsor a memorial meal:  email <strong>info@st.silouan.ca</strong>.',
      alt: 'placeholder',
    },
    {
      title: 'Impact 2',
      src: '2.jpg',
      description:
        '2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum optio ipsum veniam consequuntur nisi perferendis laborum. Et sapiente similique culpa voluptatum. Quidem, illum adipisci magni voluptatem facilis recusandae quas praesentium?',
      alt: 'placeholder',
    },
    {
      title: 'Impact 3',
      src: '3.jpg',
      description:
        '3 Many of our meals are sponsored or cooked by a parishioner in memory of a loved one.  Before it is served, memorial prayers are offered, candles lit and Memory Eternal is sung.  Often koliva, (aka   kollyva, kollyba, kolyvo, kutya or colivă) -- a traditional sweet dish of boiled wheat -- is served. This is an opportunity for community members and visitors alike to remember those dear to them, whom they have lost. <br> <br>If you would like us to serve a meal in memory of a loved one, reach out to find out how you can sponsor a memorial meal:  email <strong>info@st.silouan.ca</strong>.',
      alt: 'placeholder',
    },
    {
      title: 'Impact 4',
      src: '4.jpg',
      description:
        '4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum optio ipsum veniam consequuntur nisi perferendis laborum. Et sapiente similique culpa voluptatum. Quidem, illum adipisci magni voluptatem facilis recusandae quas praesentium?',
      alt: 'placeholder',
    },
  ];

  const [displayedContent, setDisplayedContent] = useState(data[0]);
  const [isSelected, setIsSelected] = useState(0);

  const handleClick = (index) => {
    setDisplayedContent(data[index]);
    setIsSelected(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.photo_container}>
        <Image
          src={`/Why/${displayedContent.src}`}
          // objectFit="cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt={`${displayedContent.alt}`}
        />
      </div>
      <div className={styles.controls}>
        <button
          className={`${styles.button} ${
            isSelected === 0 ? styles.selected : ''
          }`}
          onClick={() => handleClick(0)}
        >
          Impact 1
        </button>
        <button
          className={`${styles.button} ${
            isSelected === 1 ? styles.selected : ''
          }`}
          onClick={() => handleClick(1)}
        >
          Impact 2
        </button>
        <button
          className={`${styles.button} ${
            isSelected === 2 ? styles.selected : ''
          }`}
          onClick={() => handleClick(2)}
        >
          Impact 3
        </button>
        <button
          className={`${styles.button} ${
            isSelected === 3 ? styles.selected : ''
          }`}
          onClick={() => handleClick(3)}
        >
          Impact 4
        </button>
      </div>
      <div className={styles.description_wrapper}>
        <p className={styles.description}>{displayedContent.description}</p>
      </div>
    </div>
  );
};

export default index;

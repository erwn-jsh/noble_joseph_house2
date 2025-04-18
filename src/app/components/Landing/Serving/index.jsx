import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import meal from '../../../../../public/Serving/meal.jpg';
import { services } from '../../../../app/data';
import Card from '../../Card';

const index = () => {
  return (
    <div className={styles.serving}>
      <h2>How We Serve </h2>

      {/* {services.map((service, index) => {
        if (index !== services.length) {
          return (
            <div
              key={`s_${index}`}
              className={styles.card}
              style={{ top: `calc(15% + ${index * 80}px)` }}
            >
              <h3>{service.service}</h3>
              <div className={styles.card_content}>
                <p>{service.description}</p>
                <img src={`Serving/${service.src}`} alt="" />
              </div>
            </div>
          );
        }
        return;
      })} */}
      {services.map((service, index) => {
        if (index !== services.length - 1) {
          return <Card key={`s_${index}`} i={index} {...service} />;
        }
        // return <div>content</div>;
      })}
    </div>
  );
};

export default index;

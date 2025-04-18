import styles from './styles.module.css';
import Image from 'next/image';
import tset from '../../../../public/Serving/meal.jpg';

const index = ({ service, description, src, i }) => {
  return (
    <div
      key={`s_${index}`}
      className={styles.card}
      style={{
        top: `calc(10% + ${i * 72}px)`,
      }}
    >
      <h3>{service}</h3>
      <div className={styles.card_content}>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <div className={styles.image_container}>
          {/* <img src={`Serving/${src}`} alt="" /> */}
          {/* <p>{`../../../../public/Serving/${src}`}</p> */}

          <Image
            src={`/Serving/${src}`}
            objectFit="cover"
            layout="responsive"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default index;

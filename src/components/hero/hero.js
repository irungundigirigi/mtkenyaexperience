import Image from 'next/image';
import styles from './Hero.module.css';

const CoverComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/cover.png"
          alt="Mt Kenya"
          className={styles.img}
          layout="responsive"
          width='300'
          height='300'
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Curated Mt Kenya Hiking experiences</h1>
        <h2 className={styles.subtitle}>Share your experiences</h2>
      </div>
    </div>
  );
};

export default CoverComponent;

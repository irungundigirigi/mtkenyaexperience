import Image from 'next/image';
import styles from './Hero.module.css';

const CoverComponent = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/cover.png"
          alt="Mt Kenya"
          className={styles.img}
          width='300'
          height='300'
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Your Curated Mt. Kenya Expedition Hub</h1>
          <h2 className={styles.subtitle}>Share your tales.</h2>
        </div>
      </div>
    </div>
  );
};

export default CoverComponent;

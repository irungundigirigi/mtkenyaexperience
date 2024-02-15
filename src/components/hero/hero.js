// components/Hero.js

import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <Image src="/cover.jpg" alt="Mount Kenya Hiking" layout="fill" objectFit="cover" />
      <div className={styles.text}>
        <h1>Share your Mt. Kenya hiking experiences</h1>
        <p>Help other hikers prepare.</p>
      </div>
    </div>
  );
};

export default Hero;

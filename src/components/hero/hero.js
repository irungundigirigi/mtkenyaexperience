// components/Hero.js

import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <Image src="/cover.jpg" alt="Mount Kenya Hiking" layout="fill" objectFit="cover" />
      <div className={styles.text}>
        <h1> Curated Mount Kenya Hiking Experiences. </h1>
        <p>Connect Through Mount Kenya. Tell your Hiking stories.</p>
      </div>
    </div>
  );
};

export default Hero;

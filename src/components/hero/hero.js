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
          <p className={styles.subtitle}>Sharing your Mt. Kenya hiking experiences isn't just about reliving the adrenaline rush or boasting about your conquests; it's about paying it forward and helping others embark on their own mountain journey. By sharing your tales of triumphs and trials, you offer invaluable insights that can guide aspiring trekkers in their preparations. Your firsthand accounts shed light on the gear essentials, trail conditions, and unexpected challenges that await on the mountain's slopes.<p> Moreover, sharing preserves your memories in a vibrant tapestry of experiences, ensuring that each summit, each sunrise, and each encounter with nature is immortalized and cherished. Your stories become beacons of inspiration, encouraging others to chase their dreams, conquer their fears, and embrace the unparalleled beauty of the mountain wilderness. So, let's embark on this journey together, armed with knowledge, fueled by passion, and united by the shared love for adventure and exploration.</p></p>
        </div>
      </div>
    </div>
  );
};

export default CoverComponent;

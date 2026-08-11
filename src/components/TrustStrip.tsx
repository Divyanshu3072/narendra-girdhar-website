import { SealCheck, MapPin, Users, HandsClapping } from "@phosphor-icons/react/dist/ssr";
import styles from "../styles/TrustStrip.module.css";
import { profile } from "../data/profile";

export default function TrustStrip() {
  return (
    <section className={styles.strip}>
      <div className={`container ${styles.container}`}>
        <div className={styles.item}>
          <SealCheck className={styles.icon} weight="duotone" />
          <span className={styles.label}>{profile.designation.hi}</span>
        </div>
        <div className={styles.item}>
          <MapPin className={styles.icon} weight="duotone" />
          <span className={styles.label}>चिड़ावा</span>
        </div>
        <div className={styles.item}>
          <HandsClapping className={styles.icon} weight="duotone" />
          <span className={styles.label}>जनसेवा</span>
        </div>
        <div className={styles.item}>
          <Users className={styles.icon} weight="duotone" />
          <span className={styles.label}>संगठन</span>
        </div>
      </div>
    </section>
  );
}

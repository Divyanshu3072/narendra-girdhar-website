import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import styles from "../styles/Hero.module.css";
import { profile } from "../data/profile";

export default function Hero() {
  const emailSubject = encodeURIComponent("जनसमस्या - नरेंद्र गिरधर वेबसाइट");
  const emailBody = encodeURIComponent(`नाम: \nमोबाइल नंबर: \nवार्ड / क्षेत्र: \nसमस्या का प्रकार: \nसमस्या का विवरण: \n`);
  const mailtoLink = `mailto:${profile.social.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className={styles.hero}>
      <div className={styles.pattern}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <MapPin className={styles.badgeIcon} weight="fill" />
            {profile.location.hi}
          </div>
          
          <h1 className={styles.title}>{profile.name.hi}</h1>
          <h2 className={styles.subtitle}>{profile.designation.hi}</h2>
          
          <p className={styles.description}>
            जनसेवा • संगठन • विकास <br />
            चिड़ावा के विकास और जनसेवा के लिए प्रतिबद्ध।
          </p>
          
          <div className={styles.actions}>
            <a href={mailtoLink} className="btn btn-primary">
              जनसमस्या बताएं
            </a>
            <Link href="/gallery" className="btn btn-secondary">
              गैलरी देखें <ArrowRight />
            </Link>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/narendra-girdhar/Hero Section.png" 
            alt="Narendra Girdhar" 
            fill
            priority
            className={styles.image}
            style={{ objectPosition: "center 15%" }}
            sizes="(max-width: 992px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

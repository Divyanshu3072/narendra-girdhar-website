import Link from "next/link";
import { FacebookLogo, ChatText, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import styles from "../styles/Footer.module.css";
import { profile } from "../data/profile";

export default function Footer() {
  const emailSubject = encodeURIComponent("जनसमस्या - नरेंद्र गिरधर वेबसाइट");
  const emailBody = encodeURIComponent(`नाम: \nमोबाइल नंबर: \nवार्ड / क्षेत्र: \nसमस्या का प्रकार: \nसमस्या का विवरण: \n`);
  const mailtoLink = `mailto:${profile.social.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <h3>{profile.name.hi}</h3>
              <p>{profile.designation.hi}</p>
              <div className={styles.social}>
                {profile.social.facebook && (
                  <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FacebookLogo weight="fill" size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <div className={styles.links}>
              <h4>महत्वपूर्ण लिंक</h4>
              <ul>
                <li><Link href="/">मुखपृष्ठ</Link></li>
                <li><Link href="/#about">परिचय</Link></li>
                <li><Link href="/gallery">गैलरी</Link></li>
              </ul>
            </div>
            
            <div className={styles.links}>
              <h4>संपर्क</h4>
              <ul>
                <li><Link href="/contact">हमसे जुड़ें / संपर्क</Link></li>
                <li><a href={mailtoLink}>जनसमस्या बताएं</a></li>
              </ul>
            </div>
          </div>
          
          <div className={styles.bottom}>
            <div className={styles.copyright}>
              &copy; {new Date().getFullYear()} {profile.name.hi}. All rights reserved.
            </div>
            <div className={styles.legal}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
          
          <div className={styles.disclaimer}>
            यह वेबसाइट नरेंद्र गिरधर के सार्वजनिक एवं सामाजिक कार्यों से संबंधित आधिकारिक डिजिटल प्लेटफॉर्म के रूप में उपयोग हेतु निर्मित है।
          </div>
        </div>
      </footer>

      {/* Floating Action Bar (Mobile Only) */}
      <div className={styles.mobileActionWrapper}>
        <div className={styles.mobileActionBar}>
          {/* Removed unverified Call/WhatsApp. Using only mailto as requested. */}
          <a href={mailtoLink} className={`${styles.mobileActionBtn} ${styles.primary}`}>
            <ChatText className={styles.mobileActionIcon} weight="fill" />
            जनसमस्या
          </a>
        </div>
      </div>
    </>
  );
}

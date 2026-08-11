import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import { timelineEvents } from "@/data/timeline";
import { visionPillars } from "@/data/vision";
import { profile } from "@/data/profile";
import styles from "./page.module.css";
import { 
  CaretRight, 
  FacebookLogo, 
  InstagramLogo,
  Buildings,
  Drop,
  Sparkle,
  Briefcase,
  ShieldCheck,
  Handshake
} from "@phosphor-icons/react/dist/ssr";

const getVisionIcon = (iconName: string) => {
  switch (iconName) {
    case 'Buildings': return <Buildings size={32} weight="regular" />;
    case 'Drop': return <Drop size={32} weight="regular" />;
    case 'Broom':
    case 'Sparkle': return <Sparkle size={32} weight="regular" />;
    case 'Student':
    case 'Briefcase': return <Briefcase size={32} weight="regular" />;
    case 'ShieldCheck': return <ShieldCheck size={32} weight="regular" />;
    case 'Users':
    case 'Handshake': return <Handshake size={32} weight="regular" />;
    default: return <Sparkle size={32} weight="regular" />;
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      
      {/* Introduction Section */}
      <section id="about" className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2>नरेंद्र गिरधर</h2>
              <h3 className={styles.aboutSubtitle}>जनसेवा और संगठन की यात्रा</h3>
              <p>
                नरेंद्र गिरधर चिड़ावा क्षेत्र में एक सक्रिय राजनीतिक एवं सामाजिक कार्यकर्ता हैं, जो वर्तमान में <strong>भाजपा चिड़ावा नगर मंडल अध्यक्ष</strong> के रूप में कार्य कर रहे हैं। 
              </p>
              <p>
                संगठनात्मक कार्यों के साथ-साथ, वे आमजन की समस्याओं को सुनने, स्थानीय विकास के मुद्दों को उठाने और सामुदायिक कार्यक्रमों में निरंतर अपनी भागीदारी सुनिश्चित करते रहे हैं। उनका मुख्य फोकस चिड़ावा के विकास और यहां के निवासियों की समस्याओं के समाधान की दिशा में कार्य करना है।
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                {profile.social.instagram && (
                  <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.95rem" }}>
                    <InstagramLogo size={20} weight="regular" /> Instagram
                  </a>
                )}
                {profile.social.facebook && (
                  <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.95rem" }}>
                    <FacebookLogo size={20} weight="regular" /> Facebook
                  </a>
                )}
              </div>
            </div>
            <div className={styles.aboutImage}>
              <Image 
                src="/images/narendra-girdhar/About Section.png" 
                alt="Narendra Girdhar interaction" 
                fill 
                className={styles.image}
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="section-light">
        <div className="container">
          <div className="text-center">
            <h2>चिड़ावा के लिए संकल्प</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto 3rem auto" }}>
              चिड़ावा शहर के समग्र विकास और नागरिकों के जीवन स्तर को बेहतर बनाने के लिए हमारे प्रमुख फोकस क्षेत्र।
            </p>
          </div>
          
          <div className={styles.visionGrid}>
            {visionPillars.map((pillar) => (
              <div key={pillar.id} className={styles.visionCard}>
                <div className={styles.visionIconWrapper}>
                  <span className={styles.visionIcon}>{getVisionIcon(pillar.icon)}</span>
                </div>
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>जनसेवा एवं संगठन की यात्रा</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto 3rem auto" }}>
              सार्वजनिक जीवन और पार्टी संगठन में निरंतर सक्रियता।
            </p>
          </div>
          
          <div className={styles.timeline}>
            {timelineEvents.map((event, index) => (
              <div key={event.id} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineDate}>{event.date}</span>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <span className={styles.timelineCategory}>{event.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section-light">
        <div className="container text-center">
          <h2>आपकी बात, संबंधित स्तर तक</h2>
          <p style={{ maxWidth: "600px", margin: "1rem auto 2rem auto" }}>
            यदि आपके क्षेत्र में पानी, बिजली, सड़क या किसी अन्य मूलभूत सुविधा से जुड़ी कोई समस्या है, तो हमें बताएं। हम इसे उचित मंच तक पहुंचाने का प्रयास करेंगे।
          </p>
          <a href={`mailto:narendragirdhar@gmail.com?subject=${encodeURIComponent('जनसमस्या - नरेंद्र गिरधर वेबसाइट')}&body=${encodeURIComponent('नाम: \nमोबाइल नंबर: \nवार्ड / क्षेत्र: \nसमस्या का प्रकार: \nसमस्या का विवरण: \n')}`} className="btn btn-primary">
            जनसमस्या बताएं
          </a>
        </div>
      </section>
    </>
  );
}

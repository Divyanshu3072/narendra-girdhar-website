import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import styles from "./page.module.css";
import { ArrowSquareOut, Newspaper } from "@phosphor-icons/react/dist/ssr";

export default function GalleryPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center">
          <h1>गैलरी</h1>
          <p style={{ maxWidth: "600px", margin: "0 auto 2rem auto" }}>
            जनसेवा, संगठन और सार्वजनिक गतिविधियों की झलक
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item) => (
            <article key={item.id} className={styles.galleryCard}>
              {item.image && (
                <div className={styles.imageWrapper}>
                  <Image 
                    src={item.image} 
                    alt={item.titleHindi} 
                    fill 
                    className={styles.cardImage} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardCategory}>{item.category}</span>
                  <span>{item.date}</span>
                </div>
                
                <h3 className={styles.cardTitle}>{item.titleHindi}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                
                {item.sourceName && (
                  <div className={styles.cardSource}>
                    <Newspaper /> {item.sourceName} 
                    {item.verificationStatus === "verified" && <span style={{color: 'green', marginLeft: '5px'}}>✓</span>}
                  </div>
                )}
                
                {item.sourceUrl && (
                  <a 
                    href={item.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`btn btn-secondary ${styles.sourceLink}`}
                  >
                    समाचार पढ़ें <ArrowSquareOut />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

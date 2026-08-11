"use client";

import Link from "next/link";
import { List, Phone, ChatText } from "@phosphor-icons/react";
import styles from "../styles/Header.module.css";
import { profile } from "../data/profile";

export default function Header() {
  const emailSubject = encodeURIComponent("जनसमस्या - नरेंद्र गिरधर वेबसाइट");
  const emailBody = encodeURIComponent(`नाम: \nमोबाइल नंबर: \nवार्ड / क्षेत्र: \nसमस्या का प्रकार: \nसमस्या का विवरण: \n`);
  const mailtoLink = `mailto:${profile.social.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          {profile.name.hi}
          <span>{profile.designation.hi}</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>मुखपृष्ठ</Link>
          <Link href="/#about" className={styles.navLink}>परिचय</Link>
          <Link href="/gallery" className={styles.navLink}>गैलरी</Link>
          <Link href="/contact" className={styles.navLink}>संपर्क</Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.langToggle}>हिंदी | EN</button>
          <a href={mailtoLink} className={`btn btn-primary`}>
            <ChatText weight="bold" /> जनसमस्या बताएं
          </a>
          <button className={styles.mobileMenuBtn}>
            <List />
          </button>
        </div>
      </div>
    </header>
  );
}

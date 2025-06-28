import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Royal Phoenicia Hotel</h1>
        <p className={styles.subtitle}>Experience luxury, comfort, and elegance in the heart of the city.</p>
        <button className={styles.cta}>Book Now</button>
      </div>
    </section>
  );
};

export default HeroSection; 
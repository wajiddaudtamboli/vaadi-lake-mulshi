import React from 'react';
import Navbar from '../components/Navbar';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import styles from './Lifestyle.module.css';
import heroImage from '../assets/lifestyle/lifestyle-hero.png';

const Lifestyle = () => {
  return (
    <main className={styles.lifestylePage}>
      <section className={styles.hero}>
        <img src={heroImage} alt="Vaadi Lake Mulshi" className={styles.heroImage} />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <Navbar />
      </section>
      <Amenities />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Lifestyle;

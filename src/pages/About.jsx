import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import heroImage from '../assets/about/about-hero.png';
import vaadiLogo from '../assets/about/vaadi-logo.png';
import capricornLogo from '../assets/about/capricorn-logo.png';
import sliderImage from '../assets/about/about-slider.png';
import chevronLeft from '../assets/about/chevron-left.svg';
import chevronRight from '../assets/about/chevron-right.svg';
import eleganceImage from '../assets/about/about-elegance-image.png';
import vaadiEmblem from '../assets/about/vaadi-emblem.png';
import amenitiesImage from '../assets/about/about-amenities.png';
import freshPerspectiveImage from '../assets/about/about-fresh-perspective-e846a2.png';
import Footer from '../components/Footer';

const About = () => {
  return (
    <main className={styles.aboutViewport}>
      <div className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <img src={heroImage} alt="Vaadi Lake Mulshi" className={styles.heroImage} />
          <div className={styles.heroOverlay} aria-hidden="true" />
          
          <header className={styles.navHeader}>
            <img src={vaadiLogo} alt="Vaadi Lake Mulshi" className={styles.brandLogo} />
            <nav className={styles.nav}>
              <Link to="/" className={styles.navLink}>HOME</Link>
              <Link to="/about" className={styles.navLink}>VAADI</Link>
              <Link to="/lifestyle" className={styles.navLink}>LIFESTYLE</Link>
              <Link to="/contact" className={styles.navLink}>BLOGS</Link>
              <Link to="/contact" className={styles.navLink}>CONTACT</Link>
            </nav>
            <img src={capricornLogo} alt="Capricorn Group" className={styles.partnerLogo} />
          </header>
        </section>

        {/* Welcome Section */}
        <section className={styles.welcomeSection}>
          <div className={styles.welcomeBlock}>
            <p className={styles.welcomeLabel}>Welcome to</p>
            <h1 className={styles.welcomeTitle}>
              <span>Vaadi Lake Mulshi</span>
              <span>A World Apart</span>
            </h1>
          </div>
          <div className={styles.welcomeDivider} aria-hidden="true" />
          <p className={styles.welcomeDescription}>
            Vaadi Lake Mulshi is an embodiment of timeless luxury, where every season transforms into an exquisite celebration of life.
            Surrounded by lush, meticulously landscaped gardens and serene natural settings, this exclusive retreat offers unparalleled
            privacy and architectural splendor, redefining the art of refined living.
          </p>
        </section>

        {/* Slider Section */}
        <section className={styles.sliderSection}>
          <img src={sliderImage} alt="Vaadi Lake Mulshi Villas" className={styles.sliderImage} />
          <button type="button" className={styles.sliderButtonLeft} aria-label="Previous">
            <img src={chevronLeft} alt="" className={styles.sliderChevronLeft} aria-hidden="true" />
          </button>
          <button type="button" className={styles.sliderButtonRight} aria-label="Next">
            <img src={chevronRight} alt="" className={styles.sliderChevronRight} aria-hidden="true" />
          </button>
        </section>

        {/* Elegance Section */}
        <section className={styles.eleganceSection}>
          <img src={eleganceImage} alt="Elegance and Serenity" className={styles.eleganceImage} />
          <div className={styles.eleganceOverlay}>
            <div className={styles.eleganceContent}>
              <p className={styles.eleganceKicker}>A Vision Of</p>
              <h2 className={styles.eleganceTitle}>Elegance and Serenity</h2>
              <p className={styles.eleganceDescription}>
                Designed by the visionary Capricorn Group, Vaadi Lake Mulshi transcends the concept of a residence to become an extraordinary
                experience. With private courtyards, shimmering pools, elegant pavilions, and thoughtfully crafted outdoor spaces, every detail
                is tailored to enhance your lifestyle. This sanctuary seamlessly merges the beauty of nature with impeccable design, offering a
                timeless retreat perfectly aligned with your aspirations.
              </p>
            </div>
            <img src={vaadiEmblem} alt="Vaadi Lake Mulshi Emblem" className={styles.eleganceEmblem} />
          </div>
        </section>

        {/* Amenities Section */}
        <section className={styles.amenitiesSection}>
          <h2 className={styles.amenitiesTitle}>Exclusive Villa Amenities</h2>
          <img src={amenitiesImage} alt="Exclusive Villa Amenities" className={styles.amenitiesImage} />
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <iframe
            className={styles.mapIframe}
            title="Vaadi Estate Location"
            src="https://maps.google.com/maps?q=Vaadi%20Estate%2C%20Lonavala%20Road%2C%20Taluka%2C%20Village%20Shiravli%2C%20Mulshi%2C%20Pune%2C%20Maharashtra%20412108%2C%20India&z=19&output=embed"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* Fresh Perspective Section */}
        <section className={styles.freshSection}>
          <div className={styles.freshAccent} aria-hidden="true" />
          <img src={freshPerspectiveImage} alt="A Fresh Perspective on Living" className={styles.freshImage} />
          <div className={styles.freshContent}>
            <p className={styles.freshKicker}>Vaadi Lake Mulshi</p>
            <h2 className={styles.freshTitle}>A Fresh Perspective on Living</h2>
            <p className={styles.freshDescription}>
              Vaadi Lake Mulshi sets a new benchmark for outdoor living, offering a seamless integration of luxury, functionality, and
              aesthetic brilliance. Every space is thoughtfully crafted to enhance your connection with the outdoors. The attention to detail
              extends to every element—be it ambient lighting, premium materials, or architectural design—creating an environment that exudes
              sophistication and ease. Here, outdoor living transcends the ordinary, delivering a lifestyle that is as refined as it is effortless.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className={styles.footerWrap}>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default About;

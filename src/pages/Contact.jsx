import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import styles from './Contact.module.css';
import contactHero from '../assets/contact/contact-hero.png';
import vaadiLogo from '../assets/Images for Landing Pages/Vaadi Logo PNG 003.png';
import capricornLogo from '../assets/about/capricorn-logo.png';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <img src={vaadiLogo} alt="Vaadi Lake Mulshi" className={styles.navBrandLogo} />
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>HOME</Link>
          <Link to="/about" className={styles.navLink}>VAADI</Link>
          <Link to="/lifestyle" className={styles.navLink}>LIFESTYLE</Link>
          <a href="#" className={styles.navLink}>BLOGS</a>
          <Link to="/contact" className={styles.navLink}>CONTACT</Link>
        </div>
        <img src={capricornLogo} alt="Capricorn Group" className={styles.navPartnerLogo} />
      </nav>
      
      {/* Main Contact Content */}
      <main className={styles.contactPage}>
        {/* Left Column - Info */}
        <div className={styles.infoColumn}>
          <h1 className={styles.title}>
            <span>Get in Touch</span>
            <span>With Us</span>
          </h1>

          <div className={styles.infoCard}>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>SITE ADDRESS</p>
              <p className={styles.infoText}>
                Vaadi Estate, Lonavala Road Village Shiravli, Taluka, Mulshi, Maharashtra 412108
              </p>
            </div>
            
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>CORPORATE OFFICE</p>
              <p className={styles.infoText}>
                Capricorn Group,<br />
                192 Dhole Patil Road,<br />
                Pune, India- 411001
              </p>
            </div>

            <div className={styles.phoneGrid}>
              <div className={styles.phoneBlock}>
                <p className={styles.infoLabel}>OFFICE</p>
                <a href="tel:+919699800948">+91 9699800948</a>
                <a href="tel:+917030920853">+91 7030920853</a>
              </div>
              <div className={styles.phoneBlock}>
                <p className={styles.infoLabel}>DIRECT</p>
                <a href="tel:+912066229000">02066229000</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className={styles.formColumn}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.formLabel}>NAME*</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.formLabel}>EMAIL*</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className={styles.formInput}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-phone" className={styles.formLabel}>PHONE NUMBER*</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  className={styles.formInput}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-availability" className={styles.formLabel}>AVAILABILITY</label>
                <input
                  id="contact-availability"
                  name="availability"
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter the date you are free"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-message" className={styles.formLabel}>MESSAGE</label>
              <textarea
                id="contact-message"
                name="message"
                className={styles.formTextarea}
                placeholder="Tell us a little bit about your inquiry"
                rows={4}
              />
            </div>

            <button type="submit" className={styles.submitButton}>SUBMIT</button>
          </form>
        </div>
      </main>

      {/* Hero Banner */}
      <section className={styles.heroSection}>
        <img src={contactHero} alt="" className={styles.heroImage} />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroText}>
          <p className={styles.heroKicker}>Vaadi Lake Mulshi</p>
          <p className={styles.heroTitle}>The Ideal Destination</p>
        </div>
      </section>

      {/* Footer */}
      <div className={styles.footerWrap}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

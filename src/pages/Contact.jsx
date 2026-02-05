import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import styles from './Contact.module.css';
import contactHero from '../assets/contact/contact-hero.png';
import vaadiLogo from '../assets/Images for Landing Pages/Vaadi Logo PNG 003.png';
import capricornLogo from '../assets/about/capricorn-logo.png';

const Contact = () => {
  return (
    <div className={styles.pageWrapper}>
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
      
      <main className={styles.contactPage}>

      <h1 className={styles.title}>
        <span>Get in Touch</span>
        <span>With Us</span>
      </h1>

      <div className={styles.infoCard} />
      <div className={styles.infoBlock}>
        <p className={styles.infoLabel}>SITE ADDRESS</p>
        <p className={styles.infoText}>
          Vaadi Estate, Lonavala Road Village Shiravli, Taluka, Mulshi,
          Maharashtra 412108
        </p>
      </div>
      <div className={styles.infoBlockOffice}>
        <p className={styles.infoLabel}>CORPORATE OFFICE</p>
        <p className={styles.infoText}>
          Capricorn Group, <br />
          192 Dhole Patil Road, <br />
          Pune, India- 411001
        </p>
      </div>
      <p className={styles.officeLabel}>OFFICE</p>
      <p className={styles.directLabel}>DIRECT</p>
      <a href="tel:+919699800948" className={styles.officePhone}>+91 9699800948</a>
      <a href="tel:+917030920853" className={styles.officePhoneAlt}>+91 7030920853</a>
      <a href="tel:+912066229000" className={styles.directPhone}>02066229000</a>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="contact-name" className={styles.labelName}>NAME*</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          className={styles.inputName}
          placeholder="Enter your full name"
        />
        <div className={styles.lineName} aria-hidden="true" />

        <label htmlFor="contact-email" className={styles.labelEmail}>EMAIL*</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className={styles.inputEmail}
          placeholder="Enter your email address"
        />
        <div className={styles.lineEmail} aria-hidden="true" />

        <label htmlFor="contact-phone" className={styles.labelPhone}>PHONE NUMBER*</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          className={styles.inputPhone}
          placeholder="Enter your phone number"
        />
        <div className={styles.linePhone} aria-hidden="true" />

        <label htmlFor="contact-availability" className={styles.labelAvailability}>AVAILABILITY</label>
        <input
          id="contact-availability"
          name="availability"
          type="text"
          className={styles.inputAvailability}
          placeholder="Enter the date you are free"
        />
        <div className={styles.lineAvailability} aria-hidden="true" />

        <label htmlFor="contact-message" className={styles.labelMessage}>MESSAGE</label>
        <input
          id="contact-message"
          name="message"
          type="text"
          className={styles.inputMessage}
          placeholder="Tell us a little bit about your inquiry"
        />
        <div className={styles.lineMessage} aria-hidden="true" />

        <button type="submit" className={styles.submitButton}>SUBMIT</button>
      </form>
      </main>

      <section className={styles.heroSection}>
        <img src={contactHero} alt="" className={styles.heroImage} />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroText}>
          <p className={styles.heroKicker}>Vaadi Lake Mulsi</p>
          <p className={styles.heroTitle}>The Ideal Destination</p>
        </div>
      </section>

      <div className={styles.footerWrap}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

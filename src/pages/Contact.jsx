import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Contact.module.css';
import contactHero from '../assets/contact/contact-hero.png';

const CONTACT_WHATSAPP = '971505793490';

function buildContactInquiryMessage(data) {
  const lines = [
    'Dear Vaadi Group,',
    '',
    'I would like to get in touch. Please find my details below:',
    '',
    '--- CONTACT INQUIRY ---',
    '',
    `Name:           ${(data.name || '').trim() || '—'}`,
    `Email:          ${(data.email || '').trim() || '—'}`,
    `Phone Number:   ${(data.phone || '').trim() || '—'}`,
    `Availability:   ${(data.availability || '').trim() || '—'}`,
    '',
    'Message:',
    (data.message || '').trim() || '—',
    '',
    '---',
    '',
    'Thank you.',
    'Best regards,',
    (data.name || '').trim() || 'Inquirer',
  ];
  return lines.join('\n');
}

const Contact = () => {
  const formRef = useRef(null);

  // Update meta tags for SEO
  useEffect(() => {
    // Update title
    document.title = 'Contact Vaadi – Schedule a Private Visit or Enquire Now';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Interested in owning a lakeside villa at Vaadi? Contact our team to schedule a private tour, request the brochure, or get answers to all your queries.');
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://vaadi.in/contact');
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Contact Vaadi – Schedule a Private Visit or Enquire Now');
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', 'Interested in owning a lakeside villa at Vaadi? Contact our team to schedule a private tour, request the brochure, or get answers to all your queries.');
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://vaadi.in/contact');
  }, []);

  const openContactWhatsApp = () => {
    const form = formRef.current;
    if (!form) return;
    const data = Object.fromEntries(new FormData(form));
    const message = buildContactInquiryMessage(data);
    const url = `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openContactWhatsApp();
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Navigation */}
      <div className={styles.navWrapper}>
        <Navbar />
      </div>
      
      {/* Main Contact Content */}
      <main id="contact-form" className={styles.contactPage}>
        {/* Left Column - Info */}
        <div className={styles.infoColumn}>
          <h1 className={styles.title}>
            <span>Get in Touch</span>
            <span>With Us</span>
          </h1>
          <div className={styles.infoCard}>
            <div className={styles.addressGrid}>
              <div className={styles.infoBlock}>
                <p className={styles.infoLabel}>SITE ADDRESS</p>
                <p className={styles.infoText}>
                  Vaadi Estate, Lonavala<br />
                  Road Village Shiravli,<br />
                  Taluka, Mulshi,<br />
                  Maharashtra 412108
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
          <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
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

            <button
              type="button"
              className={styles.submitButton}
              onClick={openContactWhatsApp}
            >
              SUBMIT
            </button>
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

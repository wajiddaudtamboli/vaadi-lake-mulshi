import React, { useState, useEffect } from 'react';
import styles from './BookMeetingModal.module.css';
import CalendarPopup from '../CalendarPopup/CalendarPopup';
import vaadLogo from '../../assets/about/vaad-logo.jpg';
import meetImage from '../../assets/Images for Landing Pages/meet.jpg';

/* WhatsApp number for Book Meeting inquiries (wa.me uses digits only, no + or spaces) */
const BOOK_MEETING_WHATSAPP = '971505793490';

function buildInquiryMessage(form) {
  const meetingTypeLabel = (form.meetingType || '—') === 'online' ? 'Online' : (form.meetingType || '—') === 'offline' ? 'Offline' : (form.meetingType || '—');
  const lines = [
    'Dear Vaadi Group,',
    '',
    'I would like to schedule a meeting. Please find my details below:',
    '',
    '--- INQUIRY DETAILS ---',
    '',
    `Name:               ${form.name || '—'}`,
    `Email:              ${form.email || '—'}`,
    `Phone No.:          ${form.phone || '—'}`,
    `Preferred Date:     ${form.date || '—'}`,
    `Preferred Time:     ${form.time || '—'}`,
    `Current Location:   ${form.location || '—'}`,
    `Meeting Type:       ${meetingTypeLabel}`,
    '',
    '---',
    '',
    'Thank you.',
    'Best regards,',
    form.name || 'Inquirer',
  ];
  return lines.join('\n');
}

function openWhatsAppInquiry(form) {
  const message = buildInquiryMessage(form);
  const url = `https://wa.me/${BOOK_MEETING_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
}

const BookMeetingModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    location: '',
    meetingType: 'online',
  });
  const [calendarOpen, setCalendarOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (dateStr) => {
    setForm((prev) => ({ ...prev, date: dateStr }));
    setCalendarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsAppInquiry(form);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.leftPanel}>
          <div className={styles.leftInner}>
            <div className={styles.logoWrap}>
              <img src={vaadLogo} alt="Vaadi" className={styles.logo} />
            </div>

            <div className={styles.headlineWrap}>
              <h1 className={styles.headline}>
                <span>Schedule an</span>
                <span>meeting with us.</span>
              </h1>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="modal-name">Name</label>
                <input
                  id="modal-name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="modal-email">Email</label>
                <input
                  id="modal-email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="yourname@company.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="modal-phone">Phone No.</label>
                <input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  className={styles.input}
                  placeholder="Enter your number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.rowDateTime}>
                <div className={styles.inputGroupDate}>
                  <label className={styles.label} htmlFor="modal-date">Date</label>
                  <div className={styles.dateInputWrap}>
                    <input
                      id="modal-date"
                      name="date"
                      type="date"
                      className={styles.input}
                      placeholder="Preferred Date"
                      value={form.date}
                      onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                    />
                  </div>
                </div>
                <div className={styles.inputGroupTime}>
                  <label className={styles.label} htmlFor="modal-time">Time</label>
                  <input
                    id="modal-time"
                    name="time"
                    type="time"
                    className={styles.input}
                    placeholder="Preferred Time"
                    value={form.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.inputGroupLocation}>
                <label className={styles.label} htmlFor="modal-location">Current Location</label>
                <input
                  id="modal-location"
                  name="location"
                  type="text"
                  className={styles.input}
                  placeholder="Location"
                  value={form.location}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.meetingTypeWrap}>
                <span className={styles.meetingTypeLabel}>Preferred Type of Meeting</span>
                <div className={styles.radioRow}>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="meetingType"
                      value="online"
                      checked={form.meetingType === 'online'}
                      onChange={handleChange}
                      style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                    />
                    <span className={`${styles.radioBox} ${form.meetingType === 'online' ? styles.radioBoxChecked : ''}`}>
                      {form.meetingType === 'online' && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M8 2.5L3.5 7L2 5.5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span className={styles.radioLabel}>Online</span>
                  </label>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="meetingType"
                      value="offline"
                      checked={form.meetingType === 'offline'}
                      onChange={handleChange}
                      style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                    />
                    <span className={`${styles.radioBox} ${form.meetingType === 'offline' ? styles.radioBoxChecked : ''}`}>
                      {form.meetingType === 'offline' && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M8 2.5L3.5 7L2 5.5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span className={styles.radioLabel}>Offline</span>
                  </label>
                </div>
              </div>

              <div className={styles.submitWrap}>
                <button
                  type="button"
                  className={styles.submitBtn}
                  onClick={() => openWhatsAppInquiry(form)}
                >
                  SUBMIT YOUR INQUIRY
                </button>
              </div>
            </form>

            <div className={styles.socialWrap}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.766 6.98 6.94C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.94.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.94C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.rightPanelCurve}>
            <img
              src={meetImage}
              alt="Vaadi villa and infinity pool"
              className={styles.villaImage}
            />
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <svg viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L20 24M20 2L2 24" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {calendarOpen && (
          <CalendarPopup
            selectedDate={form.date}
            onSelect={handleDateSelect}
            onClose={() => setCalendarOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default BookMeetingModal;

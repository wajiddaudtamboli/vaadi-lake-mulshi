import React, { useState, useMemo } from 'react';
import styles from './CalendarPopup.module.css';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const formatDateForInput = (d) => {
  if (!d) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const parseDateStr = (str) => {
  if (!str || typeof str !== 'string') return null;
  const [y, m, day] = str.split('-').map(Number);
  if (!y || !m || !day) return null;
  const date = new Date(y, m - 1, day);
  return isNaN(date.getTime()) ? null : date;
};

const CalendarPopup = ({ selectedDate, onSelect, onClose }) => {
  const initial = useMemo(() => {
    const parsed = parseDateStr(selectedDate);
    return parsed && !isNaN(parsed.getTime()) ? parsed : new Date();
  }, [selectedDate]);

  const [viewDate, setViewDate] = useState(() => new Date(initial.getFullYear(), initial.getMonth(), 1));
  const [picked, setPicked] = useState(() => {
    const p = parseDateStr(selectedDate);
    return p || new Date(initial.getFullYear(), initial.getMonth(), initial.getDate());
  });

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const prevMonth = new Date(year, month - 1, 1);
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells = useMemo(() => {
    const list = [];
    for (let i = 0; i < startOffset; i++) {
      const d = prevMonthDays - startOffset + 1 + i;
      list.push({ type: 'prev', day: d, date: new Date(year, month - 1, d) });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      list.push({ type: 'current', day: d, date: new Date(year, month, d) });
    }
    let next = 1;
    while (list.length % 7 !== 0) {
      list.push({ type: 'next', day: next, date: new Date(year, month + 1, next) });
      next++;
    }
    return list;
  }, [year, month, startOffset, daysInMonth, prevMonthDays]);

  const isSelected = (cell) =>
    picked &&
    cell.date.getDate() === picked.getDate() &&
    cell.date.getMonth() === picked.getMonth() &&
    cell.date.getFullYear() === picked.getFullYear();

  const isToday = (cell) => {
    const t = new Date();
    return cell.date.getDate() === t.getDate() && cell.date.getMonth() === t.getMonth() && cell.date.getFullYear() === t.getFullYear();
  };

  const isPast = (cell) => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    const c = new Date(cell.date);
    c.setHours(0, 0, 0, 0);
    return c < t;
  };

  const goPrev = () => setViewDate(new Date(year, month - 1, 1));
  const goNext = () => setViewDate(new Date(year, month + 1, 1));

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthYearLabel = `${monthNames[month]} ${year}`;

  const handleToday = () => {
    const t = new Date();
    setViewDate(new Date(t.getFullYear(), t.getMonth(), 1));
    setPicked(t);
  };

  const handleApply = () => {
    onSelect(formatDateForInput(picked));
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Choose date">
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.inner}>
          <div className={styles.monthRow}>
            <button type="button" className={styles.navBtn} onClick={goPrev} aria-label="Previous month">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <span className={styles.monthYear}>{monthYearLabel}</span>
            <button type="button" className={styles.navBtn} onClick={goNext} aria-label="Next month">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <div className={styles.topRow}>
            <input
              type="text"
              className={styles.selectDateInput}
              value={formatDateForInput(picked)}
              readOnly
              placeholder="Select date"
            />
            <button type="button" className={styles.todayBtn} onClick={handleToday}>
              Today
            </button>
          </div>

          <div className={styles.grid}>
            {WEEKDAYS.map((w) => (
              <div key={w} className={styles.weekday}>{w}</div>
            ))}
            {cells.map((cell, i) => {
              const selected = isSelected(cell);
              const disabled = isPast(cell);
              const otherMonth = cell.type !== 'current';
              return (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dateCell} ${selected ? styles.selected : ''} ${disabled ? styles.disabled : ''} ${otherMonth ? styles.otherMonth : ''}`}
                  onClick={() => !disabled && setPicked(cell.date)}
                  disabled={disabled}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" className={`${styles.actionsBtn} ${styles.cancelBtn}`} onClick={onClose}>
            Cancel
          </button>
          <button type="button" className={`${styles.actionsBtn} ${styles.applyBtn}`} onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPopup;

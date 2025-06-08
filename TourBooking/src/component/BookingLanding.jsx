
import { useState, useEffect } from 'react';
import { ToursData } from './ToursData';
import './BookingLanding.css';

export default function BookingLanding({ onNext }) {
  const [selectedTourId, setSelectedTourId] = useState(
    ToursData.length > 0 ? ToursData[0].id : ''
  );
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [time, setTime] = useState('10:00');
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    sessionStorage.removeItem('bookingLanding');
    sessionStorage.removeItem('bookingPersonal');
  }, []);

  const handleNext = () => {
    if (!selectedTourId || !startDate || !endDate || !time || guests < 1) {
      alert('Please fill out all fields before continuing.');
      return;
    }
    if (endDate < startDate) {
      alert('End date cannot be earlier than start date.');
      return;
    }
    const data = {
      selectedTourId,
      startDate,
      endDate,
      time,
      guests,
    };
    sessionStorage.setItem('bookingLanding', JSON.stringify(data));
    onNext(data);
  };

  return (
    <div className="booking-landing">
      <h1>Book a Tour</h1>

      <div className="form-group full-width">
        <label htmlFor="tour-select">Tour</label>
        <select
          id="tour-select"
          value={selectedTourId}
          onChange={(e) => setSelectedTourId(e.target.value)}
        >
          {ToursData.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group half">
          <label htmlFor="start-date-input">Start Date</label>
          <input
            lang='en'
            id="start-date-input"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group half">
          <label htmlFor="time-select">Time</label>
          <select
            id="time-select"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="08:00">08:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="14:00">02:00 PM</option>
            <option value="16:00">04:00 PM</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group half">
          <label htmlFor="guests-input">Number of Guests</label>
          <input
            id="guests-input"
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value, 10) || 1)}
          />
        </div>
        <div className="form-group half">
          <label htmlFor="end-date-input">End Date</label>
          <input
            lang='en'
            id="end-date-input"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="booking-features">
        <ul>
          <li>
            <span className="check-icon">✔︎</span>
            <span>
              <a href="#" className="feature-link">
                Free cancellation
              </a>{' '}
              up to 24 hours before the experience starts (local time)
            </span>
          </li>
          <li>
            <span className="check-icon">✔︎</span>
            <span>
              <a href="#" className="feature-link">
                Reserve Now and Pay Later
              </a>{' '}
              – Secure your spot while staying flexible
            </span>
          </li>
        </ul>
      </div>

      <button className="btn-primary" onClick={handleNext}>
        Next: Your Info
      </button>
    </div>
  );
}

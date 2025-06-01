// src/components/BookingForm.jsx
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToursData } from './ToursData';
import './BookingForm.css';

export default function BookingForm({ landingData, onNext, onBack }) {
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);

  // Personal info:
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    if (!landingData) {
      const raw = sessionStorage.getItem('bookingLanding');
      if (!raw) {
        onBack();
        return;
      }
      const ld = JSON.parse(raw);
      const found = ToursData.find((t) => t.id === ld.selectedTourId);
      setTour(found || null);
    } else {
      const found = ToursData.find((t) => t.id === landingData.selectedTourId);
      setTour(found || null);
    }
  }, [landingData, onBack]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !agree
    ) {
      alert('Please fill out all mandatory fields and agree to the terms.');
      return;
    }
    const fullBooking = {
      ...landingData,
      firstName,
      lastName,
      email,
      dateOfBirth,
      phone,
    };
    sessionStorage.setItem('bookingPersonal', JSON.stringify(fullBooking));
    console.log('yes')
    onNext(fullBooking);
  };

  if (!tour) {
    return (
      <p style={{ textAlign: 'center', marginTop: '2rem' }}>
        Loading booking form…
      </p>
    );
  }

  return (
    <div className="booking-form-wrapper">
      <div className="booking-form-header">
        <h1>{tour.title}</h1>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group half">
            <label htmlFor="first-name-input">First Name</label>
            <input
              id="first-name-input"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
            />
          </div>
          <div className="form-group half">
            <label htmlFor="last-name-input">Last Name</label>
            <input
              id="last-name-input"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="form-row single">
          <div className="form-group full">
            <label htmlFor="email-input">Email Address</label>
            <input
              id="email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group half">
            <label htmlFor="dob-input">Date of Birth</label>
            <input
              id="dob-input"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <div className="form-group half">
            <label htmlFor="phone-input">Phone Number</label>
            <input
              id="phone-input"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(optional)"
            />
          </div>
        </div>

        <div className="checkbox-row">
          <input
            id="agree-checkbox"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agree-checkbox" className="checkbox-label">
            I agree to the terms and conditions
          </label>
        </div>

        <div className="price-box">
          <span>Price:</span> <strong>${tour.price}</strong>
        </div>

        <div className="button-row">
          <button type="submit" className="btn-primary" disabled={!agree}>Confirm Booking</button>
        </div>
      </form>
    </div>
  );
}

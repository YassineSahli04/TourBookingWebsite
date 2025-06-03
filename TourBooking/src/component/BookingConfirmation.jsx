// src/components/BookingConfirmation.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToursData } from './ToursData';
import './BookingConfirmation.css';
export default function BookingConfirmation({ bookingData: bookingDataProp }) {
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (bookingDataProp) {
      const tourObj = ToursData.find(t => t.id === bookingDataProp.selectedTourId);
      if (tourObj) {
        setDetails({ ...bookingDataProp, tour: tourObj });
        return;
      }
    }

    const raw = sessionStorage.getItem('bookingPersonal');
    if (raw) {
      try {
        const bookingFromStorage = JSON.parse(raw);
        const tourObj = ToursData.find(t => t.id === bookingFromStorage.selectedTourId);
        if (tourObj) {
          setDetails({ ...bookingFromStorage, tour: tourObj });
          return;
        }
      } catch (e) {
        // ignore parse errors
      }
    }

    navigate('/book/landing');
  }, [bookingDataProp, navigate]);

  if (!details) {
    return <p className="loading-text">Loading confirmation…</p>;
  }

  return (
    <div className="booking-confirmation-wrapper">
      <h1 className="confirmation-title">Booking Confirmed!</h1>

      <div className="confirmation-card">
        <h2 className="tour-title">{details.tour.title}</h2>

        <div className="date-boxes">
          <div className="date-box">
            <span className="date-label">Arrival Date</span>
            <span className="date-value">{details.startDate}</span>
          </div>
          <div className="date-box">
            <span className="date-label">Departure Date</span>
            <span className="date-value">{details.endDate}</span>
          </div>
        </div>

        <div className="confirmation-row">
          <span className="label">Time:</span>
          <span className="value">{details.time}</span>
        </div>

        <div className="confirmation-row">
          <span className="label">Number of Guests:</span>
          <span className="value">{details.guests}</span>
        </div>

        <div className="confirmation-row">
          <span className="label">Name:</span>
          <span className="value">
            {details.firstName} {details.lastName}
          </span>
        </div>

        <div className="confirmation-row">
          <span className="label">Email:</span>
          <span className="value">{details.email}</span>
        </div>

        {details.dateOfBirth && (
          <div className="confirmation-row">
            <span className="label">Date of Birth:</span>
            <span className="value">{details.dateOfBirth}</span>
          </div>
        )}

        {details.phone && (
          <div className="confirmation-row">
            <span className="label">Phone:</span>
            <span className="value">{details.phone}</span>
          </div>
        )}

        <div className="confirmation-row">
          <span className="label">Price:</span>
          <span className="value">${details.tour.price}</span>
        </div>

        <p className="confirmation-note">
          A confirmation email has been sent to <em>{details.email}</em>.<br />
          Thank you for booking with us!
        </p>

        <button
          className="btn-primary"
          onClick={() => {
            sessionStorage.removeItem('bookingLanding');
            sessionStorage.removeItem('bookingPersonal');
            navigate('/');
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
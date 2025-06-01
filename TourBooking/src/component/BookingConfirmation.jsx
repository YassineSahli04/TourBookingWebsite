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
      {/* Titre centré */}
      <h1 className="confirmation-title">Booking Confirmed!</h1>

      {/* Conteneur principal */}
      <div className="confirmation-card">
        {/* Titre du tour, aligné à gauche */}
        <h2 className="tour-title">{details.tour.title}</h2>

        {/* Dates dans deux boîtes côte à côte */}
        <div className="date-boxes">
          <div className="date-box">
            <span className="date-label">Date de venue</span>
            <span className="date-value">{details.startDate}</span>
          </div>
          <div className="date-box">
            <span className="date-label">Date de départ</span>
            <span className="date-value">{details.endDate}</span>
          </div>
        </div>

        {/* Heure et nombre de participants, alignés à gauche avec espacement */}
        <div className="confirmation-row">
          <span className="label">Heure :</span>
          <span className="value">{details.time}</span>
        </div>

        <div className="confirmation-row">
          <span className="label">Nombre de participants :</span>
          <span className="value">{details.guests}</span>
        </div>

        {/* Nom */}
        <div className="confirmation-row">
          <span className="label">Nom :</span>
          <span className="value">
            {details.firstName} {details.lastName}
          </span>
        </div>

        {/* Email */}
        <div className="confirmation-row">
          <span className="label">Email :</span>
          <span className="value">{details.email}</span>
        </div>

        {/* Date de naissance, si présente */}
        {details.dateOfBirth && (
          <div className="confirmation-row">
            <span className="label">Date de naissance :</span>
            <span className="value">{details.dateOfBirth}</span>
          </div>
        )}

        {/* Téléphone, si présent */}
        {details.phone && (
          <div className="confirmation-row">
            <span className="label">Téléphone :</span>
            <span className="value">{details.phone}</span>
          </div>
        )}

        {/* Prix */}
        <div className="confirmation-row">
          <span className="label">Prix :</span>
          <span className="value">${details.tour.price}</span>
        </div>

        {/* Texte de confirmation aligné à gauche avec plus d’espacement */}
        <p className="confirmation-note">
          Une confirmation a été envoyée à <em>{details.email}</em>.<br/>
          Merci d’avoir réservé avec nous !
        </p>

        {/* Bouton de retour */}
        <button
          className="btn-primary"
          onClick={() => {
            sessionStorage.removeItem('bookingLanding');
            sessionStorage.removeItem('bookingPersonal');
            navigate('/');
          }}
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
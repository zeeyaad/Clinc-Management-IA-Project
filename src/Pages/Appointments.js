import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Appointments() {
  const [showAll, setShowAll] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/appointments', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setAppointments(response.data);
      } catch (err) {
        setError('Failed to load appointments');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const displayedAppointments = showAll ? appointments : appointments.slice(0, 3);

  if (loading) {
    return (
      <div className="appointments-container">
        <h1 className="appointments-title">Appointments</h1>
        <p>Loading appointments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="appointments-container">
        <h1 className="appointments-title">Appointments</h1>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="appointments-container">
      <h1 className="appointments-title">Appointments</h1>
      <p className="appointments-subtitle">View and manage your upcoming visits.</p>

      <div className="appointments-card">
        <h2 className="appointments-card-title">Upcoming Appointments</h2>
        {appointments.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '20px' }}>No appointments found</p>
        ) : (
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Doctor</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {displayedAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.doctor?.name || 'Not assigned'}</td>
                  <td>{appointment.reason}</td>
                  <td>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      backgroundColor:
                        appointment.status === 'confirmed' ? '#dcfce7' :
                          appointment.status === 'pending' ? '#fef9c3' :
                            appointment.status === 'cancelled' ? '#fee2e2' :
                              '#e0f2fe',
                      color:
                        appointment.status === 'confirmed' ? '#166534' :
                          appointment.status === 'pending' ? '#854d0e' :
                            appointment.status === 'cancelled' ? '#991b1b' :
                              '#075985'
                    }}>
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {appointments.length > 3 && (
          <div className="appointments-link">
            <button
              className="view-all-button"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'View All Appointments →'}
            </button>
          </div>
        )}
      </div>

      <div className="appointments-button-wrapper">
        <Link to="/Schedule Appointment">
          <button className="appointments-button">Schedule New Appointment</button>
        </Link>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .appointments-container {
          padding: 24px;
          font-family: Arial, sans-serif;
        }

        .appointments-title {
          font-size: 28px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .appointments-subtitle {
          color: #6b7280;
          margin-bottom: 20px;
        }

        .appointments-card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .appointments-card-title {
          font-size: 18px;
          font-weight: 600;
          padding: 12px 16px;
          border-bottom: 1px solid #e5e7eb;
        }

        .appointments-table {
          width: 100%;
          font-size: 14px;
          border-collapse: collapse;
        }

        .appointments-table th,
        .appointments-table td {
          padding: 12px 16px;
          border-top: 1px solid #f3f4f6;
          text-align: left;
        }

        .appointments-table thead {
          background-color: #f9fafb;
          color: #6b7280;
        }

        .appointments-link {
          text-align: right;
          padding: 8px 16px;
          font-size: 13px;
        }

        .view-all-button {
          background: none;
          border: none;
          color: #2563eb;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .view-all-button:hover {
          background-color: #f3f4f6;
          text-decoration: underline;
        }

        .appointments-button-wrapper {
          text-align: center;
          margin-top: 24px;
        }

        .appointments-button {
          background-color: #2563eb;
          color: white;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .appointments-button:hover {
          background-color: #1e40af;
        }
      `}</style>
    </div>
  );
}

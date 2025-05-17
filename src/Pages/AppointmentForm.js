import React, { useState, useEffect } from "react";
import Header2 from "../Components/header2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AppointmentForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        doctorId: "",
        date: "",
        time: "",
        reason: ""
    });
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const timeSlots = [
        "9:00 AM - 9:30 AM",
        "10:00 AM - 10:30 AM",
        "11:00 AM - 11:30 AM",
        "2:00 PM - 2:30 PM",
        "3:00 PM - 3:30 PM",
        "4:00 PM - 4:30 PM"
    ];

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get("http://localhost:5078/api/doctors", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setDoctors(response.data);
            } catch (err) {
                setError("Failed to load doctors");
                console.error(err);
            }
        };

        fetchDoctors();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post("http://localhost:5078/api/appointments", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            alert(`Appointment booked successfully! Your appointment ID is: ${response.data.id}`);
            navigate("/appointments");
        } catch (err) {
            setError(err.response?.data?.message || "Failed to book appointment");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header2 />
            <div
                style={{
                    background: "#fff",
                    borderRadius: "16px",
                    maxWidth: 400,
                    margin: "40px auto",
                    padding: "32px 32px 24px 32px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                    fontFamily: "inherit"
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "2rem",
                        fontWeight: 700,
                        marginBottom: "2rem"
                    }}
                >
                    Make Appointment
                </h2>
                {error && (
                    <div style={{
                        color: "red",
                        marginBottom: "1rem",
                        textAlign: "center"
                    }}>
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label
                            style={{
                                display: "block",
                                fontWeight: 600,
                                marginBottom: "0.5rem"
                            }}
                        >
                            Select Doctor:
                        </label>
                        <select
                            name="doctorId"
                            value={formData.doctorId}
                            onChange={handleInputChange}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                fontSize: "1rem",
                                background: "#f9fafb",
                                marginBottom: 0
                            }}
                            required
                        >
                            <option value="">-- Select Doctor --</option>
                            {doctors.map((doc) => (
                                <option key={doc.id} value={doc.id}>
                                    {doc.name} - {doc.specialization}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                        <label
                            style={{
                                display: "block",
                                fontWeight: 600,
                                marginBottom: "0.5rem"
                            }}
                        >
                            Select Date:
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                fontSize: "1rem",
                                background: "#f9fafb"
                            }}
                            required
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                        <label
                            style={{
                                display: "block",
                                fontWeight: 600,
                                marginBottom: "0.5rem"
                            }}
                        >
                            Select Time Slot:
                        </label>
                        <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                fontSize: "1rem",
                                background: "#f9fafb"
                            }}
                            required
                        >
                            <option value="">-- Select Time Slot --</option>
                            {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div style={{ marginBottom: "2rem" }}>
                        <label
                            style={{
                                display: "block",
                                fontWeight: 600,
                                marginBottom: "0.5rem"
                            }}
                        >
                            Reason for Visit:
                        </label>
                        <textarea
                            name="reason"
                            value={formData.reason}
                            onChange={handleInputChange}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                fontSize: "1rem",
                                background: "#f9fafb",
                                minHeight: "100px"
                            }}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            background: loading ? "#93c5fd" : "#2563eb",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "1.25rem",
                            border: "none",
                            borderRadius: "8px",
                            padding: "0.75rem 0",
                            cursor: loading ? "not-allowed" : "pointer",
                            transition: "background 0.2s"
                        }}
                    >
                        {loading ? "Booking..." : "Book Appointment"}
                    </button>
                </form>
            </div>
        </>
    );
}

export default AppointmentForm; 
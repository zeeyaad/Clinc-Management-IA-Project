import React from "react";
import { Link } from 'react-router-dom';

function AppointmentTable() {
    const appointments = [
        { date: 'Apr 25, 2023', time: '9:00 AM', doctor: 'Dr. Smith', reason: 'Check-up' },
        { date: 'Apr 25, 2023', time: '10:30 AM', doctor: 'Dr. Johnson', reason: 'Blood Test' },
        { date: 'Apr 26, 2023', time: '2:00 PM', doctor: 'Dr. Smith', reason: 'Follow-up' },
    ];

    return (
        <div
            style={{
                background: "#fff",
                border: "1px solid #e5eaf1",
                borderRadius: "16px",
                padding: 0,
                maxWidth: 480,
                margin: "0 auto",
            }}
        >
            <div
                style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    padding: "1.25rem 1.5rem 0.75rem 1.5rem",
                    margin: 0,
                    color: "#222b45",
                }}
            >
                Upcoming Appointments
            </div>
            <table
                style={{
                    width: "100%",
                    fontSize: "1rem",
                    borderCollapse: "collapse",
                    background: "#fff",
                }}
            >
                <thead>
                    <tr
                        style={{
                            color: "#222b45",
                            borderBottom: "1px solid #e5eaf1",
                        }}
                    >
                        <th
                            style={{
                                fontWeight: 600,
                                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                                background: "#fff",
                                textAlign: "left",
                            }}
                        >
                            Date
                        </th>
                        <th
                            style={{
                                fontWeight: 600,
                                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                                background: "#fff",
                                textAlign: "left",
                            }}
                        >
                            Time
                        </th>
                        <th
                            style={{
                                fontWeight: 600,
                                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                                background: "#fff",
                                textAlign: "left",
                            }}
                        >
                            Doctor
                        </th>
                        <th
                            style={{
                                fontWeight: 600,
                                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                                background: "#fff",
                                textAlign: "left",
                            }}
                        >
                            Reason
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((item, idx) => (
                        <tr
                            key={idx}
                            style={{
                                borderBottom:
                                    idx === appointments.length - 1
                                        ? "none"
                                        : "1px solid #e5eaf1",
                            }}
                        >
                            <td
                                style={{
                                    padding: "0.75rem 1.5rem 0.75rem 1.5rem",
                                    color: "#222b45",
                                    background: "#fff",
                                    fontWeight: 400,
                                }}
                            >
                                {item.date}
                            </td>
                            <td
                                style={{
                                    padding: "0.75rem 1.5rem 0.75rem 1.5rem",
                                    color: "#222b45",
                                    background: "#fff",
                                    fontWeight: 400,
                                }}
                            >
                                {item.time}
                            </td>
                            <td
                                style={{
                                    padding: "0.75rem 1.5rem 0.75rem 1.5rem",
                                    color: "#222b45",
                                    background: "#fff",
                                    fontWeight: 400,
                                }}
                            >
                                {item.doctor}
                            </td>
                            <td
                                style={{
                                    padding: "0.75rem 1.5rem 0.75rem 1.5rem",
                                    color: "#222b45",
                                    background: "#fff",
                                    fontWeight: 400,
                                }}
                            >
                                {item.reason}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div
                style={{
                    textAlign: "right",
                    padding: "0.5rem 1.5rem 1rem 1.5rem",
                    background: "#fff",
                    borderRadius: "0 0 16px 16px",
                }}
            >
                <Link
                    to="##"
                    style={{
                        color: "#2563eb",
                        fontSize: "1rem",
                        textDecoration: "none",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                    }}
                >
                    View All Appointments <span style={{ marginLeft: "0.25rem" }}>&#8594;</span>
                </Link>
            </div>
        </div>
    );
}

export default AppointmentTable;
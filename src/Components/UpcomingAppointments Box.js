import React, { useState } from "react";

function UpcomingAppPart() {

    const [showAll, setShowAll] = useState(false);

    const appointments = [
        {
            time: "03:00 AM",
            doctor: "Dr. Smith",
            reason: "Check-up",
            status: "Confirmed",
        },
        {
            time: "11:00 AM",
            doctor: "Dr. Johnson",
            reason: "Blood Test",
            status: "Awaiting",
        },
        {
            time: "11:00 AM",
            doctor: "Dr. Johnson",
            reason: "Blood Test",
            status: "Awaiting",
        },
        {
            time: "11:00 AM",
            doctor: "Dr. Johnson",
            reason: "Blood Test",
            status: "Awaiting",
        },
        {
            time: "11:00 AM",
            doctor: "Dr. Johnson",
            reason: "Blood Test",
            status: "Awaiting",
        },
    ];

    const styles = {
        container: {
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "21rem",
            left: "17rem",
        },
        card: {
            backgroundColor: "#ffffff",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            width: "100%",
            maxWidth: "800px",
            fontFamily: "'Inter', sans-serif",
        },
        title: {
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "#111827",
            marginBottom: "1rem",
        },
        tableContainer: {
            overflowX: "auto",
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.95rem",
            color: "#374151",
            marginBottom: "1rem",
            minWidth: "500px", // ensure structure holds
        },
        thtd: {
            padding: "0.75rem",
            textAlign: "left",
            borderBottom: "1px solid #e5e7eb",
        },
        badge: {
            padding: "0.25rem 0.75rem",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: "500",
            display: "inline-block",
        },
        confirmed: {
            backgroundColor: "#d1fae5",
            color: "#065f46",
        },
        awaiting: {
            backgroundColor: "#e5e7eb",
            color: "#374151",
        },
        button: {
            backgroundColor: "#f9fafb",
            color: "#1f2937",
            padding: "0.5rem 1rem",
            fontSize: "0.875rem",
            borderRadius: "0.5rem",
            border: "1px solid #d1d5db",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
        },

        // Responsive tweaks using inline media queries
        '@media (maxWidth: 640px)': {
            card: {
                padding: "1rem",
            },
            table: {
                fontSize: "0.875rem",
            },
            title: {
                fontSize: "1rem",
            },
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h3 style={styles.title}>Upcoming Appointments</h3>
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.thtd}>Time</th>
                                <th style={styles.thtd}>Doctor</th>
                                <th style={styles.thtd}>Reason</th>
                                <th style={styles.thtd}>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {appointments
                                .slice(0, showAll ? appointments.length : 3)
                                .map((appt, index) => (
                                    <tr key={index}>
                                        <td style={styles.thtd}>{appt.time}</td>
                                        <td style={styles.thtd}>{appt.doctor}</td>
                                        <td style={styles.thtd}>{appt.reason}</td>
                                        <td style={styles.thtd}>
                                            <span
                                                style={{
                                                    ...styles.badge,
                                                    ...(appt.status === "Confirmed"
                                                        ? styles.confirmed
                                                        : styles.awaiting),
                                                }}
                                            >
                                                {appt.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                            
                        </tbody>
                    </table>
                </div>
                {appointments.length > 3 && (
                    <button
                        style={styles.button}
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less" : "View All Appointments"}
                    </button>
                )}
            </div>
        </div>
    );
}

export default UpcomingAppPart;

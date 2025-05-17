import React from "react";
import Header2 from "../Components/header2";
import Sidebar from "../Components/sidebar";
import UpcomingAppPart from "../Components/UpcomingAppointments Box";
import DataBox from "../Components/DataBox"


function Patient() {
    var MrName = "Zed";

    const styles = {
        welcomeSection: {
            fontFamily: 'Inter, sans-serif',
            marginLeft: '260px', // Adjust if sidebar width differs
            padding: '2rem',
            position: 'absolute',
            top: '115px',
        },
        heading: {
            fontSize: '30px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '1.5rem',
        },
        statsGrid: {
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
        },
        statCard: {
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            padding: '1.25rem',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            // textAlign: 'center',
            textAlign: 'left',
            flex: '1',
            minWidth: '200px',
        },
        statNumber: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#1F2937',
            marginBottom: '0.25rem',
        },
        statLabel: {
            fontSize: '16px',
            color: '#6B7280',
            fontWeight: 'bold',
        }
    };

    const Data = [
        {
            spanContent: "Upcoming Appointments",
            h2Content: "2 Today",
        },
        {
            spanContent: "New Messages",
            h2Content: "1",
        },
        {
            spanContent: "Pending Lab Results",
            h2Content: "1",
        },
        {
            spanContent: "My Conds",
            h2Content: "3",
        }
    ];





    return (
        <>
            <Header2 />
            <Sidebar />

            <div style={styles.welcomeSection}>
                <h1 style={styles.heading}>Welcome back, {MrName}</h1>
                <div style={styles.statsGrid}>
                    {Data.map(({ spanContent, h2Content }, index) =>
                        <DataBox spanContent={spanContent} h2Content={h2Content} key={index} />
                    )}
                </div>
            </div>

            <UpcomingAppPart />
        </>
    );
}

export default Patient;

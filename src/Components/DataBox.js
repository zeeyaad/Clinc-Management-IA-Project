import React from "react";

function DataBox(props) { 

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

    return (
        <>
            <div style={styles.statsGrid}>
{/* 
                {Data.map(({ spanContent, h2Content }, index) => */}
                    <div style={styles.statCard}  >
                        <span style={styles.statLabel}>{props.spanContent}</span>
                        <h2 style={styles.statNumber}>{props.h2Content}</h2>
                    </div>
                {/* )} */}
            </div>
        </>
    );
}

export default DataBox;
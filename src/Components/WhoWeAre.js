import React from "react";

const WhoWeAre = () => {
    const styles = {
        section: {
            backgroundColor: "#2596a5",
            padding: "40px 20px",
            textAlign: "center",
            color: "white",
        },
        stats: {
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            margin: "20px 0",
        },
        stat: {
            fontSize: "24px",
            fontWeight: "bold",
        },
        statLabel: {
            fontSize: "14px",
        },
        whoContent: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
        },
        image: {
            width: "300px",
            height: "auto",
            marginBottom: "20px",
        },
        textBlock: {
            maxWidth: "600px",
            margin: "10px auto",
        },
        heading: {
            marginBottom: "10px",
        }
    };

    return (
        <section style={styles.section}>
            <h2>Who We Are?</h2>
            <div style={styles.stats}>
                <div>
                    <p style={styles.stat}>10</p>
                    <span style={styles.statLabel}>Doctors</span>
                </div>
                <div>
                    <p style={styles.stat}>20</p>
                    <span style={styles.statLabel}>Rooms</span>
                </div>
                <div>
                    <p style={styles.stat}>23</p>
                    <span style={styles.statLabel}>Years of Experience</span>
                </div>
                <div>
                    <p style={styles.stat}>40</p>
                    <span style={styles.statLabel}>Opening Hours per Week</span>
                </div>
            </div>

            <div style={styles.whoContent}>
                <img src="your-image-path.jpg" alt="Hospital" style={styles.image} />
                <div style={styles.textBlock}>
                    <h3 style={styles.heading}>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
                <div style={styles.textBlock}>
                    <h3 style={styles.heading}>Our Vision</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;

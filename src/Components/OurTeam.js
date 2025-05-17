import React from "react";

const OurTeam = () => {
    const styles = {
        section: {
            backgroundColor: "#f1f3f5",
            padding: "50px 20px",
            textAlign: "center",
        },
        title: {
            fontSize: "2rem",
            marginBottom: "30px",
            color: "#333",
        },
        teamContainer: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
        },
        card: {
            backgroundColor: "#fff",
            width: "250px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            paddingBottom: "20px",
        },
        cardImage: {
            width: "100%",
            height: "200px",
            objectFit: "cover",
        },
        cardBody: {
            padding: "15px",
        },
        name: {
            fontSize: "18px",
            fontWeight: "bold",
            margin: "10px 0 5px",
            color: "#333",
        },
        specialty: {
            color: "#0d6efd",
            fontWeight: "600",
            fontSize: "14px",
            marginBottom: "5px",
        },
        degrees: {
            fontSize: "12px",
            color: "#777",
            marginBottom: "10px",
        },
        info: {
            fontSize: "12px",
            color: "#555",
            marginBottom: "5px",
        },
        socialIcons: {
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            gap: "10px",
            fontSize: "16px",
            color: "#0d6efd",
            cursor: "pointer",
        },
    };

    const teamMembers = [
        {
            name: "Daniel Barnes",
            specialty: "Ortho",
            degrees: "DDS, MDS, PhD, MD",
            awards: "22 Awards",
            experience: "20 Years",
            image: "your-image-url-1.jpg",
        },
        {
            name: "Melissa Bates",
            specialty: "Gyne",
            degrees: "MBBS, MS, MA",
            awards: "15 Awards",
            experience: "18 Years",
            image: "your-image-url-2.jpg",
        },
        {
            name: "Charli Arla",
            specialty: "Skin",
            degrees: "MBBS, MD",
            awards: "20 Awards",
            experience: "15 Years",
            image: "your-image-url-3.jpg",
        },
    ];

    return (
        <section style={styles.section}>
            <h2 style={styles.title}>Our Team</h2>
            <div style={styles.teamContainer}>
                {teamMembers.map((member, idx) => (
                    <div style={styles.card} key={idx}>
                        <img src={member.image} alt={member.name} style={styles.cardImage} />
                        <div style={styles.cardBody}>
                            <h3 style={styles.name}>{member.name}</h3>
                            <p style={styles.specialty}>{member.specialty}</p>
                            <p style={styles.degrees}>{member.degrees}</p>
                            <p style={styles.info}>Awards: {member.awards}</p>
                            <p style={styles.info}>Experience: {member.experience}</p>
                            <div style={styles.socialIcons}>
                                <span>🔵</span>
                                <span>🐦</span>
                                <span>📸</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;

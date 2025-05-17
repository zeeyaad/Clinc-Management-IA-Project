import React from "react";
import { Link } from "react-router-dom";    

function Header2() {
    const styles = {
        wrapper: {
            display: 'flex',
            flexWrap: 'wrap', // Ensures items wrap on small screens
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 20px',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e5e7eb',
            gap: '12px', // Space between wrapped items
        },
        leftHeader: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#EEEEEE',
            padding: '8px 14px',
            borderRadius: '8px',
            flex: '1 1 auto', // Allow to shrink/grow
            minWidth: '200px', // Prevent too small
        },
        title: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            margin: 0,
        },
        actions: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexShrink: 0,
        },
        notificationBtn: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
        },
        icon: {
            fontSize: '22px',
            color: '#000',
        },
        avatar: {
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
    };

    return (
        <header style={styles.wrapper}>
            <div style={styles.leftHeader}>
                <h1 style={styles.title}>Clinical Management</h1>
            </div>

            <div style={styles.actions}>
                <Link  to = "/Messages" style={styles.notificationBtn}>
                    <i style={styles.icon} className="fa-regular fa-bell"></i>
                </Link>
                <img
                    src={"./Assets/Images/Doctor.png"}
                    alt="User Avatar"
                    style={styles.avatar}
                />
            </div>
        </header>
    );
}

export default Header2;

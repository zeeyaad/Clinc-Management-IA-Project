import { useState } from "react";
import {
    House,
    Calendar3,
    People,
    FileText,
    Envelope,
    BarChart,
    Gear
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const doctorNavItems = [
    { label: "Dashboard", icon: <House />, path: "/dashboard" },
    { label: "Appointments", icon: <Calendar3 />, path: "/appointments" },
    { label: "Patients", icon: <People />, path: "/patients" },
    { label: "Prescriptions", icon: <FileText />, path: "/prescriptions" },
    { label: "Messages", icon: <Envelope />, path: "/messages" },
    { label: "Reports", icon: <BarChart />, path: "/reports" },
    { label: "Settings", icon: <Gear />, path: "/settings" },
];
const patientNavItems = [
    { label: "Dashboard", icon: <House />, path: "/patient-dashboard" },
    { label: "Appointments", icon: <Calendar3 />, path: "/appointments" },
    { label: "My Records", icon: <FileText />, path: "/my-records" },
    { label: "Messages", icon: <Envelope />, path: "/messages" },
];
export default function Sidebar(props) {
    const [active, setActive] = useState("Dashboard");
    const navItems = props.userType === "doctor" ? doctorNavItems : patientNavItems;
    return (
        <div className="d-flex flex-column bg-white border-end vh-100 p-3" style={{ width: "250px" }}>
            <ul className="nav nav-pills flex-column">
                {navItems.map((item) => (
                    <li className="nav-item" key={item.label}>
                        <Link
                            to={item.path}
                            className={`nav-link d-flex align-items-center ${active === item.label ? "active" : "text-dark"}`}
                            onClick={() => setActive(item.label)}
                        >
                            <span className="me-2">{item.icon}</span>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

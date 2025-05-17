import React, { useState } from "react";

function Icon(props) {
    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <div
            href="##"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none", // optional: remove underline
                color: "inherit" // inherit text color
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={props.ViewBox}
                width="24"
                height="24"
            >
                <path
                    fill={isMouseOver ? "#17a2b8" : "white"}
                    d={props.D}
                />
            </svg>
            <p style={{ marginLeft: "9px", marginBottom: 0 }}>
                {props.IconName}
            </p>
        </div>
    );
}

export default Icon;

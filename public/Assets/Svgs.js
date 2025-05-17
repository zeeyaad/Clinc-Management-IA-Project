const Svgs = [
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 300"
        style={{
            width: "100px",
            heigth: "100px"
        }}
    >
        {/* Main Circular Frame */}
        <circle
            cx="200"
            cy="150"
            r="85"
            fill="none"
            stroke="#0B1F3A"
            stroke-width="3"
        />
        <circle
            cx="200"
            cy="150"
            r="84"
            fill="none"
            stroke="#0B1F3A"
            stroke-width="3"
        />

        {/* Hexagonal Structure */}
        <path
            d="M200 75 L270 112.5 L270 187.5 L200 225 L130 187.5 L130 112.5 Z"
            fill="none"
            stroke="#0B1F3A"
            stroke-width="6"
        />

        {/* Inner Pattern - Abstracted Sine Wave */}
        <path
            d="M160 150 Q180 120, 200 150 T240 150"
            fill="none"
            stroke="#0B1F3A"
            stroke-width="4"
            stroke-linecap="round"
        />

        {/* Secondary Geometric Elements */}
        <rect
            x="160"
            y="110"
            width="80"
            height="80"
            fill="none"
            stroke="#0B1F3A"
            stroke-width="6"
            transform="rotate(45 200 150)"
        />

        {/* Subtle Grid Lines */}
        <path
            d="M140 130 L260 130 M140 170 L260 170"
            stroke="#0B1F3A"
            stroke-width="0.5"
            stroke-dasharray="1,4"
        />

        {/* Classic Monogram */}
        <text
            x="200"
            y="165"
            font-family="Baskerville"
            font-size="60"
            font-weight="bold"
            fill="#0B1F3A"
            text-anchor="middle"
            font-style="italic"
            letter-spacing="2"
        >
            Es
        </text>

        {/* Name Text */}
        <text
            x="200"
            y="260"
            font-family="Helvetica Neue"
            font-size="30"
            fill="#0B1F3A"
            text-anchor="middle"
            font-weight="600"
            letter-spacing="8"
        >
            ESLAM SAYED
        </text>

        {/* Title */}
        <text
            x="200"
            y="280"
            font-family="Helvetica Neue"
            font-size="20"
            fill="#0B1F3A"
            text-anchor="middle"
            letter-spacing="4"
            font-weight="700"
        >
            MATH PROFESSOR
        </text>

        {/* Elegant Accents */}
        <path
            d="M175 95 L225 95 M175 205 L225 205"
            stroke="#0B1F3A"
            stroke-width="1"
        />

        {/* Fine Detail Lines  */}
        <line
            x1="150"
            y1="150"
            x2="170"
            y2="150"
            stroke="#0B1F3A"
            stroke-width="1"
        />
        <line
            x1="230"
            y1="150"
            x2="250"
            y2="150"
            stroke="#0B1F3A"
            stroke-width="1"
        />
    </svg>,
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 70 65"
    >
        <text
            x="10"
            y="50"
            font-family="Arial, sans-serif"
            font-size="50"
            fill="black"
        >
            All
        </text>
    </svg>,
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="80"
        viewBox="0 0 150 90"
    >
        <text
            x="35"
            y="45"
            fill="black"
            font-family="Arial, sans-serif"
            font-size="20"
        >
            rd
        </text>
        <text
            x="10"
            y="70"
            fill="black"
            font-family="Arial, sans-serif"
            font-size="50"
        >
            3 Sec
        </text>
    </svg>,
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="80"
        viewBox="0 0 150 90"
    >
        <text
            x="35"
            y="45"
            fill="black"
            font-family="Arial, sans-serif"
            font-size="20"
        >
            nd
        </text>
        <text
            x="10"
            y="70"
            fill="black"
            font-family="Arial, sans-serif"
            font-size="50"
        >
            2 Sec
        </text>
    </svg>,
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="80"
        viewBox="0 0 150 90"
    >
        <text
            x="35"
            y="45"
            fill="black"
            font-family="Arial, sans-serif"
            font-size="20"
        >
            st
        </text>
        <text
            x="10"
            y="70"
            fill="black"
            font-family="Arial, sans-serif"
            font-size="50"
        >
            1 Sec
        </text>
    </svg>,
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="80"
        viewBox="0 0 150 90"
    >
        <text
            x="35"
            y="45"
            fill="black"
            font-family="Arial, sans-serif"
            font-size="20"
        >
            rd
        </text>
        <text
            x="10"
            y="70"
            fill="black"
            font-family="Arial, sans-serif"
            font-size="50"
        >
            3 Prep
        </text>
    </svg>,
];
export default Svgs;

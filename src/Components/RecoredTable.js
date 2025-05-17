import React, { useState } from "react";

function RecordTable(props) {
    const [showAll, setShowAll] = useState(false);

    const Data = props.Data;
    const ColumnNames = props.ColumnNames;
    const displayedData = showAll ? Data : Data.slice(0, 3);

    const handleViewMore = () => {
        setShowAll(!showAll);
    };

    return (
        <div style={{ marginBottom: 32 }}>
            <div style={{ borderRadius: 16, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb', padding: 0 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, padding: '24px 24px 0 24px', margin: 0, color: '#222' }}>Lab Results</h2>
                <div style={{ padding: '0 24px 16px 24px' }}>
                    <table style={{ width: '100%', fontSize: '1rem', borderCollapse: 'collapse', marginBottom: 0 }}>
                        <thead>
                            <tr style={{ color: '#4b5563', borderBottom: '1px solid #e5e7eb' }}>
                                {ColumnNames.map((column, idx) => (
                                    <th key={idx} style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>
                                        {column.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {displayedData.map((item, idx) => (
                                <tr key={idx} style={{ borderBottom: idx === displayedData.length - 1 ? 'none' : '1px solid #f1f5f9' }}>
                                    {ColumnNames.map((column, colIdx) => (
                                        <td key={colIdx} style={{ padding: '12px 0', color: '#4b5563' }}>
                                            {/* Special case for download link */}
                                            {column.key === 'link' ? (
                                                <a href={item[column.key]} style={{ color: '#2563eb', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                                    Download
                                                </a>
                                            ) : (
                                                item[column.key]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ textAlign: 'left', paddingTop: 12 }}>
                        <button
                            onClick={handleViewMore}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#2563eb',
                                fontSize: '1rem',
                                fontWeight: 500,
                                cursor: 'pointer',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {showAll ? 'Show Less' : 'View All Lab Reports →'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecordTable;

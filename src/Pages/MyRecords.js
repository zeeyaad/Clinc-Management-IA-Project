import React from 'react';
import Header2 from '../Components/header2';
import RecordTable from '../Components/RecoredTable';

function MyRecords() {
    // Medical History data
    const medicalHistory = [
        { condition: 'Hypertension', date: 'Jan 12, 2021', status: 'Ongoing', notes: 'Requires regular check-ups' },
        { condition: 'Asthma', date: 'Aug 8, 2019', status: 'Managed', notes: 'Mild, inhaler prescribed' },
        { condition: 'Allergies', date: 'May 4, 2015', status: 'Active', notes: 'Pollen, Dust' },
    ];
    const medicalHistoryColumnNames = [
        { label: 'Condition', key: 'condition' },
        { label: 'Diagnosed On', key: 'date' },
        { label: 'Status', key: 'status' },
        { label: 'Notes', key: 'notes' },
    ];

    // Lab Results data
    const labResults = [
        { name: 'Blood Glucose', date: 'Apr 18, 2023', result: '90 mg/dL', status: 'Normal' },
        { name: 'CBC', date: 'Mar 29, 2023', result: 'See Report', status: 'Reviewed' },
        { name: 'Cholesterol Panel', date: 'Feb 10, 2023', result: '', status: '' },
    ];
    const labResultsColumnNames = [
        { label: 'Test Name', key: 'name' },
        { label: 'Date', key: 'date' },
        { label: 'Result', key: 'result' },
        { label: 'Status', key: 'status' },
    ];

    // Documents/Files data
    const documents = [
        { name: 'Prescription_Jan2023.pdf', date: 'Jan 5, 2023', type: 'Prescription', link: '#' },
        { name: 'XRay_Report_March.pdf', date: 'Mar 29, 2023', type: 'Imaging', link: '#' },
    ];
    const documentsColumnNames = [
        { label: 'File Name', key: 'name' },
        { label: 'Uploaded On', key: 'date' },
        { label: 'Type', key: 'type' },
        { label: 'Download', key: 'link' },
    ];

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: 40 }}>
            <Header2 />
            <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 16px 0 16px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 8, color: '#111827' }}>My Records</h1>
                <p style={{ color: '#64748b', fontSize: '1.25rem', marginBottom: 32 }}>View and manage your health history</p>

                {/* Medical History Section */}
                <RecordTable Data={medicalHistory} ColumnNames={medicalHistoryColumnNames} />

                {/* Lab Results Section */}
                <RecordTable Data={labResults} ColumnNames={labResultsColumnNames} />

                {/* Documents / Files Section */}
                <RecordTable Data={documents} ColumnNames={documentsColumnNames} />
            </div>
        </div>
    );
}

export default MyRecords;

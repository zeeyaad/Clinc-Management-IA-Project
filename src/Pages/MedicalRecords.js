import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MedicalRecords.css';

const MedicalRecords = () => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [newRecord, setNewRecord] = useState({
        title: '',
        description: '',
        file: null
    });

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await axios.get('http://localhost:5078/api/medical-records', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setRecords(response.data);
            } catch (err) {
                setError('Failed to load medical records');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecords();
    }, []);

    const handleFileChange = (e) => {
        setNewRecord({
            ...newRecord,
            file: e.target.files[0]
        });
    };

    const handleInputChange = (e) => {
        setNewRecord({
            ...newRecord,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', newRecord.title);
            formData.append('description', newRecord.description);
            formData.append('file', newRecord.file);
            formData.append('fileType', newRecord.file.type);

            await axios.post('http://localhost:5078/api/medical-records', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            // Reset form
            setNewRecord({
                title: '',
                description: '',
                file: null
            });

            // Refresh records
            const response = await axios.get('http://localhost:5078/api/medical-records', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setRecords(response.data);

            // Show success message
            alert('Medical record added successfully!');
        } catch (err) {
            setError('Failed to upload record. Please try again.');
        }
    };

    if (loading) {
        return <div className="loading">Loading records...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="medical-records">
            <h1>Medical Records</h1>

            <div className="upload-section">
                <h2>Upload New Record</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={newRecord.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={newRecord.description}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>File:</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    <button type="submit" className="upload-button">
                        Upload Record
                    </button>
                </form>
            </div>

            <div className="records-list">
                <h2>Your Records</h2>
                {records.length === 0 ? (
                    <p>No records found.</p>
                ) : (
                    <div className="records-grid">
                        {records.map((record) => (
                            <div key={record.id} className="record-card">
                                <h3>{record.title}</h3>
                                <p><strong>Date:</strong> {new Date(record.date).toLocaleDateString()}</p>
                                <p><strong>Doctor:</strong> {record.doctor}</p>
                                <p><strong>Description:</strong> {record.description}</p>
                                {record.attachments && record.attachments.length > 0 && (
                                    <div className="attachments">
                                        <strong>Attachments:</strong>
                                        <ul>
                                            {record.attachments.map((attachment, index) => (
                                                <li key={index}>
                                                    <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                                                        {attachment.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MedicalRecords; 
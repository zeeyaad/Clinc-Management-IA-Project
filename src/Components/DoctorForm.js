import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const DoctorForm = ({ onDoctorAdded }) => {
    const [formData, setFormData] = useState({
        name: '',
        specialization: '',
        email: '',
        mobile: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/doctors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to add doctor');
            }

            const data = await response.json();
            setFormData({
                name: '',
                specialization: '',
                email: '',
                mobile: '',
                password: ''
            });
            onDoctorAdded(data);
        } catch (err) {
            console.error('Error:', err);
            setError('Failed to add doctor. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto space-y-4">
            <h2 className="text-xl font-semibold mb-4">Add New Doctor</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <InputField
                    label="Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <InputField
                    label="Specialization"
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    required
                />

                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <InputField
                    label="Mobile"
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />

                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Adding..." : "Add Doctor"}
                </Button>
            </form>
        </div>
    );
};

export default DoctorForm; 
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const ScheduleForm = ({ doctors, onScheduleAdded }) => {
    const [formData, setFormData] = useState({
        doctorId: '',
        date: '',
        startTime: '',
        endTime: '',
        maxAppointments: 10
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
            const response = await fetch('http://localhost:5000/api/doctor-schedules', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to add schedule');
            }

            const data = await response.json();
            setFormData({
                doctorId: '',
                date: '',
                startTime: '',
                endTime: '',
                maxAppointments: 10
            });
            onScheduleAdded(data);
        } catch (err) {
            console.error('Error:', err);
            setError('Failed to add schedule. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto space-y-4">
            <h2 className="text-xl font-semibold mb-4">Add New Schedule</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium">Select Doctor</label>
                    <select
                        name="doctorId"
                        value={formData.doctorId}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select a doctor</option>
                        {doctors.map(doctor => (
                            <option key={doctor.id} value={doctor.id}>
                                {doctor.name} - {doctor.specialization}
                            </option>
                        ))}
                    </select>
                </div>

                <InputField
                    label="Date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                />

                <InputField
                    label="Start Time"
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                />

                <InputField
                    label="End Time"
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    required
                />

                <InputField
                    label="Max Appointments"
                    type="number"
                    name="maxAppointments"
                    value={formData.maxAppointments}
                    onChange={handleChange}
                    required
                    min="1"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Adding..." : "Add Schedule"}
                </Button>
            </form>
        </div>
    );
};

export default ScheduleForm; 
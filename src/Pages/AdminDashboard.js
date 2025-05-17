import React, { useState, useEffect } from 'react';
import Header2 from '../Components/header2';
import DoctorForm from '../Components/DoctorForm';
import ScheduleForm from '../Components/ScheduleForm';

const AdminDashboard = () => {
    const [doctors, setDoctors] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('doctors');

    useEffect(() => {
        fetchDoctors();
        if (activeTab === 'schedules') {
            fetchSchedules();
        }
    }, [activeTab]);

    const fetchDoctors = async () => {
        try {
            const response = await fetch('http://localhost:5078/api/doctors', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch doctors');
            }

            const data = await response.json();
            setDoctors(data);
        } catch (err) {
            console.error('Error:', err);
            setError('Failed to load doctors. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const fetchSchedules = async () => {
        try {
            const response = await fetch('http://localhost:5078/api/doctor-schedules', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch schedules');
            }

            const data = await response.json();
            setSchedules(data);
        } catch (err) {
            console.error('Error:', err);
            setError('Failed to load schedules. Please try again.');
        }
    };

    const handleDoctorAdded = (newDoctor) => {
        setDoctors(prev => [...prev, newDoctor]);
    };

    const handleScheduleAdded = (newSchedule) => {
        setSchedules(prev => [...prev, newSchedule]);
        fetchSchedules(); // Refresh the entire list
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-lg">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <>
            <Header2 />
            <div className="p-4 max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

                {/* Tabs */}
                <div className="flex space-x-4 mb-6">
                    <button
                        onClick={() => setActiveTab('doctors')}
                        className={`px-4 py-2 rounded ${activeTab === 'doctors'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        Manage Doctors
                    </button>
                    <button
                        onClick={() => setActiveTab('schedules')}
                        className={`px-4 py-2 rounded ${activeTab === 'schedules'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        Manage Schedules
                    </button>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Forms */}
                    <div>
                        {activeTab === 'doctors' ? (
                            <DoctorForm onDoctorAdded={handleDoctorAdded} />
                        ) : (
                            <ScheduleForm
                                doctors={doctors}
                                onScheduleAdded={handleScheduleAdded}
                            />
                        )}
                    </div>

                    {/* Lists */}
                    <div>
                        {activeTab === 'doctors' ? (
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold">Current Doctors</h2>
                                <div className="grid gap-4">
                                    {doctors.map(doctor => (
                                        <div
                                            key={doctor.id}
                                            className="p-4 bg-white rounded-lg shadow"
                                        >
                                            <h3 className="font-semibold">{doctor.name}</h3>
                                            <p><span className="font-medium">Specialization:</span> {doctor.specialization}</p>
                                            <p><span className="font-medium">Email:</span> {doctor.email}</p>
                                            <p><span className="font-medium">Mobile:</span> {doctor.mobile}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold">Current Schedules</h2>
                                <div className="grid gap-4">
                                    {schedules.map(schedule => (
                                        <div
                                            key={schedule.id}
                                            className="p-4 bg-white rounded-lg shadow"
                                        >
                                            <h3 className="font-semibold">
                                                {doctors.find(d => d.id === schedule.doctorId)?.name || 'Unknown Doctor'}
                                            </h3>
                                            <p><span className="font-medium">Date:</span> {new Date(schedule.date).toLocaleDateString()}</p>
                                            <p><span className="font-medium">Time:</span> {schedule.startTime} - {schedule.endTime}</p>
                                            <p><span className="font-medium">Max Appointments:</span> {schedule.maxAppointments}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard; 
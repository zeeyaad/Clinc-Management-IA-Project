import React from "react";

function Documents() { 

    const files = [
        { name: 'Prescription_Jan2023.pdf', date: 'Jan 10, 2023', type: 'Prescription' },
        { name: 'XRay_Report_March.pdf', date: 'Mar 5, 2023', type: 'Imaging' },
        { name: 'Lab_Report_April.pdf', date: 'Apr 18, 2023', type: 'Lab Report' }
    ];

    return (
        <>
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-3">Documents / Files</h2>
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left text-gray-500 border-b">
                            <th>File Name</th>
                            <th>Uploaded On</th>
                            <th>Type</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((item, idx) => (
                            <tr key={idx} className="border-b last:border-0">
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{item.type}</td>
                                <td>
                                    <button className="text-blue-600 hover:underline text-sm">⬇️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-right mt-2">
                    <button className="text-sm text-blue-600 hover:underline">Upload New Document</button>
                </div>
            </div>
        </>
    );
}

export default Documents;
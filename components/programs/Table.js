import React from 'react';

export default function Table({ events }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Event</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index} className="text-center border-t">
              <td className="px-4 py-2">{event.name}</td>
              <td className="px-4 py-2">{event.date}</td>
              <td className="px-4 py-2">{event.location}</td>
              <td className="px-4 py-2">{event.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



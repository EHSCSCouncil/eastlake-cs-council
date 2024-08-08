import React from 'react';

interface Event {
  date: string;
  title: string;
  description: string;
}

const events: Event[] = [
  { date: '2024-08-10', title: 'Event 1', description: 'Description of Event 1' },
  { date: '2024-08-15', title: 'Event 2', description: 'Description of Event 2' },
];

const EventSchedule: React.FC = () => {
  return (
    <table className="min-w-full bg-white mb-6">
      <thead>
        <tr>
          <th className="py-2">Date</th>
          <th className="py-2">Event</th>
          <th className="py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index} className="text-center border-t">
            <td className="py-2">{event.date}</td>
            <td className="py-2">{event.title}</td>
            <td className="py-2">{event.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventSchedule;
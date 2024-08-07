import React from 'react';

interface EventContentBlockProps {
  title: string;
  description: string;
  date: string;
}

const EventContentBlock: React.FC<EventContentBlockProps> = ({ title, description, date }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <span className="text-gray-500">{date}</span>
    </div>
  );
};

export default EventContentBlock;
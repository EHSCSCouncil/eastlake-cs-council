import React from 'react';

interface NameplateProps {
  name: string;
  position: string;
  avatarUrl: string;
}

const Nameplate: React.FC<NameplateProps> = ({ name, position, avatarUrl }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex items-center mb-6">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
};

export default Nameplate;
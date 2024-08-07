// components/Sponsors.tsx
import React from 'react';

interface Sponsor {
  name: string;
  logoUrl: string;
}

const sponsors: Sponsor[] = [
  // Populate with actual sponsor data
  { name: 'Sponsor 1', logoUrl: '/path/to/logo1.png' },
  { name: 'Sponsor 2', logoUrl: '/path/to/logo2.png' },
];

const Sponsors: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around items-center">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="m-4">
          <img src={sponsor.logoUrl} alt={`${sponsor.name} logo`} className="h-20" />
          <p className="text-center mt-2">{sponsor.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
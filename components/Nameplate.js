import Plate from '@/components/Plate';

const profiles = [
    {
      image: '/path-to-image-1.jpg',
      name: 'Alice Johnson',
      description: 'AI Researcher and Developer',
    },
    {
      image: '/path-to-image-2.jpg',
      name: 'Bob Smith',
      description: 'Web Developer and Educator',
    },
  ];

export default function NameplateGrid({ profiles }) {
    return (
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {profiles.map((profile, index) => (
          <Plate
            key={index}
            image={profile.image}
            name={profile.name}
            description={profile.description}
          />
        ))}
      </div>
    );
  }

import Image from 'next/image';

export default function Nameplate({ image, name, description }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto transform transition-all hover:scale-105">
        <div className="flex flex-col items-center">
          {/* Profile image with larger size */}
          <div className="rounded-full overflow-hidden w-40 h-40 mb-6">
            <Image
              src={image}
              alt={name}
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          {/* Larger name and description */}
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-gray-700 text-center text-lg">{description}</p>
        </div>
      </div>
    );
  }
import React from 'react';

export default function TextBox({ title, description }) {
    return (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl text-center mb-4">{title}</h2>
          <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-6 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      );
}


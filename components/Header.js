'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">CS Outreach</div>
        <div className="relative flex space x-8">
          <Link href="/" className="text-gray-900 hover:text-gray-1100 mx-2">
            Home
          </Link>
          <div className="inline-block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-gray-1100 mx-2 focus:outline-none"
            >
              Programs
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg z-50 rounded-md">
                <div className="absolute -top-2 left-4 w-3 h-3 bg-white transform rotate-45 border-t border-l border-gray-200"></div>

                <ul className="py-2">
                  <li>
                    <Link href="/programs/hoc" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Hour of Code
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/team" className="text-gray-900 hover:text-gray-1100 mx-2">
            Our Team
          </Link>
          <Link href="#" className="text-gray-900 hover:text-gray-1100 mx-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

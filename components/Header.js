'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">Eastlake CS Outreach Council</div>
        <div className="relative flex space-x-8">
          <Link href="/" className="text-gray-900 hover:text-gray-1100 mx-2">
            Home
          </Link>
          <div className="relative group inline-block">
            <button className="text-gray-900 hover:text-gray-1100 mx-2 focus:outline-none " >
              Programs
            </button>
            <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg z-50 rounded-md">
              <ul>
                <li>
                  <Link href="/programs/2023" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    PAST 2023-2024 Events
                  </Link>
                </li>
              </ul>
            </div>
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

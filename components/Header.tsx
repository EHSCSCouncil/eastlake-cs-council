import Link from 'next/link';

function Header() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">CS Outreach</div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-900 hover:text-gray-1100 mx-2">Home</Link>
          <Link href="/about" className="text-gray-900 hover:text-gray-1100 mx-2">About</Link>
          <Link href="/programs" className="text-gray-900 hover:text-gray-1100 mx-2">Programs</Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-1100 mx-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
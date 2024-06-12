import Slideshow from '@/components/Slideshow';
import Head from 'next/head';
import Link from 'next/link';

function Header() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">CS Outreach</div>
        <div>
          <Link href="#" className="text-gray-900 hover:text-gray-1100 mx-2">Home</Link>
          <Link href="#" className="text-gray-900 hover:text-gray-1100 mx-2">About</Link>
          <Link href="#" className="text-gray-900 hover:text-gray-1100 mx-2">Programs</Link>
          <Link href="#" className="text-gray-900 hover:text-gray-1100 mx-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
function About() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">About CS Council</h2>
      <p className="text-gray-700 leading-relaxed">
        Our mission is to empower the next generation of computer scientists through hands-on learning experiences and community engagement.
      </p>
    </section>
  );

}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 CS Outreach Council. All rights reserved.</p>
      </div>
    </footer>
  );
}


export default function Home() {
  return (
    <div>
      <Head>
        <title>CS Outreach Council</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        <Header/>
        <Slideshow />
       
        <About />
      </main>

      <Footer />
    </div>
  );
}



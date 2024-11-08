import Head from 'next/head';
import NameplateGrid from '@/components/Nameplate';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Team() {
  const profiles = [
    {
      image: '/pfps/logo.jpg', name: 'Hongning Wang', description: 'Co-President'
    },
    {
      image: '/pfps/logo.jpg', name: 'Prisha Shah', description: 'Co-President'
    },
    {
      image: '/pfps/logo.jpg', name: 'Pranav Tripathi', description: 'Co-VP'
    },
    {
      image: '/pfps/logo.jpg', name: 'Harshit Agrawal', description: 'Co-VP'
    }

  ];

  return (
    <div>

      <main className="min-h-screen bg-gray-100">
        <Header />
        
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <NameplateGrid profiles={profiles} />
        </section>
      </main>
      <h2 className="text-3xl font-bold text-center mb-8">More members to be added!</h2>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Our team',
  link: "/favicon.ico"
}

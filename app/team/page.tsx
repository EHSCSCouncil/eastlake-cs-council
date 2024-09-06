import Head from 'next/head';
import NameplateGrid from '@/components/Nameplate';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Team() {
  const profiles = [
    {
      image: '/pfps/jd.jpg', name: 'Jane Doe', description: 'Member'
    },
    {image: '/pfps/ae.jpg', name: 'Albert Einstein', description: 'Member'}
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

      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Tu madre',
  link: "/favicon.ico"
}

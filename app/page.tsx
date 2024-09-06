import Slideshow from '@/components/Slideshow';
import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
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




export default function Home() {
  return (
    <div>
  

      <main className="min-h-screen bg-gray-100">
        <Header/>
        <Slideshow />
       
        <About />
      </main>

      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Home',
  link: "/favicon.ico"
}


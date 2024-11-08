import Slideshow from '@/components/Slideshow';
import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
function About() {
  return (
    <section className="container mx-auto px-4 py-16 ">
      <h2 className="text-3xl font-bold mb-6 text-center">About CS Council</h2>
      <p className="text-gray-700 leading-relaxed">
      Computer Science Outreach Council (CS Council) is a premier LWSD-based STEM outreach program that combines the pillars of service and technology to foster a collaborative environment of STEM learning. Through events like STEM Expos, Hackathons, Codefairs, and more, CS Council aims to spread accessibility in computer science education across the Greater Seattle area and beyond.
      </p>
      
      <ul  className="text-gray-700 leading-relaxed list-disc">
        <li>Total Impact: 2,800+ students reached directly through events across 24+ schools and 3 cities</li>
        <li>Past sponsors: Art of Problem Solving and Jane Street </li>
      </ul>
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


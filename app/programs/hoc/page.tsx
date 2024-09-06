import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Table from '@/components/programs/Table';
import TextBox from '@/components/programs/Descriptor';
import FAQ from '@/components/programs/FAQ';

export default function TeamPage() {
  const events = [
    { name: 'Intro to Python', date: 'September 19, 2024', location: 'C112', details: 'Introduction to Python.' },
    { name: 'LLM', date: 'September 19, 2024', location: 'C112', details: 'Wheeeeeee.' },
  ];

  const faqs = [
    { question: 'What is 1+1?', answer: '2' },
  ];

  return (
    <div>
 
      <main className="min-h-screen bg-gray-100">
        <Header />

        <TextBox
          title="Coding Event"
          description="I only know that summer sang in me, a little while, that in me sings no more"
        />
        <Table events={events} />
        <FAQ faqs={faqs} />
      </main>

      <Footer />
    </div>
  );
}
export const metadata = {
    title: 'Tu madre',
    link: "/favicon.ico"
  }
  
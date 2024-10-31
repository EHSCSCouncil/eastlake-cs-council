import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Table from '@/components/programs/Table';
import TextBox from '@/components/programs/Description';
import FAQ from '@/components/programs/FAQ';

export default function TeamPage() {
  const events = [
    { name: '\'Spooktacular\' Codefest', date: 'November 2023', location: 'Eastlake High School', details: "STEM Fair-esque event for 250+ participants"},
    { name: 'Hour of Code', date: 'December 2023', location: 'Elementary Schools Across the District', details: "Introduced 50+ classrooms of elementary school students to computer science concepts"},
    { name: 'PackHacks', date: 'June 2024', location: 'Virtual', details: "Our weeklong virtual hackathon for 50+ students."},
    { name: 'CodeWolves', date: 'May 2024', location: 'Virtual', details: "Our virtual algorithmic programming competition"}
  ];

  return (
    <div>
 
      <main className="min-h-screen bg-gray-50">
        <Header />
        <h1 className="text-3xl font-bold mb-6 text-center py-8"> PAST events in the 2023-2024 School Year</h1>
        
        <Table events={events} />
        <TextBox
          title="Spooktacular Codefest"
          description="The CodeFest was a day-long STEM fair aimed at introducing the vast fields of computer science to elementary and middle school students. Through workshops in LLMs, data science, AI, Python, and more, the CodeFest caters to our youngest generation of aspiring computer scientists. With dozens of booths, various guest speakers in computer science professions, and fun activities like an Estimathon, students can gain inspiration to pursue their future career passions, forge connections with experienced professionals, and explore the vast world of opportunities in STEM! Our guest speakers were Sreenath Sundhir and Vinod Durairaj."
        />

      </main>

      <Footer />
    </div>
  );
}
export const metadata = {
    title: 'PAST 2023-2024',
    link: "/favicon.ico"
  }
  
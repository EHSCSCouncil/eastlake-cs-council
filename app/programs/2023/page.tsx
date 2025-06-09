
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Table from '@/components/programs/Table';
import TextBox from '@/components/programs/TextBox';
import FAQ from '@/components/programs/FAQ';

export default function Page2023() {
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
        <TextBox
          title="Hour of Code"
          description="CS Council's Hour of Code is an event focused on introducing elementary school students to computer science concepts. Participants engage in hands-on coding activities that foster creativity and problem-solving skills. Through fun workshops such as AI for Oceans, Minecraft “Voyage Aquatic,” and “Operation Cloud” cryptography, students learn the basics of programming in a supportive environment. This initiative aims to inspire the next generation of tech enthusiasts."
        />
        <TextBox
          title="PackHack"
          description="PackHack is a hackathon hosted by Eastlake CS Council, aimed to broaden students' awareness and insight into emerging topics of relevance. PackHack aspires to encourage middle school students to elevate their coding skills and apply them towards a problem that solves a real-world problem related to the yearly themes. In the 2024 hackathon cycle, the two themes were emerging technology and transportation. We challenged students to develop skills through the creation of innovations using computer science in these fields. 
"
        />
        <TextBox
          title="CodeWolves"
          description="CodeWolves is an algorithmic programming competition aiming to introduce students the world of competitive programming. We challenged students with 10 questions of increasing difficulty." 

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
  